import dbKnex from '../database/db_config.js';

export const listarPizzar = async (req, res) => {
    try {
        const pizzas = await dbKnex('pizzas').select('*');
        res.status(200).json(pizzas);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const pizzaGetId = async (req, res) => {
    const {pizzaId} = req.params;
    
    try {
        const produto = await dbKnex('pizzas').select('*').where({id: pizzaId});
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const criadorPizza = async (req, res) => {
    const { imgurl, preco,pizzaname } = req.body;

    if (!pizzaname || !preco || !imgurl) {
        res.status(400).json({ message: 'Dados inválidos' });
        return; // Encerre a função após a resposta.
    }

    try {
        const pizzas = await dbKnex('pizzas').insert({ pizzaname, preco,imgurl });
        res.status(201).json(pizzas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const backendUrl = 'https://localhost:3003/cliente'

const idProduto = document.querySelector('#idProduto')
const urlImg = document.querySelector('#urlImg')
const nome = document.querySelector('#nome')
const preco = document.querySelector('#preco')
//Mandar o valor das const acima para o html

const formulario = document.querySelector('#cadastro-f')
formulario.addEventListener("submit", criadorPizza)

async function criadorPizza(event){
    idProduto.value
    alert(idProduto)
    event.preventdefault() 
    urlImg.value
    alert(urlImg)
    nome.value
    alert(nome)
    preco.value
    alert(preco)

    pizzas = {
    id: idProduto,
    imgurl: urlImg,
    pizzaname: nome,
    preco: preco
    };
    try{
        const conectar = await fetch(
            backendUrl,{
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(pizzas)
            }
        )
        if (conectar.ok){
            document.querySelector('cadastro-form')
        }else{
            console.error('deu n')
        }
    }catch(error)
    {
        console.error('Deu erro ai na real')
    }
    event.preventdefault() 
}
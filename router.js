import {Router,json} from 'express';
import { criadorPizza, listarPizzar, pizzaGetId } from './controllers/produtoController.js';

const router = Router();
// Permite que as rotas entendam requisições com o corpo no formato JSON
router.use(json())

// Lista de endpoints
router.get('/produto',listarPizzar )
router.post('/produto', criadorPizza)
router.get('/produto/:pizzaId', pizzaGetId)

export default router;

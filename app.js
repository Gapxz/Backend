import express from 'express'
import cors from 'cors'
const app = express()
const port = 3003


import router from './router.js';

app.use(cors())
// Registra as rotas na raiz da aplicação
app.use(router);
// Permite que o express entenda requisições com o corpo no formato JSON
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
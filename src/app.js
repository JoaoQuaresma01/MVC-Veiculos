const express = require('express');
const path = require('path');
const veiculoRoutes = require('./routes/veiculoRoutes');

const app = express();
const port = 3000;

// Configurar EJS como view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas
app.use('/veiculos', veiculoRoutes);

// Rota raiz redireciona para /veiculos
app.get('/', (req, res) => res.redirect('/veiculos'));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

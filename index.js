const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.post('/mensagem', (req, res) => {
  const { texto } = req.body;
  res.json({ recebido: texto });
});

app.put('/mensagem/:id', (req, res) => {
  const { id } = req.params;
  const { texto } = req.body;
  res.json({ id, atualizado: texto });
});

app.delete('/mensagem/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, removido: true });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

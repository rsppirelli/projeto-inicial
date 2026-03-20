# Projeto Inicial

API REST simples construída com Node.js e Express.

## Requisitos

- Node.js (instalado via nvm)

## Instalação

```bash
npm install
```

## Uso

```bash
node index.js
```

O servidor inicia em `http://localhost:3000`.

## Rotas

| Método | Rota             | Descrição                  |
|--------|------------------|----------------------------|
| GET    | /                | Retorna mensagem de boas-vindas |
| POST   | /mensagem        | Recebe um texto via JSON   |
| PUT    | /mensagem/:id    | Atualiza uma mensagem pelo id |
| DELETE | /mensagem/:id    | Remove uma mensagem pelo id |

## Exemplos

```bash
# GET
curl http://localhost:3000

# POST
curl -X POST http://localhost:3000/mensagem -H "Content-Type: application/json" -d '{"texto":"Ola!"}'

# PUT
curl -X PUT http://localhost:3000/mensagem/1 -H "Content-Type: application/json" -d '{"texto":"Atualizado"}'

# DELETE
curl -X DELETE http://localhost:3000/mensagem/1
```

# API com Node.js, Express e MongoDB

Este repositório contém uma API simples utilizando **Node.js**, **Express** e **MongoDB**.

## 📌 Tecnologias Utilizadas
- Node.js
- Express
- MongoDB + Mongoose
- Dotenv
- Nodemon (para desenvolvimento)

## 🚀 Como Rodar o Projeto

### 1️⃣ Clonar o repositório
```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2️⃣ Instalar dependências
```sh
npm install
```

### 3️⃣ Configurar variáveis de ambiente
Crie um arquivo **.env** na raiz do projeto e adicione:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/seu_banco
```

### 4️⃣ Iniciar o servidor
```sh
npm start  # Para produção
npm run dev  # Para desenvolvimento com nodemon
```

## 📡 Rotas Disponíveis

### 🔹 Rota de Teste
```http
GET /api/test
```
Resposta:
```json
{ "message": "API funcionando!" }
```

### 🔹 Exemplo de Rota com MongoDB
```http
GET /api/items
```
Resposta:
```json
[
  { "_id": "123", "name": "Item 1" },
  { "_id": "456", "name": "Item 2" }
]
```

## 🛠 Scripts Disponíveis
- `npm start` → Inicia a API em modo de produção
- `npm run dev` → Inicia a API com Nodemon (hot reload)

## 📜 Licença
Este projeto está sob a licença MIT. Sinta-se livre para utilizá-lo e modificá-lo.


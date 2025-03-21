// config será passado em database.js e de database.js vai para app.js => server.js
require('dotenv').config()

module.exports = {
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/authapi"
}
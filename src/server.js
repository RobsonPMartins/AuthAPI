// Server.js (entrada principal da aplicação)
const app = require('./app/app')

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`🚀 Server is running in the http://localhost:${PORT} 😎`);
})
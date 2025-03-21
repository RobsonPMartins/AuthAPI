// routes.js (todas rotas)
const express = require('express')
const router = express.Router()
// rota auth
const authRoutes = require('./authRoutes')

// Get de test
router.get('/', (req, res) => {
    res.send('Routes / Get Acess Ok!')
})

// ########
router.use('/auth', authRoutes) // secondary => api/auth/?


module.exports = router
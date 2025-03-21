// rota de auth
const express = require('express')
const authController = require('../controllers/authController')

const router = express.Router()

// register
router.post('/register', authController.register);

// login
router.post('/login', authController.login)


module.exports = router
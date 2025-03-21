const jwt = require('jsonwebtoken')

exports.authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')

    if (!token) {
        return res.status(401).json({ mensagem: 'Acesso negado! Token não fornecido' })
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        res.status(401).json({ mensagem: 'Token inválido!' })
    }
}

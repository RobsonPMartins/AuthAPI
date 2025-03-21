// register / login
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

// Criando e registrando
exports.register = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({ message: "O campo nome é obrigatório" });
        }

        const usuarioExistente = await User.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).json({ message: "Este email já está registrado" });
        }  

        const novoUsuario = new User({ nome, email, senha });
        await novoUsuario.save();

        const token = jwt.sign({ nome, email }, JWT_SECRET, { expiresIn: '1h' })
        res.status(201).json({ 
            message: "Usuário registrado com sucesso!",
            usuario: novoUsuario,
            token
        });

        console.log('User =>', novoUsuario)

    } catch (error) {
        console.error("Erro ao registrar usuário:", error);
        res.status(500).json({ message: "Erro interno no servidor" });
    }
};

// Login de usuário
exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ message: "Email e senha são obrigatórios" });
        }

        // Encontrar o usuário pelo email
        const usuario = await User.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ message: "Usuário não encontrado" });
        }

        // Verificar se a senha está correta
        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
            return res.status(400).json({ message: "Senha incorreta" });
        }

        // Gerar o token JWT
        const token = jwt.sign({ nome: usuario.nome, email: usuario.email }, JWT_SECRET, { expiresIn: '1h' });

        // Enviar resposta com o token
        res.status(200).json({
            message: "Login realizado com sucesso!",
            token
        });

        console.log('Indo => dash', token)

    } catch (error) {
        console.error("Erro ao fazer login:", error);
        res.status(500).json({ message: "Erro interno no servidor" });
    }
};
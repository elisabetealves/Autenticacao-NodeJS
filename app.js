require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const PORT = 5000;
const User = require('./models/User');

const app = express();

//config JSON response
app.use(express.json())


// Open Route - Public Route
app.get('/', (req, res) => {
    res.status(200).json({message: 'Bem-vindx a nossa API!'});
})

// Private Route
app.get('/user/:id', checkToken, async (req, res) => {
    
    const id = req.params.id;

    //check if user exists
    const user = await User.findById(id, '-password')
    
    if(!user){
        return res.status(404).json({message: 'Usuário não encontrado'})
    }

    res.status(200).json({ user })
})

function checkToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({ message: 'Acesso negado!'})
    }

    try{
        const secret = process.env.SECRET

        jwt.verify(token, secret);

        next();

    } catch(error){
        res.status(400).json({message: 'Token inválido!'})
    }
}

//Register User
app.post('/auth/register', async (req, res) => {
    const{ name, email, password, confirmpassword } = req.body

    //Validations
    if(!name){
        return res.status(422).json({message: 'O nome é obrigatório!'});
    }

    if(!email){
        return res.status(422).json({message: 'O email é obrigatório!'});
    }

    if(!password){
        return res.status(422).json({message: 'Asenha é obrigatória!'});
    }

    if(password !== confirmpassword){
        return res.status(422).json({message: 'As senhas não conferem!'});
    }

    // check if user exists
    const userExists = await User.findOne({ email: email });

    if(userExists){
        return res.status(422).json({message: 'Por favor, utilize outro e-mail'})
    }

    // create password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    //create user
    const user = new User({
        name,
        email,
        password: passwordHash,
    })

    try{
        await user.save();

        res.status(201).json({message: 'Usuário criado com sucesso!'})

    }catch(error){
        console.log(error)
        res
         .status(500)
         .json({message: 'Aconteceu um erro no servidor, tente novamente mais tarde!',
        })       
    }

})

//Login User
app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;

    //valadations
    if(!email){
        return res.status(422).json({message: 'O email é obrigatório!'});
    }

    if(!password){
        return res.status(422).json({message: 'Asenha é obrigatória!'});
    }

    // check if user exists
    const user = await User.findOne({ email: email });

    if(!user){
        return res.status(404).json({message: 'Usiário não encontrado'});
    }

    //check if password match
    const checkPassword = await bcrypt.compare(password, user.password);

    if(!checkPassword){
        return res.status(422).json({message: 'Senha inválida'});
    }

    try{
        const secret = process.env.SECRET;

        const token = jwt.sign(
            {
                id: user._id
            },
            secret
        )

        res.status(200).json({message: 'Autenticação realizada com sucesso!', token})

    }catch(error){
        console.log(error)
        res
         .status(500)
         .json({message: 'Aconteceu um erro no servidor, tente novamente mais tarde!',
        });
    }

})

//Credencials
const dbuser = process.env.DB_USER;
const dbpassword = process.env.DB_PASS;

mongoose.connect(`mongodb+srv://${dbuser}:${dbpassword}@cluster0.xffx7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then(() => {
    console.log('Conectou ao banco');
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
    });
})
.catch((err) => console.log(err));
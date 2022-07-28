const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// create the app 
const app = express();

// set the port
app.listen(8000, ()=> {
    console.log('server listen on port 8000');
})

// ROUTES 
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

// CORS management 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

app.use(cors());

// parse application/json
app.use(express.json());


// connection to database (mongoDB)
mongoose.connect('mongodb+srv://nozgood:piratage59@projet7.tkmrk.mongodb.net/?retryWrites=true&w=majority',
    {useNewUrlParser: true,
    useUnifiedTopology: true 
})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


// ALL ROUTES 

// route to signup/login
app.use('/api/auth', userRoutes);

// routes for posts 
app.use('/api/posts', postRoutes);

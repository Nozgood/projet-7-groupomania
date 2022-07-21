const express = require('express');
const mongoose = require('mongoose');

// create the app 
const app = express();

// set the port
app.listen(8000, ()=> {
    console.log('server listen on port 8000');
})

// route to test 
app.get('/api', (req, res)=> {
    res.json({posts : ['postOne', 'postTwo', 'postThree']});
})

// connection to database (mongo)
mongoose.connect('mongodb+srv://nozgood:piratage59@projet7.tkmrk.mongodb.net/?retryWrites=true&w=majority',
    {useNewUrlParser: true,
    useUnifiedTopology: true 
})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


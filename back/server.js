require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000

// initialisation
const db = mysql.createConnection({
    host     : 'localhost',
    port     :  3308,
    user     : 'root',
    password : '123',
    database : 'groupodb'
})


// connection
db.connect((err) => {
    if(err) {throw err} 
    else {
        console.log('db ok')
    }
    } 
)



app.get('/api', (req, res) => {
    res.json({ 'posts' : ['postOne', 'postTwo', 'postThree'] });
})

app.listen(port, () => {
    console.log(`server started on port ${port}`)
});
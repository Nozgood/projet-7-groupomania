require('dotenv').config();
console.log(process.env);

const express = require('express');
const app = express();

const port = process.env.PORT || 5000

app.get('/api', (req, res) => {
    res.json({'posts' : ['postOne, postTwo, postThree']});
})

app.listen(port, () => {
    console.log(`server started on port ${port}`)
});
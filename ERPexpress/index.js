console.log('test nodemon');

const express = require('express'); // rappelle d'express

const app = express(); // implementation du service

// route principale
app.get('/', (req, res) => {
    res.send('bienvenue')
})

// creation du localhot:4000
app.listen(4000, ()=>{
    console.log('serveur en place');
})

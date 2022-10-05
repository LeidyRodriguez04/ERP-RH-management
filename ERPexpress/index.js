const { Router } = require('express');
const express = require('express'); // rappelle d'express
const connectDB = require('./config/dbContactos') //on doit rappeller le fichier ou est le process de la connection a la base de donnée

const app = express(); // application de l'implementation du service
// connection a la base de données
connectDB()
// route principale
app.use('/api', require('./routes/routes'))
// app.get('/', (req, res) => {
//     res.send('bienvenue')
// })

// // api/contacto
// Router.post('/', ()=>{
//     console.log('creando contacto');
// })

// creation du localhot:4000
app.listen(4000, ()=>{
    console.log('serveur en place http://localhost:4000');
})

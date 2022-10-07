const express = require('express');
const router = express.Router();

router.get('contacto', ()=>{
    console.log('lista de contactos');
})

module.exports = router

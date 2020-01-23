const {Router}= require('express');//Nova red API
const router = Router();

const Carros = require('../exemplos.json');// o arquivo exemlos.json funciona como una base de dados

router.get('/', (req,res) => {
    res.json(Carros); //chamando Carros que requiere os dados de exemplos.json
})

module.exports = router;
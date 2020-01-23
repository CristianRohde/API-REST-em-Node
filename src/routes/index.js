const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).json({
        title: "Loja de Carros ",
        Rota: "http://localhost:3000/api/Carros"
    });
});
module.exports = router;


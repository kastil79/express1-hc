const express = require('express')
const route = express.Router();


route.get('/',(req, res)=>{
    //res.end ('Hola Mundo!!!');
    res.render('index.ejs');
});

route.get('/login',(req, res)=>{
    //res.end ('Aquí va el login!');
    res.render('login.ejs')
});


route.get('/students/:name',(req, res)=>{
    res.end(`Ha solicitado ver el estudiante: ${req.params.name}`)
});


module.exports = route;

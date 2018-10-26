const express = require('express');
const morgan = require('morgan');
//const fetch = require('fetch');
const app = express();

// S E T T I N G S: Configuraciones para el Servidor Express
app.set('appNameHC', 'Mi primer servidor')
app.set('views', __dirname + '/views')   // Establece donde voy a colocar las vistas
app.set('view engine', 'ejs')  //Define cual va ser mi template engine

// Requiriendo rutas
const routes = require('./routes');
const routesApi = require('./route-apis');

//M i d d l e w a r e s: Funciones que permiten manejar las peticiones y son ejecutadas en orden
app.use(morgan('tiny')); // Formatos de salida: dev, short, combined, tiny

//R u t a s
app.use(routes);
app.use('/api',routesApi);

app.get('*',(req, res)=>{
    res.end ('Archivo no encontrado');
});

/*app.listen(3000, ()=> {
    console.log('Servidor funcionando en puerto 3000...');
    console.log('Nombre de la App:', app.get('appNameHC'));
    
});*/

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
    
})
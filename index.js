// const express = require('express');
// const cors = require('cors');
// const bunyan = require('bunyan');
// const guiasRouter = require('./router/guiasRouter');
// const usuariosRouter = require('./router/usuariosRouter');
// const bodyParser = require('body-parser');


// const PORT = process.env.PORT || 3000;



// const app = express();


// app.use(cors());
// app.use(bodyParser.json());

// app.use(express.json());
// app.use(express.urlencoded({extended:true}))

// const logger = bunyan.createLogger({name: 'Proyecto museo'});



// app.use('/guias',guiasRouter);
// app.use('/usuarios',usuariosRouter);



// app.get('/', (req , res , next)=>{
//     try{
//         res.status(200).json('Haciendo GET en /')
//     } catch(error){
//         next(error)
//     }
// })


// app.use((req,res)=>{
//     res.status(404).json({mensaje: 'No se ha encontrado la ruta'})
// })

// app.use( (err,req,res,next)=>{
//     res.status(500).json({mensaje: err})
// } )




// app.listen(3000, ()=>{

//     logger.info('Servidor de express levantado')

// })


const express = require('express');
const cors = require('cors');
const bunyan = require('bunyan');
const guiasRouter = require('./router/guiasRouter');
const usuariosRouter = require('./router/usuariosRouter');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const logger = bunyan.createLogger({ name: 'Proyecto museo' });

app.use('/guias', guiasRouter);
app.use('/usuarios', usuariosRouter);

app.get('/', (req, res, next) => {
    try {
        res.status(200).json('Haciendo GET en /');
    } catch (error) {
        next(error);
    }
});

app.use((req, res) => {
    res.status(404).json({ mensaje: 'No se ha encontrado la ruta' });
});

app.use((err, req, res, next) => {
    logger.error(err);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
});

module.exports = app;


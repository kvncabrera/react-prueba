// const mysql = require('mysql');
// const bunyan = require('bunyan');
// require('dotenv').config();  // Cargar variables de entorno

// const PORT = process.env.PORT || 3000;
// const logger = bunyan.createLogger({ name: 'Base de Datos' });

// const conexion = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
// });

// try {
//     conexion.connect((err) => {
//         if (err) {
//             throw err;
//         }
//         logger.info('Conectado a la BD satisfactoriamente');
//     });
// } catch (error) {
//     logger.error('Error en la conexion ' + error);
// }

// module.exports = conexion;



const mysql = require('mysql');
const bunyan = require('bunyan');
require('dotenv').config();  // Cargar variables de entorno

const logger = bunyan.createLogger({ name: 'Base de Datos' });

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

conexion.connect((err) => {
    if (err) {
        logger.error('Error en la conexion: ' + err.message);
        return;
    }
    logger.info('Conectado a la BD satisfactoriamente');
});

module.exports = conexion;

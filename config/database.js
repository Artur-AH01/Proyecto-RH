const mysql = require('mysql'); //mysql es un módulo de node que nos permite conectarnos a una base de datos mysql
const util = require('util'); //util es un módulo de node que nos permite convertir funciones que no son asíncronas en asíncronas

const pool = mysql.createPool({
    connectionLimit: 10, //cantidad de conexiones que se pueden hacer a la base de datos
    host: 'localhost', //host de la base de datos
    user: 'root', //usuario de la base de datos
    password: '', //contraseña de la base de datos
    database: 'empleados' //nombre de la base de datos
    
});

pool.query = util.promisify(pool.query) //query es una función que nos permite hacer consultas a la base de datos
module.exports = pool; //exporta el módulo pool para que pueda ser usado en otros archivos


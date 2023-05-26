//Dependencias
const bodyparser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const app = express();
const empleados =require('./routes/empleados');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Rutas

app.get("/", (req, res, next)=>{
    
    return res.status(200).send("Holi")

});

app.use("/empleados", empleados);

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Server is running');

});

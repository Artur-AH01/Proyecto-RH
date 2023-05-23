//Dependencias

const express = require('express');
const app = express();


app.get("/", (req, res, next)=>{
    res.status(200);
    res.send("Bienvenido");
});

app.get("/:name", (req, res, next)=>{
    nam = req.params.name;
    res.status(200);
    res.send("Hola, " + nam);
});


app.listen(process.env.PORT || 3000, ()=>{
    console.log('Server is running');

});
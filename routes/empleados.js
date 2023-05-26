const express = require('express');
const empleados = express.Router();
const db = require('../config/database');


empleados.post("/", (req, res, next)=>{
    return res.status(200).send(req.body);

});

empleados.get("/", async(req, res, next)=>{
    const emp = await db.query("SELECT * FROM empleados" );
    return res.status(200).json(emp);
    
});

empleados.get('/:id([0-9]{1,3})', async(req, res, next)=>{ 
    const id = req.params.id;
    if(id >= 1 && id <= 999){
        const emp = await db.query("SELECT * FROM empleados WHERE id = ?", [id]);
        return res.status(200).json({code: 200, message: emp});
    }
    return res.status(404).send({code: 404, message: "Empleado no encontrado"});
    

});

empleados.get('/:name([A-Za-z]+)', async(req, res, next)=>{
  
    const name = req.params.name; 
    const emp = await db.query("SELECT * FROM empleados WHERE name = ?", [name]); 
    

    if (emp.length > 0 ) {
        return res.status(200).json({code: 1, message: emp});
    }
    return res.status(404).send({code: 404, message: "Empleado no encontrado"});
    


});

module.exports = empleados;
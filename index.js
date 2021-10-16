const express = require('express');
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "public"))); 
require('dotenv').config()
const db = require('./model/database');
const cerveja = require("./model/cerveja");

const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {  
    //const cervejas = await cerveja.findAll();  
    res.render("index");
});


db.conectado();
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
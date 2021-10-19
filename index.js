const express = require('express');
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "public"))); 
require('dotenv').config()
const db = require('./model/database');
const cerveja = require("./model/cerveja");
const cervejaria = require("./model/cervejaria");
const tipoCerveja = require("./model/tipoCerveja");

const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {  
    const cervejas = await cerveja.findAll();  
    res.render("index", {cervejas: cervejas});
});


app.get("/cervejarias", async (req, res) => {  
    const cervejariaobj = await cervejaria.findAll();  
    res.render("cervejarias", {cervejaria: cervejariaobj});
});

app.get("/cadastro-cervejaria", function (req, res){
    res.render("cadastro-cervejaria");
});

app.get("/cadastro-cerveja", function (req, res){
    res.render("cadastro-cerveja");
});

app.get("/detalhes/:cervejaid", async (req, res) => {
    var id = req.params.cervejaid;
    
    var cervejaobj = await cerveja.findByPk(id);
    
    res.render("detalhes", {cerveja: cervejaobj});
});

app.get("/cervejadelete/:cervejaid", async (req, res) => {
    var id = req.params.cervejaid;
    
    var cervejaobj = await cerveja.findByPk(id);

    await cervejaobj.destroy();
    
    res.redirect("/");
});

app.get("/cervejaedit/:cervejaid", async (req,res) => {
    const cervejaed = await cerveja.findByPk(req.params.id);
    res.render("../views/cervejaedit", {cerveja: cerveja});
});

app.post("/cervejaedit/cervejaid", async (req,res) => {
    const cervejaedi = await cerveja.findByPk(req.params.id);
    const { nome, descricao, teor, imagem, tipo, cervejaria } = req.body;
    
       nome: nome, 
       descricao: descricao,
       teor_alcoolico; teor,
       imagem; imagem,
       tipocerveja_id; tipo,
       cervejaria_id; cervejaria

    await cerveja.save();
    res.redirect("/cadastro-cerveja");
});

app.post("/cervejarianew", async (req, res) => {
    const {nome, historia, pais, logo} = req.body;

    if (!nome) {
        res.render("cadastro-cervejaria", {
            mensagem: "Nome é obrigatório",
        });  
    }


    const cervejaria_create = await cervejaria.create ({
        nome: nome, 
        historia: historia,
        pais: pais,
        logo: logo
    });

     
   res.redirect("/");
});

app.post("/cervejanew", async (req, res) => {
    const {nome, descricao, teor, imagem, tipo, cervejaria} = req.body;
    const cerveja_create = await cerveja.create ({
        nome: nome, 
        descricao: descricao,
        teor_alcoolico: teor,
        imagem: imagem,
        tipocerveja_id: tipo,
        cervejaria_id: cervejaria
    });

     
   res.redirect("/");
});

cervejaria.hasMany(cerveja, {
  foreignKey: 'cervejaria_id'
});

tipoCerveja.hasMany(cerveja, {
  foreignKey: 'tipocerveja_id'
});

db.conectado();
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
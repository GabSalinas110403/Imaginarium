var express=require("express");
var rutasUsuarios=require("./rutas/usuarios");
var app=express();
var path=require("path");

app.set("view engine", "ejs");
app.use("/",rutasUsuarios);
app.use("/public", express.static(path.join(__dirname,"/public")));

app.listen(3000, ()=>{
    console.log("Servidor en https://localhost:3000");
});
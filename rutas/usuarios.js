var rutas=require("express").Router();

//Rutas dentro de View
rutas.get("/",(req,res)=>{
    res.render("inicio", {inicio:req.params.inicio});
});

rutas.get("/apps",(req,res)=>{
    res.render("apps", {apps:req.params.apps});
});

rutas.get("/cursos",(req,res)=>{
    res.render("cursos", {cursos:req.params.cursos});
});

rutas.get("/libros",(req,res)=>{
    res.render("libros", {libros:req.params.libros});
});

rutas.get("/multimedia",(req,res)=>{
    res.render("multimedia", {multimedia:req.params.multimedia});
});

rutas.get("/nosotros",(req,res)=>{
    res.render("nosotros", {nosotros:req.params.nosotros});
});

// 
rutas.get("/Industria_4",(req,res)=>{
    res.render("Industria_4", {Industria_4:req.params.Industria_4});
});

rutas.get("/analiticaAdn",(req,res)=>{
    res.render("analiticaAdn", {analiticaAdn:req.params.analiticaAdn});
});

rutas.get("/desingThinking",(req,res)=>{
    res.render("desingThinking", {desingThinking:req.params.desingThinking});
});

rutas.get("/Ciberseguridad",(req,res)=>{
    res.render("Ciberseguridad", {Ciberseguridad:req.params.Ciberseguridad});
});

/* */
rutas.get("/iasNegocios",(req,res)=>{
    res.render("iasNegocios", {iasNegocios:req.params.iasNegocios});
});

rutas.get("/innovacionEmpresarial",(req,res)=>{
    res.render("innovacionEmpresarial", {innovacionEmpresarial:req.params.innovacionEmpresarial});
});

rutas.get("/proteccionDatos",(req,res)=>{
    res.render("proteccionDatos", {proteccionDatos:req.params.proteccionDatos});
});

rutas.get("/videos",(req,res)=>{
    res.render("videos", {videos:req.params.videos});
});

rutas.get("/peliculas",(req,res)=>{
    res.render("peliculas", {peliculas:req.params.peliculas});
});

rutas.get("/proteccionDatos",(req,res)=>{
    res.render("proteccionDatos", {proteccionDatos:req.params.proteccionDatos});
});


module.exports=rutas;

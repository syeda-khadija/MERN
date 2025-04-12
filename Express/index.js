let exp =require("express");
let route =require("./Routing/Route");
require("dotenv").config();


let myapp =exp();

myapp.use("/MeriCompany/",route);

myapp.listen(process.env.PORT,()=>{
    console.log(`Server Started at http://localhost:${process.env.PORT}`);
})
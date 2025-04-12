let express=require("express")
let func =require("../Function/Logic")

let route =express.Router()
route.get("/",func.Home);
route.get("/a",func.About);
route.get("/f",func.Faq);
route.get("/p",func.Privacypolicy);
route.get("/f",func.Feedback);


module.exports=route;
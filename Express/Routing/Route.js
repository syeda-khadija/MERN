let express=require("express");
let func=require("../Function/Logic")

let router=express.Router();
router.get("/",func.home);
router.post("/reg",func.register_user)

module.exports=router;
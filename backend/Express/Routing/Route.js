let express=require("express");
let func=require("../Function/Logic")

let router=express.Router();
router.get("/",func.home);
router.post("/reg",func.register_user)
router.get("/user",func.get_user)
router.delete("/user/:id",func.delet_record)

module.exports=router;
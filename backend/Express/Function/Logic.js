let user=require("../Collection/User");
let main_function={
home:async function(req,res){
    res.send("Home Page")
    res.end();
},
// api
register_user: async function(req,res){
   try {
    let {user_name,user_email,password,Age} =req.body;
    let check_mail=await user.findOne({user_name_email:user_email})
    if(check_mail){
    return res.status(409).json({msg:"Email already exist"})
    }
    else{
        let user_data= new user(req.body)
        let create =await user_data.save();
        return res.status(200).json({msg:"User Register sucessfully"})
    }
    } catch (error) {
    res.status(501).json({msg :error.message})
   }
},
get_user: async function(req,res){
try {
    let getdata =await user.find().select("-password").sort({"created_at":-1})
    return res.status(202).json(getdata)
} catch (error) {
    res.status(501).json({msg:error.message})
}
},
delet_record:async function(req,res){
try {
let {id} =req.params
let id_dhundo = await user.findById(id)
if(id_dhundo){
    await user.findByIdAndDelete(id_dhundo)
    return res.status(200).json({msg:"Record Delete Successfully"})
}
} catch (error) {
    res.status(501).json({msg:error.message})
}
}

}
module.exports=main_function;
let exp =require("express");
let route =require("./Routing/Route");
let dt =require("./Db");
let user =require("./Collection/User");
require("dotenv").config();


let myapp =exp();

let daatjao= async function(){
    try {
        user.create({
            user_name:"Khadija",
            user_email:"khadija@gmail.com",
            password:"123456",
            Age:20
        })
        console.log("Data Added")
    }
    catch (err) {
        console.log(err)
    }
}
myapp.use("/MeriCompany/",route);
dt().then(()=>{
    daatjao();
    myapp.listen(process.env.PORT,()=>{
        console.log(`Server Started at http://localhost:${process.env.PORT}`);
    })
}).catch((e)=>{
    console.log(e);
})

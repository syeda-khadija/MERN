let express =require("express");
let r =require("./Routing/Route");
let db=require("./Connect");
let user=require("./Collection/User");
let cors=require("cors");
require("dotenv").config();

let Port =process.env.PORT || 3005

let application=express();

application.use(cors());
application.use(express.json());
application.use("/Web/",r);

// add data in collection 
let add_user=async function(){
    try{
        user.create({
            user_name:"khadija",
            user_email:"khadijaa@gmail.com",
            password:"123456",
            Age:20
        })
        console.log("data added")
        
    }
    catch (err) {
        console.log(err)
    }
}
application.use("/MeriCompany/",r);
db().then(()=>{
    // add_user();
    application.listen(Port,()=>{
        console.log(`Server Started at http://localhost:${Port}/Web/`);
    })
}).catch((e)=>{
    console.log(e);
})
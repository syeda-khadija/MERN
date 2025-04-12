let mongo= require("mongoose")
require("dotenv").config()

let url = process.env.ATLAS_URL;

mongo.connect(url).then(()=>{
    console.log("cONNECT HOGYA")
}).catch((E)=>{
    console.log(E)
})
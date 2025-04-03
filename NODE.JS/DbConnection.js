// npm i mongoose
let mongo= require("mongoose")
require("dotenv").config()
let url= process.env.DB
 
mongo.connect(url).then(
    () =>{ console.log("connected to database")
    }
).catch(
    (err) => {console.log(err)
    
    }
)

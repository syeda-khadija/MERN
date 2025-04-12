let functions ={
     Home : async function(req,res){
        res.send("home page ")
        res.end();
    },
    About : async function(req,res){
        res.send("about page ")
        res.end();
    },
    Faq : async function(req,res){
        res.send("Service Faq")
        res.end();
    },
    Privacypolicy : async function(req,res){
        res.send("Privacypolicy page")
        res.end();
    },
    Feedback : async function(req,res){
        res.send("Feedback page")
        res.end();
    },
}

module.exports=functions;
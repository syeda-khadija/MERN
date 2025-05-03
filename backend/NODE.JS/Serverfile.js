let http_module = require("http")
let {exec } = require("child_process");
let port = 8005
http_module.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<h2>khadija</h2>")
    res.end()
}).listen(8005,()=>{
    console.log(`Server has been started http://localhost:${port}`)
    exec(`start http://localhost:${port}`)
})
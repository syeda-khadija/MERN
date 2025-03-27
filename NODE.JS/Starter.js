let http = require("http");
let{exec} = require("child_process");
require("dotenv").config()
            let port = process.env.PORT_NO
http.createServer(function(rq,rs) {
    if(rq.url === "/"){
        rs.writeHead(200,{"content-type":"text/html"})
        rs.write(`<h1>welcome to website</h1>
        <hr>
        <li><a href="/i">Index Page </a></li>
        `)
    }
    else if(rq.url === "/i"){
        rs.writeHead(200,{"content-type":"text/html"})
        rs.write(`<h1>Index page</h1>
        <hr> 
        <ul>
        <li><a href="/s">Service Page </a></li>
        <li><a href="/f">Feedback Page </a></li>
        </ul>`
            );
            rs.end();
    }
    else if(rq.url === "/s"){
        rs.writeHead(200,{"content-type":"text/html"})
        rs.write(`<h1>Service Page</h1>
        <hr> 
        <ul>
        <li><a href="/i">Index page </a></li>
        <li><a href="/f">Feedback Page </a></li>
        </ul>`);
          rs.end();
    }
    else if(rq.url === "/f"){
        rs.writeHead(200,{"content-type":"text/html"})
        rs.write(`<h1>Feedback Page</h1>
        <hr>
        <ul>
        <li><a href="/s">Service Page </a></li>
        <li><a href="/i">Index page </a></li>
        </ul>`);
        rs.end();
        }
        else{
            rs.writeHead(404,{"content-type":"text/html"})
            rs.write("<h1>404 page not found</h1>");
            rs.end();
            }
}).listen(port,()=>{
    console.log(`Server has been started http://localhost:${port}`)
    exec(`start http://localhost:${port}`)
})
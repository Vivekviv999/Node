const http = require("http");

const port = 8081;

http.createServer( (req, res)=>{
       res.writeHead(200,{"Content-Type": "text/html"});
       res.write("<h6>hey we got our server here ... addon testingdata</h6>")
       res.end();
})
.listen(port,()=>{
    console.log("node.js server started running on port ${port} ");
})
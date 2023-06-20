const http  = require('http')

const server = http.createServer((req,res)=>{
   if(req.url =="/"){
    res.end("Welcome To Home")
   }
   else if(req.url =="/about"){
    res.end("Welcome to about us page")
   }
   else if(req.url =="/node"){
    res.end("Welcome to my node js project")
   }
})

server.listen(1000,"127.0.0.1" ,() =>{
    console.log('server is running on http://127.0.0.1/1000  My name is Mrinalani')
})



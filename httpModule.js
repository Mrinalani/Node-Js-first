const http  = require('http')

const server = http.createServer((req,res)=>{
   res.end('my name is Mrinalani')
})

server.listen(1000,"127.0.0.1" ,() =>{
    console.log('server is running on http://127.0.0.1/1000  My name is Mrinalani')
})

//const http = require('http')

const express = require('express')

const app = express();

app.use((req, res, next)=>{

next();
})

app.use((req, res, next)=>{
    console.log('in a another middleware')
    res.send('<h1> hello from express!</h1>')
    })

// const server = http.createServer(app)

// server.listen(6001)

app.listen(6001)


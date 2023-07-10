const { json } = require('body-parser')
const fs = require('fs')
const path = require('path')

module.exports = class Product{
    constructor(t){
        this.title = t
    }

    save(){
        const p = path.join(

        path.dirname(process.mainModule.filename),
            'data',
            'Products.json'
            )
            fs.readFile(p,(err,fileContent)=>{
                let Products = []
                if(!err){
                    Products = JSON.parse(fileContent)
                }
        Products.push(this)
        fs.writeFile(p,JSON.stringify(Products),(err)=>{
            console.log(err)
        })
            })
    }


    static fetchAll(cb){
        const p = path.join(

            path.dirname(process.mainModule.filename),
                'data',
                'Products.json'
                )
                fs.readFile(p,(err,fileContent)=>{
                    if(err){
                        cb([])
                    }
                    cb(JSON.parse(fileContent))
                })
        
    }
}
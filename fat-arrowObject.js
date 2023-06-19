const product = (a,b)=>{
    return(a*b)
}

console.log(product(5,5))

const person = {
    name:'max',
    age:'25',
    greet(){
       console.log('hii I am '+ this.name)
    }
}
person.greet()
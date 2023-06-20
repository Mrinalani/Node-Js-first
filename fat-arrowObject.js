// const product = (a,b)=>{
//     return(a*b)
// }

// console.log(product(5,5))

// const person = {
//     name:'max',
//     age:'25',
//     greet(){
//        console.log('hii I am '+ this.name)
//     }
// }
// person.greet()

//const arr = [10,20,30,40,50]

// const a = arr.map((val,index,array)=>{
    
//     return val+index
// })

// console.log(a)

// arr.reverse();
// console.log(arr)

//  const obj1 = {'key1': 1}

// const obj2 = { ...obj1}

// if(obj2 === obj1){

// console.log('same objects')

// }

// else{

// console.log('different objects')

// }

// const obj1 = {'key1': 1 , 'key2' : 2}

// const obj2 = { ...obj1, key1: 1000}



// console.log(obj1)

// console.log(obj2)

// const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

// const newarray = array.map((value)=>{
//     if(value == ' '){
//         return 'emptyString'
//     }
//     else{
//         return value;
//     }
// })

// console.log(newarray)

// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// const { key1, key3} = { ...obj1}



// console.log(key1, key3)

// const arr1 = ['value1', 'value2']

// const [ val1, val2 ] = arr1



// console.log(val1)

// console.log(val2)


// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// let { key1, key3} = obj1



// key1 = 20;

// key3 = 123

// console.log(obj1.key1, obj1.key3)

// const printA = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log('a');
//         resolve()
//     })
    
// }

// const printB = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log('b');
//         resolve()
//     })
// }

// const printC = ()=>{
//     return new Promise((resolve,reject)=>{
//    //  setTimeout(() => console.log('c'), 3000)
//    setTimeout(()=>{
//     console.log('c')
//     resolve()
//    },3000)
//    // resolve()
//     })
// }

// const printD = ()=>{
//     return new Promise((resolve,reject)=>{
//     //setTimeout(() => console.log('d'), 0)
//    // resolve()

//    setTimeout(()=>{
//     console.log('d')
//     resolve()
//    },0)
//     })
// }

// const printE = ()=>{
//     return new Promise((resolve,reject)=>{
//     console.log('e');
//     resolve()
//     })
// }

// // printA()
// // .then(()=>{
// //     printB()
// //     .then(()=>{
// //         printC()
// //         .then(()=>{ 
// //             printD()
// //             .then(()=>{
// //                 printE()
// //             })
// //         })
// //     })
// // })
// const executePrintFunctions = async () => {
//     await printA();
//     await printB();
//     await printC();
//     await printD();
//     await printE();
//   };
  
//   executePrintFunctions();
  

// // printA()
// //   .then(() => printB())
// //   .then(() => printC())
// //   .then(() => printD())
// //   .then(() => printE());

// // printB()
// // printC()
// // printD()
// // printE()

// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log('My name is ChatGPT');
//   res.end('My name is ChatGPT');
// });

// server.listen(4000, () => {
//   console.log('Server is running on port 4000');
// });
// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log('My name is ChatGPT');
//   res.end('My name is ChatGPT');
// });

// server.listen(0, () => {
//   const port = server.address().port;
//   console.log(`Server is running on port ${port}`);
// });

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('My name is Mrinalani');
});

server.listen(8000, "127.0.0.1", () => {
  console.log('Server is running on http://127.0.0.1:000/');
});





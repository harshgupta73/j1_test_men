const os = require('os');
const fs = require('fs');

console.log(os.hostname())
console.log(os.platform())
console.log(os.arch())
console.log(os.totalmem())
console.log(os.freemem())
console.log(os.cpus())
console.log(os.homedir())
//comment every function of fs, and run only one function at a time for fs
const data = "hello harsh here!"
fs.writeFile("student.txt",data,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

// fs.readFile("student.txt",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data.toString())
//     }
// })

// const data = "Bye Bye!"
// fs.appendFile("student.txt",data,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("file appended")
//     }
// })

// fs.unlink("student.txt",(err)=>{
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("file deleted")
//     }
// })
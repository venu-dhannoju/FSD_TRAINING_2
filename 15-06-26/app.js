const eventemitter=require('events')
//without data
const event=new eventemitter()
event.on("greet",()=>{
console.log("event emitted without data")
})
event.emit("greet")
//with data
event.on("greets",(data)=>{
    console.log(`hello. this is with data = ${data}`)
})
event.emit("greets","venu")


const fs=require('node:fs')
//writing 
console.log("\nwrite start")
fs.writeFile("abc.text","welcome home cvr without promises ",()=>{
    console.log("finished...")
})
console.log("write end")
//reading
console.log("\nread start")
fs.readFile("abc.text","utf8",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
console.log("read end")


// const fs = require('node:fs/promises');
// fs.writeFile("abcd.text", "welcome home promises")
//     .then(() => {
//         console.log("File written successfully");
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// fs.readFile("abcd.text", "utf8")
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const http=require('node:http')
const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.end("<h1>hello welcome to home page</h1>")
    }else if(req.url=='/about'){
        res.end("<h1> welcome to about page</h1>")
    }
    else if(req.url=='/api/users'){
        res.end(JSON.stringify(
            {
                name:"venu",
                place:"CVR"
            }
        ))
    }
    else{
        res.end("<h1>error page</h1>")
    }
})
server.listen(3010)
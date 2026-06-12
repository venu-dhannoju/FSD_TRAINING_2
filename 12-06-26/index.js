// const library=require("./library.js")
// library.booking()

// const fs=require('fs');
// console.log(fs.ReadStream)
const os=require('os')
console.log(`CPU Architecture: ${os.arch()}`);
console.log(os.platform())
// console.log(os.availableParallelism())
console.log(os.cpus())
console.log(os.freemem())
console.log(os.totalmem())


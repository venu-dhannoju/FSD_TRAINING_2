const fs=require('node:fs')
fs.writeFile("abc.text","welcome home",()=>{
    console.log("finished...")
})
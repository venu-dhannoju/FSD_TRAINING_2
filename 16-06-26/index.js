const express=require('express')
const app=express()
const user=require('./users.json')

app.use(express.json())
app.get("/",(req,res)=>{
res.send("<h1>hello welcome to page</h1>")
// res.sendFile(__dirname + "/text.html")
// res.status(200).json({ mess: "done" })
// res.send(user)
console.log("viewing home page")
})

// app.get("/api/username",(req,res)=>{
//     const html=`
//     <ul>
//     ${user.map(user => `<li>${user.firstName}</li>`).join("")}
// </ul>
//      `
//     res.send(html)
//     console.log("viewing user data")
// })

// app.get("/userid/:id",(req,res)=>{
//     res.send(req.params.id)
// })

app.get("/user",(req,res)=>{
    res.json(user)
console.log("get operation done")
})
app.get("/user/:id",(req,res)=>{
    const founduser=user.find(
        u=>u.id===Number(req.params.id)
    )
    if(!founduser)
    {
        res.status(400).send("user not found")
    }
    res.send(founduser)
 console.log("get operation by id done")   
})
app.post("/user", (req, res) => {
    const newUser = {
        id: user.length + 1,...req.body
    };

    user.push(newUser);

    res.status(201).json({
        message: "User created",
        user: newUser
    });
    console.log("post operation done")
});
app.put("/user/:id",(req,res)=>{
    const founduser=user.find(
        u=>u.id===Number(req.params.id)
    )
    if(!founduser)
    {
        res.status(400).send("user not found")
    }
    Object.assign(founduser,req.body)
  console.log("put operation done")  
})
app.delete("/user/:id", (req, res) => {
    const id = Number(req.params.id);

    const userExists = user.some(u => u.id === id);

    if (!userExists) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const updatedUsers = user.filter(u => u.id !== id);

    res.status(200).json({
        message: "User deleted",
        users: updatedUsers
    });
    console.log("delete operation done")
});
app.listen(3000,()=>console.log("server is live on 3000"))
const express=require("express")
const app=express()
const users=require("./User.json")
const jwt=require("jsonwebtoken")
const SECRET_KEY="cvr123"
app.use(express.json())
app.get("/users",(req,res)=>{
    res.json(users)
})
app.get("/users/:id",(req,res)=>{
    const id=Number(req.params.id)
    const user=users.find(u=>u.id==id)
    if(!user)
    {
        res.send("no user available")
    }
    res.json(user)
})
app.post("/login",(req,res)=>{
    let user={
        username:"cvr",
        password:"cvr123"
    }
    const token=jwt.sign({user},SECRET_KEY)
    res.send({token})
})
app.post("/users",(req,res)=>{
    const newuser={
        id:users.length+1,
        ...req.body
    }
    users.push(newuser)
    res.send(newuser)
})
function verify(req,res,next)
{
    console.log("middleware excuted")
    next()
}
app.put("/users/:id",verify,(req,res)=>{
    const id=Number(req.params.id)
    const user=users.find(u=>u.id==id)
    if(!user)
    {
        res.send("no user to update")
    }else{
        Object.assign(user,req.body)
        res.json(user)
    }

})
app.delete("/users/:id",(req,res)=>{
    const id=Number(req.params.id)
    const user=users.find(u=>u.id==id)
    if(!user)
    {
        res.send("no user to delete")
    }else{
        const id=Number(req.params.id)
        const newusers=users.filter(u=>u.id!=id)
        res.send(newusers)
    }
})
app.listen(3010,()=>{
    console.log("server is runnig on 3010")
})
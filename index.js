
require('dotenv').config()
const express = require("express")


const app = express()

const port = 4006

app.get('/', (req, res)=>{
    res.send("Hello world")
})

app.get('/about', (req, res)=>{
    res.send("About page")
})

app.get('/login',(req, res)=>{
    res.send("<h1>Please login at chai aur code </h1>")
})

app.get('/sigup',(req, res)=>{
    res.send("<h2>sigup page<h2>")
})


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
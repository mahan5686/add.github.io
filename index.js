// import express from 'express'
// import cors from 'cors'

const express =require('express')
const cors =require('cors')

const connectToMongo =require('./db')
// import connectToMongo from './db'

connectToMongo();

const app = express()
const port = 8000

app.use(cors());
app.use(express.json())

app.use('/api/auth',require('./routes/auth'))

app.get("/gg",(req,res)=>{
    res.json({message:"hello from server this is mahan"})
 });

app.get("/g",(req,res)=>{
   res.json({message:"hello from server this is vikas"})
});
app.get("/",(req,res)=>{
   res.send({message:"hello from server"})
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
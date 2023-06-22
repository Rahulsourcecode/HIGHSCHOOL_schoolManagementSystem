const express =require('express')
const cors =require('cors')
const dbConnect =require('./configuration/dbconfig')
const dotenv =require('dotenv')
const users = require('./model/userModel')
dotenv.config()

const app =express()
dbConnect()
.then(()=>{
    console.log("connected to mongo")
})
.catch((error)=>{
    console.log("error connecting to mongoDB",error)
});

const PORT =process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:true,credentials:true}))


app.listen(PORT,()=>{
    return console.log(`listening to port ${PORT}`)
});
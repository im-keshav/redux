const  cors = require('cors')

const express = require('express')
const app =  express()

app.use(cors())
app.use(express.json())



app.get('/api/users',(req,res)=>{
    res.json([
        {name:'Keshav',id:1},
        {name:'Aman',id:2},
        {name:'Rahul',id:3},
        {name:'anmol',id:4}
    ])
})

app.listen(3000,()=>{
    console.log("server is running")

})
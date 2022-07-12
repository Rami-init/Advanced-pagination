require('dotenv').config({path: './config.env'})
const connectDB = require('./config/ConnetDB')
const express = require('express')
const app = express()
connectDB()
app.use(express.json())
app.use('/api/posts', require('./routes/posts'))
app.get('/',(req, res)=>{
    res.send('hello from other side')
})
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>console.log(`The Server is connected ${PORT}`))
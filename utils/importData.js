require('dotenv').config({path: './config.env'})
const connectDB = require('../config/ConnetDB')
const Post = require('../models/posts')
const fs = require('fs')

connectDB()

const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`, 'utf-8'))
const importData = async()=>{
    try {
        await Post.create(posts)
        console.log(`the data successfuly imported...${posts}`)
        process.exit()
    } catch (error) {
        console.log(`error: ${error}`)
        process.exit(1)
    }
}
const deletedData = async()=>{
    try {
        await Post.deleteMany({}) 
        console.log('the data successfuly deleted...')
        process.exit()  
    } catch (error) {
        console.log(`error : ${error}`)
        process.exit(1)
    }
}
if(process.argv[2] === '--import'){
    importData()
}
if(process.argv[2] === '---delete'){
    deletedData()
}
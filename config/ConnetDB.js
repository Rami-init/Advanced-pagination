const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI)
       console.log('the connection success')
    } catch(error) {
        console.log('the connection field !')
        process.exit(1)
    }
}
module.exports = connectDB
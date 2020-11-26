const mongoose = require('mongoose')

const schoolSchema  = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    message:{
        type:String
    },
    class:{
       type:String
    },
    school:{
        type:String
    },
    city:{
        type:String
    }


})

const School = mongoose.model('School',schoolSchema)

module.exports = School
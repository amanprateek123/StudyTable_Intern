const mongoose = require('mongoose')

const teacherSchema  = new mongoose.Schema({
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

const Teacher = mongoose.model('Teacher',teacherSchema)

module.exports = Teacher
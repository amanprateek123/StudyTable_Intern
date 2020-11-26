const mongoose = require('mongoose')

const studentSchema  = new mongoose.Schema({
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

const Student = mongoose.model('Student',studentSchema)

module.exports = Student
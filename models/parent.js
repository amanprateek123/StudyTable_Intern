const mongoose = require('mongoose')

const parentSchema  = new mongoose.Schema({
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
    child:{
        type:String
     },
    class:{
         type:String
     },
    city:{
         type:String
     }

})

const Parent = mongoose.model('Parent',parentSchema)

module.exports = Parent
const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema
const urlSchema = new Schema({
    title:{
        type:String,
        required:[true, 'title is mendatory']
    },
//
    originalUrl:{
        type:String
         },

    hashedUrl:{
        type:String 
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
   
})



const Url = mongoose.model('Url', urlSchema)

mongoose.modelNames.exports = Url
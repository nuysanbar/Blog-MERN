const mongoose=require('mongoose');
const date = require('date-and-time')
const Schema=mongoose.Schema;
const now=new Date()
const blogSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default:date.format(now,'YYYY/MM/DD HH:mm:ss')
    }
})
module.exports=mongoose.model('blog',blogSchema);



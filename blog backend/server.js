require('dotenv').config();
const express = require('express');
const app = express();
const cors=require('cors');
const corsOptionsDelegate=require('./config/cors.js')
const mongoose= require('mongoose');
const ConnectDB=require('./config/dbConn');
const PORT = process.env.PORT || 3500;
ConnectDB();
app.use(cors(corsOptionsDelegate));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/reactBlog',require('./routes/api/reactBlog'));
mongoose.connection.once('open',()=>{
    console.log('Mongodb is connected');
    app.listen(PORT,()=>{
        console.log('server runnning on port '+PORT);
    })
})

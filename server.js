const express = require('express'),
app = express(),
UFC = require('./mod'),
mongoose = require('mongoose'),
port = process.env.PORT || 8080 ;
users = require('./UsersModule');

app.use(express.json());
const PostsHandler = require('./PostsHandler');

//? DB Config 
const db = require('./config/Keys').MongoURI;
//? Connect to mongo
mongoose.connect(db,{useNewUrlParser:true, useUnifiedTopology:true,useFindAndModify:false }).then(()=>console.log('MongoDB is Conenected...'))
.catch(err=>console.log(err));


const path = require('path');

const multer  = require('multer');

const uploadDir = 'uploads';

app.use(express.static(path.join(__dirname,uploadDir)));


const Storage = multer.diskStorage({
    destination: 'uploads',
    filename :function (req,file,clb){
        console.log(file.originalname,'original');
        
        clb(null,Date.now()+file.originalname); 
          console.log('finish func');
    }  
});

const upload = multer({
    storage: Storage,
    limits : {fileSize:2000000}
});


app.get('/ufc/:fighter',(req,res)=>{
    UFC.getFighter(req,res);
});

//?Register handler
app.post('/users/register',upload.single('userFile'),(req,res)=>{
    users.registerHandler(req,res)
});
//?Login Handler
app.post('/users/login',(req,res)=>{
    users.loginHandler(req,res)
});

//! GET POSTS
app.get('/posts',users.authenticateToken,(req,res)=>{  
    PostsHandler.getPosts(req,res);
});
//! Post to POSTS
app.post('/posts',users.authenticateToken,(req,res)=>{  
    PostsHandler.addPost(req,res);
});
//! Update  POSTS
app.put('/posts/:id',users.authenticateToken,(req,res)=>{  
    PostsHandler.updatePost(req,res);
});
//! Delete POSTS
app.delete('/posts/:id',users.authenticateToken,(req,res)=>{  
    PostsHandler.deletePost(req,res);
});

app.listen(port,()=>console.log(`Server is listening on port ${port}`))
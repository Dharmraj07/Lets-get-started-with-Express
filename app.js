const express=require('express');
const app=express();

const http=require('http');

  app.use((req,res,next)=>{
    console.log("we are in middleware!");
   res.send("<h1>Hello to express</h1>")
    next();
  })

app.use((req,res,next)=>{
    console.log("we are in next middleware");
    //res.send("hello to next middleware");
   
})
const server=http.createServer(app);
server.listen(3000);
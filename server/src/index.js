import express from 'express';
import test from './test';

const app=express();
app.get('/', (req, res, next)=>{
    res.send('hello, world!');
});
app.listen(3000, "0.0.0.0");
console.log("Express started at port 3000");
console.log("test=", test);
import express from "express";
import morgan from "morgan";
import * as dotenv from 'dotenv';
dotenv.config();

const app= express();

if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'));
}
app.use(express.json());

app.get('/',(req, res)=>{
    res.send("Hello world");
});

const port= process.env.PORT || 5100;
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})
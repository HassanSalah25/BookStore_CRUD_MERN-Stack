const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require("./routes/book-routes");
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router);


mongoose.connect("mongodb+srv://hsnslh125:mPrEEGo2FDAHEJTw@cluster0.nggqceo.mongodb.net/bookStore?retryWrites=true&w=majority"
).then(()=>console.log("Connected to Databse"))
.then(()=>{
    app.listen(5000);
}).catch((err)=>console.log(err));




//mPrEEGo2FDAHEJTw
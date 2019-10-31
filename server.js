const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://marianodemolli:<password>@cluster0-dxbxd.mongodb.net/test?retryWrites=true&w=majority")
app.get("/" , (req,res) => res.send("Hello World"));

app.get('/test',(req,res) => {
    res.send("Test Path");
})

app.listen(port, () => console.log('Server running on port ${port}'));
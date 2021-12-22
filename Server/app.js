const express = require("express");
var cookieParser = require('cookie-parser')
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 9501;

require("./db/conn");

app.use(express.json());
app.use(cookieParser());

app.use(require("./routes/auth"));

app.listen(port, () => {
    console.log(`connection is set up at port : ${port}`);
})
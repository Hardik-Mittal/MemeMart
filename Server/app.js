const express = require("express");
var cookieParser = require('cookie-parser')
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 9501;
var multer = require("multer");
const routes = require("./routes");

require("./db/conn");

app.use(express.json());
app.use(cookieParser());

app.use(routes);

app.use(multer({
    dest: './uploads/',
    rename: function (fieldname, filename) {
        return (filename + "-" + Date.now());
    },
}).any());

app.listen(port, () => {
    console.log(`connection is set up at port : ${port}`);
})
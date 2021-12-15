const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 9501;

app.use(express.json());

app.listen(port, () => {
    console.log(`connection is set up at port : ${port}`);
})
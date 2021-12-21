const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 9501;

require("./db/conn");

app.use(express.json());

app.use(require("./routes/auth"));

app.listen(port, () => {
    console.log(`connection is set up at port : ${port}`);
})
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mememart", {
    useNewUrlParser:true,
    useUnifiedTopology : true
}).then(() => {
     console.log("connection Successful to Database");
}).catch((err) => {
    console.log("No Connection");
})
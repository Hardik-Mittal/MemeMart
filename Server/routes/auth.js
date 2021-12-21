const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.get("/", (req, res) => {
    res.send("hello from server auth router");
})

//registration route

router.post("/register", async (req, res) => {
    const { username, email, password, confirmpassword } = req.body;
    const admin = false;
    const ban = 0;
    const confirmed = false;

    if(!username || !email || !password || !confirmpassword){
        return res.status(422).json({ error : "Incomplete Data"});
    }

    try{

        const userExist = await User.findOne({ email });

        if(userExist){
            return res.status(422).json({ error : "Email already exists "});
        }
        const user = new User({ username, email, password, confirmpassword, admin, ban, confirmed });

        await user.save();
        res.status(201).json({ message : "user registered successfully" });

    } catch(err) {
        console.log(err);
        res.status(500).json({ error : "Failed to register" });
    }

})

//login route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(422).json({ error : "Incomplete Data"});
    }

    try{

        const userExist = await User.findOne({ email });

        // console.log(userExist);

        if(!userExist){
            res.status(422).json({ error : "User does not exists "});
        }else{
            if(userExist.password != req.body.password){
                res.status(422).json({ error : " Invalid password "});
            }else{
                res.json({message : "logged in successfully"})
            }
        }

    } catch(err) {
        console.log(err);
        res.status(500).json({ error : "Failed to register" });
    }

})

module.exports = router;
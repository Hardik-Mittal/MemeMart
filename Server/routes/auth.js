const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

const User = require("../models/user.model");

// router.get("/", (req, res) => {
    
//     res.send("hello from server auth router");
// })

//registration route

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    const admin = false;
    const ban = 0;
    const confirmed = false;

    if(!username || !email || !password ){
        return res.status(422).json({ error : "Incomplete Data"});
    }

    try{

        const userExist = await User.findOne({ email });
        console.log(userExist);
        
        if(userExist){
            return res.status(422).json({ error : "Email already exists "});
        }
        const user = new User({ username, email, password, admin, ban, confirmed });

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
            const checkpassword = await bcrypt.compare(password, userExist.password);

            if(!checkpassword){
                res.status(422).json({ error : " Invalid password "});
            }else{
                const token = await userExist.generateAuthToken();
                console.log(token);

                res.cookie("jwttoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true,
                })

                res.json({message : "logged in successfully"})
            }
        }

    } catch(err) {
        console.log(err);
        res.status(500).json({ error : "Failed to register" });
    }

})


// authenticate to visit home page
router.get("/dashboard", authenticate, (req, res) => {
    console.log('Hello from home page');
    res.json({ message: "Authorized !", user: req.user });
    console.log(req.user);
})

module.exports = router;
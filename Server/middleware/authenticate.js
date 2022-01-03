const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const Authenticate = async (req, res, next) => {
    try {

        const token = req.cookies.jwttoken;
        // console.log(req.cookies);
        jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
            if (err) return res.sendStatus(403);
            const { _id } = payload;
            // console.log(_id);

            User.findById(_id)
                .exec((err, user) => {
                    if (!user || err)
                        return res.status(401).json({ error: "You must be logged in !" });

                    // if (!user.confirmed)
                    // return res.status(401).json({ error: "You must confirm your email !" });

                    req.user = user;
                    //console.log(req.user.username);
                    next();
                });

        })


    } catch (err) {
        res.status(401).send('Unauthorized: No token provided');
        console.log(err);
    }
}

module.exports = Authenticate;


const express = require("express");
const router = express.Router();

const userRoute = require("./auth.route");
router.use("/user", userRoute);

const memeRoute = require("./meme.route");
router.use("/meme", memeRoute);

module.exports = router;
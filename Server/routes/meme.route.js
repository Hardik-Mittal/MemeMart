const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const { memeService } = require("../services");
const httpStatus = require("http-status");
const { Router } = require("express");

router.get("/", async (req, res) => {
    const memes = await memeService.getMeme();
    res.send(memes);
})

router.get("/:memeId", async (req, res) => {
    const meme = await memeService.getMemeById(req.params.memeId);
    if (!meme) {
        res.status(httpStatus.NOT_FOUND).json({ error: "Meme Not Found" });
    }
    res.send(meme);
})

// router.get("/", authenticate, async (req, res) => {
//     const meme = await memeService.getMemeByEmail(req.params.memeId);
//     if (!meme) {
//         res.status(httpStatus.NOT_FOUND).json({ error: "Meme Not Found" });
//     }
//     res.send(meme);
// })

router.post("/upload", authenticate, async (req, res) => {
    //console.log("meme = " + req.body.pic);
    const meme = await memeService.addMeme(req);
    res.send(meme);
});

module.exports = router;
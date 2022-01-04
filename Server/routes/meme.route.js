const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const { memeService } = require("../services");
const httpStatus = require("http-status");
const { Router } = require("express");
const upload = require("../middleware/image");

/**
 *  memes/template for homepage
 */
router.get("/", async (req, res) => {
    const memes = await memeService.getMemes();
    res.send(memes);
})

router.get("/:memeId", async (req, res) => {
    const meme = await memeService.getMemeById(req.params.memeId);
    if (!meme) {
        res.status(httpStatus.NOT_FOUND).json({ error: "Meme Not Found" });
    }
    res.status(httpStatus.FOUND).send(meme);
})

// router.get("/", authenticate, async (req, res) => {
//     const meme = await memeService.getMemeByEmail(req.params.memeId);
//     if (!meme) {
//         res.status(httpStatus.NOT_FOUND).json({ error: "Meme Not Found" });
//     }
//     res.send(meme);
// })

router.post("/upload", authenticate, upload.single("image"), async (req, res, err) => {
    //console.log(req);
    if (req.file == undefined || req.file == null) {
        console.log("failure");
        res.status(httpStatus.NO_CONTENT).json({ error: "Meme is not uploaded" });
    }
    else {
        console.log("success");
        await memeService.addMeme(req);
        res.status(httpStatus.CREATED).json({ message: "Meme uploaded successfully" });
    }
});

module.exports = router;
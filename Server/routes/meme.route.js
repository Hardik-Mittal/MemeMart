const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const { memeService } = require("../services");
const httpStatus = require("http-status");
const { Router } = require("express");
var multer = require("multer");

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


const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname);
    },
});

const upload = multer({ storage: fileStorage });

router.post("/upload", authenticate, upload.single("image"), async (req, res) => {
    //console.log(req);
    if (req.file == undefined || req.file == null)
        res.status(httpStatus.NO_CONTENT).json({ error: "Meme is not uploaded" });
    else {
        //console.log("success");
        await memeService.addMeme(req);
        res.status(httpStatus.CREATED).json({ message: "Meme uploaded successfully" });
    }
});

module.exports = router;
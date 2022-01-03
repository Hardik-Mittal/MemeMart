const Meme = require("../models/meme.model");
var fs = require("fs");

const getMemeByEmail = async (email, template) => {
    return Meme.find({ email, template });
}

const getMeme = async () => {
    return Meme.find({ public: true });
}

const getMemeById = async (id) => {
    return Meme.findById(id);
}

const addMeme = async (req) => {
    var newMeme = new Meme();
    console.log("file = " + req.body);
    newMeme.pic.data = fs.readFileSync(req.file.filename);
    newMeme.pic.contentType = "image/png";
    newMeme.username = req.user.username;
    if (req.body.tags != null && req.body.tags != undefined) {
        newMeme.tags = req.body.tags;
    }
    if (req.body.template != null && req.body.template != undefined) {
        newMeme.template = req.body.template;
    }
    if (req.body.public != null && req.body.public != undefined) {
        newMeme.public = req.body.public;
    }
    await newMeme.save();
    return newMeme;
}

module.exports = {
    getMeme,
    getMemeByEmail,
    getMemeById,
    addMeme,
}
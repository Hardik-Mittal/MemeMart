const Meme = require("../models/meme.model");
var fs = require("fs");

const getMemeByEmail = async (email, template) => {
    return Meme.find({ email, template });
}

const getMemes = async () => {
    return Meme.find({ public: true });
}

const getMemeById = async (id) => {
    return Meme.findById(id);
}

const addMeme = async (req) => {
    var newMeme = new Meme();
    if (req.body.tags != null && req.body.tags != undefined) {
        newMeme.tags = (req.body.tags).split(',');
    }
    if (req.body.template != null && req.body.template != undefined && (req.body.template === "true" || req.body.template === "false")) {
        newMeme.template = req.body.template;
    }
    if (req.body.public != null && req.body.public != undefined && (req.body.public === "true" || req.body.public === "false")) {
        newMeme.public = req.body.public;
    }
    console.log(newMeme);
    newMeme.pic.data = fs.readFileSync("./uploads/" + req.file.filename);
    newMeme.pic.contentType = "image/png";
    console.log(req.body);
    newMeme.username = req.user.username;
    await newMeme.save();
    //return newMeme;
}

module.exports = {
    getMemes,
    getMemeByEmail,
    getMemeById,
    addMeme,
}
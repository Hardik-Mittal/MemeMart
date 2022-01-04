var multer = require("multer");

function getExtension(filename) {
    var parts = filename.split('.');
    return parts[parts.length - 1];
}

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname);
    },
});

const upload = multer({
    storage: fileStorage,
    limits: {
        fileSize: 4000000,
    },
    fileFilter
        : (req, file, cb) => {
            let imageType = getExtension(file.originalname).toLowerCase();
            if (imageType != 'png' && imageType != 'jpg' && imageType != 'jpeg') {
                cb(null, false);
            }
            else {
                return cb(null, true);
            }
        },
});

module.exports = upload;
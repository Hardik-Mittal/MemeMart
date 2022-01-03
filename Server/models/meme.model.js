const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema.Types;

const memeSchema = new mongoose.Schema(
  {
    upcount: {
      type: Number,
      required: true,
      default: 0
    },
    downcount: {
      type: Number,
      required: true,
      default: 0
    },
    username: {
      type: String,
      required: true,
    },
    pic: {
      type: {
        data: Buffer,
        contentType: String,
      },
      default: '',
      required: true,
    },
    public: {
      type: Boolean,
      default: true,
      required: true,
    },
    template: {
      type: Boolean,
      default: false,
      required: true,
    },
    tags: [
      {
        type: String,
        default: '',
      },
    ],
  },
  { timestamps: true }
);

/** 
@typedef Meme
*/
module.exports = mongoose.model("Meme", memeSchema);

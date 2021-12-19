const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema.Types;

const memeSchema = new mongoose.Schema(
  {
    upcount: {
      type: integer,
      required: true,
      default: 0
    },
    downcount: {
      type: integer,
      required: true,
      default: 0
    },
    email: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      default: '',
      required: true,
    },
    public: {
      type: Boolean,
      default: false,
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
Module.exports = mongoose.model("Meme", memeSchema);

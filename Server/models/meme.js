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
        default: '',
    },
    pic: {
      type: String,
      default: ''
    },
    publishedAt: {
      type: Date,
    },
    public: {
      type: Boolean,
      default: false,
    },
    template: {
        type: Boolean,
        default: false,
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

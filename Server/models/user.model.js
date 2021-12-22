var mongoose = require("mongoose");
// const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({path : './.env'});

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true,
            validate(value) {
                const res = validator.isEmail(value);
                if (res !== true) {
                    throw new Error(
                        "Email is invalid"
                    );
                }
            },
        },
        password: {
            type: String,
            required: true,
            min: [8, "Minimum length of password should be 8"],
            validate(value) {
                if (!value.match(/\d/) || !value.match(/[a-z]/) || !value.match(/[A-Z]/) || !value.match(/[-!$%^&*()_@+|~=`{}\[\]:";'<>?,.\/]/)) {
                    throw new Error(
                        "Password must contain a number, lowercase, uppercase letter and symbol"
                    )
                }
            }
        },
        admin: {
            type: Boolean,
            required: true,
            default: false,
        },
        ban: {
            type: Number,
            required: true,
            default: 0,
        },
        confirmed: {
            type: Boolean,
            required: true,
            default: false,
        }
    },
    {
        timestamps: true,
    }
);


userSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }

    next();
})

userSchema.methods.generateAuthToken = async function () {
    try{
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        return token;
    }catch (err) {
        console.log(err);
    }
}

/** 
@typedef User
*/
module.exports = mongoose.model("User", userSchema);
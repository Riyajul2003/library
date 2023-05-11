import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    phone: {
        type: Number,
        required: [true, "Phone is required"]
    },
    gender: String,
    role: {
        type: String,
        default: "user",
    },
    password: {
        type: String,
        required: [true, "Password is required"],

    },
    borrowedBooks: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Book"
        }
    ]
})

//make the password hashed or do encrypt
schema.pre('save', async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
})

//check the passwords
schema.methods.checkPasswords = async function(password){
    return await bcrypt.compare(password, this.password);
}

//token generation
schema.methods.generateToken = async function(){
    return await jwt.sign({_id:this._id}, process.env.SECRET_KEY)
}

const User = mongoose.model("User", schema);
export default User;
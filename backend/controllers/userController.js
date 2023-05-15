import { handleError, handleSuccess } from '../middlewares/utilities.js';
import Book from '../models/bookSchema.js';
import User from '../models/userSchema.js';

//register user
export const register = async(req, res)=>{
    try {

        const {name, email, phone, gender, password} = req.body;

        let user = await User.findOne({email});

        if(user) return res.status(400).json({success: false, error: "Email in use !"})

        user = await User.create({name, email, phone, gender, password})

        res.status(201).json({
            success: true,
            message: "User Created !",
            user
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })        
    }
}


//login user
export const login = async(req, res)=>{
    try {

        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(!user){
            return handleError(res, 400, "Invalid login credentials");
        }

        const isMatched = await user.checkPasswords(password);

        if(!isMatched) return handleError(res, 400, "Invalid login credentials")

        const token = await user.generateToken();
        
        let options = {
            expires: new Date(1000*60*60*24*10 + Date.now()),
            httpOnly: true
        }
        res.status(200).cookie("jwt", token, options).json({
            success: true,
            message: "User Logged In",
            user
        })
        
    } catch (error) {
        handleError(res);       
    }
}

//profile
export const profile = async(req, res)=>{
    try {

        res.status(201).json({
            success: true,
            user: req.user
        })
        
    } catch (error) {
        handleError(res);       
    }
}

//loutguot
export const logoutUser = async(req, res)=>{
    try {

        let options = {
            expires: new Date(Date.now()),
            httpOnly: true
        }

        res.status(200).cookie("jwt", null, options).json({
            success: true,
            message: "logout !"
        })
        
    } catch (error) {
        handleError(res);       
    }
}


//update profile
export const updateProfile = async(req, res)=>{
    try {

        const {name, gender, phone} = req.body;

        const user = req.user;

        if(name) user.name = name;
        if(gender) user.gender = gender;
        if(phone) user.phone = phone;

        res.status(201).json({
            success: true,
            user,

        })

        await user.save();
        
    } catch (error) {
        handleError(res);       
    }
}

//delete profile
export const deleteProfile = async(req, res)=>{
    try {

        const user = req.user;
        const books = user.borrowedBooks;

        //while deleting user reduce borrowCount of the book user has borrowed
        for(let i = 0; i < books.length; i++){
            let _id = books[i];
            let book = await Book.findById(_id);

            book.borrowCount -= 1;

            await book.save();
        }
        
        await user.deleteOne();

        let options = {
            expires: new Date(Date.now()),
            httpOnly: true
        }

        res.status(200).cookie("jwt", null, options).json({
            success: true,
            message: "Profile Deleted !"
        })
        
    } catch (error) {
        handleError(res);       
    }
}
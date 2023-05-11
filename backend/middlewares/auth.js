import jwt from 'jsonwebtoken';
import { handleError } from './utilities.js';
import User from '../models/userSchema.js';

//authenticate user
export const isAuthenticated = async(req, res, next)=>{
    try {

        const token = req.cookies.jwt;
        
        if(!token) return handleError(res, 404, "Please Login in");

        const {_id} = await jwt.verify(token, process.env.SECRET_KEY);

        req.user = await User.findById({_id});

        next();
        
    } catch (error) {
        handleError(res);     
    }
}

//authorize admin
export const authorizedAdmin = async(req, res, next)=>{
    try {

        const user = req.user;

        if(user.role === "user") return handleError(res, 401, "Admin access only !")

        next();
        
    } catch (error) {
        handleError(res);        
    }
}
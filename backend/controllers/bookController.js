import { handleError, handleSuccess } from "../middlewares/utilities.js";
import Book from "../models/bookSchema.js";

//add a book
export const addABook = async(req, res)=>{
    try {
        const {title, author, image, details} = req.body;

        const book = await Book.create({title, author, image, details});

        res.status(201).json({
            success: true,
            message: "Book Added !",
        })
        
    } catch (error) {
        handleError(res,500, error.message);       
    }
}


//get a book by it's id
export const getABook = async(req, res)=>{
    try {

        const book = await Book.findById(req.params.id);
        if(!book) return handleError(res, 404, "Book not found");

        res.status(201).json({
            success: true,
            book
        })
        
    } catch (error) {
        handleError(res);       
    }
}



//delete a book
export const deleteABook = async(req, res)=>{
    try {

        const book = await Book.findById(req.params.id);
        if(!book){
            return handleError(res, 200, "Book not found !")
        }

        if(book.borrowCount) return handleError(res, 400, "Wait!, Book is borrowed by someone")

        await book.deleteOne();

        handleSuccess(res, 200, "Book Deleted !")

    } catch (error) {
        handleError(res);       
    }
}



//get all the books
export const getAllBooks = async(req, res)=>{
    try {

        const books = await Book.find();

        res.status(201).json({
            success: true,
            books
        })
        
    } catch (error) {
        handleError(res, 500, error.message);       
    }
}

//borrow or return a book
export const borrowOrReturnABook = async(req, res)=>{
    try {

        const book = await Book.findById(req.params.id);

        if(!book) return handleError(res, 404, "Book not found !")

        const user = req.user;
        //check if the book is already exists
        let index = user.borrowedBooks.indexOf(book._id);
        let message = "";
        if(index != -1){
            //if exists then delete it
            user.borrowedBooks.splice(index, 1);
            book.borrowCount -= 1;
            message = "Book Returned !"
        }
        else{
            //else addd into borrowed
            user.borrowedBooks.push(book._id);
            book.borrowCount += 1;
            message = "Book Added !"
        }

        await book.save();
        await user.save();

        handleSuccess(res, 200, message);
        
    } catch (error) {
        handleError(res, 500, error.message);       
    }
}


//get borrowed books
export const getBorrowedBooks = async(req, res)=>{
    try {

        const user = req.user;
        const books = [];

        for(let i = 0; i< user.borrowedBooks.length; i++){
            const book = await Book.findById(user.borrowedBooks[i]);
            books.push(book);
        }

        res.status(201).json({
            success: true,
            books
        })
        
    } catch (error) {
        handleError(res, 500, error.message);       
    }
}
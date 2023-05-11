import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    author: {
        type: String,
        required: [true, "Author is required"],
    },
    image: {
        type: String,
        required: [true, "Cover Image is required"]
    },
    details: {
        type: String,
        required: [true, "Details is required"],
    },
    borrowCount: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
}
)


const Book = mongoose.model("Book", schema);
export default Book;
import axios from 'axios';

//register user
export const addABook = ( title, author, image, details)=>async(dispatch)=>{
    try {
        
        dispatch({
            type: "NewBookRequest"
        })

        const {data} = await axios.post(`/book/add`,{
            title, author, image, details
        },{
            headers: {
                "Content-Type": "application/json"
            }
        });

        dispatch({
            type: "NewBookSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "NewBookFail",
            payload: error.response.data.message
        })
    }
}

//login user
export const getAllBooks = ()=>async(dispatch)=>{
    try {
        
        dispatch({
            type: "AllBooksRequest"
        })

        const {data} = await axios.get(`/book/all`);
    

        dispatch({
            type: "AllBooksSuccess",
            payload: data.books,
        })

    } catch (error) {
        dispatch({
            type: "AllBooksFail",
            payload: error.response.data.message
        })
    }
}

export const getBook = (_id)=>async(dispatch)=>{
    try {
        
        dispatch({
            type: "ABookRequest"
        })

        const {data} = await axios.get(`/book/${_id}`);
       

        dispatch({
            type: "ABookSuccess",
            payload: data.book,
        })

    } catch (error) {
        dispatch({
            type: "ABookFail",
            payload: error.response.data.message
        })
    }
}

export const deleteBook = (_id)=>async(dispatch)=>{
    try {
        
        dispatch({
            type: "DeleteBookRequest"
        })

        const {data} = await axios.delete(`/book/delete/${_id}`);
       

        dispatch({
            type: "DeleteBookSuccess",
            payload: data.message,
        })

    } catch (error) {
        dispatch({
            type: "DeleteBookFail",
            payload: error.response.data.message
        })
    }
}


export const borrowReturnBook = (_id)=>async(dispatch)=>{
    try {
        
        dispatch({
            type: "BorrowBookRequest"
        })

        const {data} = await axios.put(`/book/borrow-or-return/${_id}`);

        dispatch({
            type: "BorrowBookSuccess",
            payload: data.message,
        })

    } catch (error) {
        dispatch({
            type: "BorrowBookFail",
            payload: error.response.data.message
        })
    }
}


export const getBorrowBook = ()=>async(dispatch)=>{
    try {
        
        dispatch({
            type: "BorrowedRequest"
        })

        const {data} = await axios.get(`/book/borrowed`);

        dispatch({
            type: "BorrowedSuccess",
            payload: data.books,
        })

    } catch (error) {
        dispatch({
            type: "BorrowedFail",
            payload: error.response.data.message
        })
    }
}

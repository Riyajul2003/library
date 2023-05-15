import {createReducer} from '@reduxjs/toolkit';

const initialState = {};

export const bookReducer = createReducer(initialState, {
    //load user
    NewBookRequest: (state)=>{
        state.loading = true;
    },
    NewBookSuccess: (state, action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    NewBookFail: (state, action)=>{
        state.loading = false;
        state.error = action.payload;
    },

     //load user
     AllBooksRequest: (state)=>{
        state.loading = true;
    },
    AllBooksSuccess: (state, action)=>{
        state.loading = false;
        state.books = action.payload;
    },
    AllBooksFail: (state, action)=>{
        state.loading = false;
        state.error = action.payload;
    },

    

     //load user
     BorrowBookRequest: (state)=>{
        state.loading = true;
    },
    BorrowBookSuccess: (state, action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    BorrowBookFail: (state, action)=>{
        state.loading = false;
        state.error = action.payload;
    },

     //load user
     BorrowedRequest: (state)=>{
        state.loading = true;
    },
    BorrowedSuccess: (state, action)=>{
        state.loading = false;
        state.borrowed = action.payload;
    },
    BorrowedFail: (state, action)=>{
        state.loading = false;
        state.error = action.payload;
    },

     //load user
     ABookRequest: (state)=>{
        state.loading = true;
    },
    ABookSuccess: (state, action)=>{
        state.loading = false;
        state.book = action.payload;
    },
    ABookFail: (state, action)=>{
        state.loading = false;
        state.error = action.payload;
    },

     //load user
     DeleteBookRequest: (state)=>{
        state.loading = true;
    },
    DeleteBookSuccess: (state, action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    DeleteBookFail: (state, action)=>{
        state.loading = false;
        state.error = action.payload;
    },



    ClearMessages: (state)=>{
        state.message = null
    },
    ClearErrors: (state)=>{
        state.error = null
    }
})
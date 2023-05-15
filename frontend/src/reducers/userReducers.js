import {createReducer} from '@reduxjs/toolkit';

const initialState = {};

export const userReducer = createReducer(initialState, {
    //load user
    LoadUserRequest: (state)=>{
        state.loading = true;
    },
    LoadUserSuccess: (state, action)=>{
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },
    LoadUserFail: (state, action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },


    //login user
   LoginRequest: (state)=>{
    state.loading = true;
},
LoginSuccess: (state, action)=>{
    state.loading = false;
    state.message = action.payload;
    state.isAuthenticated = true;
},
LoginFail: (state, action)=>{
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
},

    //register user
    RegisterRequest: (state)=>{
        state.loading = true;
    },
    RegisterSuccess: (state, action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    RegisterFail: (state, action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },

        //logout user
    LogoutRequest: (state)=>{
        state.loading = true;
    },
    LogoutSuccess: (state, action)=>{
        state.loading = false;
        state.message = action.payload;
        state.isAuthenticated = false;
    },
    LogoutFail: (state, action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
    },

    //delte user
    DeleteProfileRequest: (state)=>{
        state.loading = true;
    },
    DeleteProfileSuccess: (state, action)=>{
        state.loading = false;
        state.message = action.payload;
        state.isAuthenticated = false;
    },
    DeleteProfileFail: (state, action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
    },

    ClearMessages: (state)=>{
        state.message = null
    },
    ClearErrors: (state)=>{
        state.error = null
    }
})
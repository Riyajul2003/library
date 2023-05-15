import {configureStore} from '@reduxjs/toolkit'
import { userReducer } from './reducers/userReducers'
import { bookReducer } from './reducers/bookReducer';

const store = configureStore({
    reducer: {
        user: userReducer,
        book: bookReducer
    }
})

export default store;
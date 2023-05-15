import axios from 'axios';

//register user
export const registerUser = (name, email, phone, gender, password)=>async(dispatch)=>{
    try {
        
        dispatch({
            type: "RegisterRequest"
        })

        const {data} = await axios.post(`/user/register`,{
            name, email, phone, gender, password
        },{
            headers: {
                "Content-Type": "application/json"
            }
        });

        dispatch({
            type: "RegisterSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "RegisterFail",
            payload: error.response.data.message
        })
    }
}

//login user
export const loginUser = (email, password)=>async(dispatch)=>{
    try {
        
        dispatch({
            type: "LoginRequest"
        })

        const {data} = await axios.post(`/user/login`,{
            email, password
        },{
            headers: {
                "Content-Type": "application/json"
            }
        }
        );

        dispatch({
            type: "LoginSuccess",
            payload: data.message,
        })

    } catch (error) {
        dispatch({
            type: "LoginFailure",
            payload: error.response.data.message
        })
    }
}

//load user
export const loadUser = ()=> async(dispatch)=>{
    try {

        dispatch({
            type: "LoadUserRequest"
        })

        const {data} = await axios.get(`/user/profile`);
        
        dispatch({
            type: "LoadUserSuccess",
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: "LoadUserFail",
            payload: error.response.data.message
        })        
    }
}

//log out user
export const logoutUser = ()=> async(dispatch)=>{
    try {

        dispatch({
            type: "LogoutRequest"
        })

        const {data} = await axios.get(`/user/logout`);

        dispatch({
            type: "LogoutSuccess",
            payload: data.message
        })
        
    } catch (error) {
        dispatch({
            type: "LogoutFail",
            payload: error.response.data.message
        })        
    }
}


//delete profile
export const deleteProfile = ()=> async(dispatch)=>{
    try {

        dispatch({
            type: "DeleteProfileRequest"
        })

        const {data} = await axios.delete(`/user/delete`);

        dispatch({
            type: "DeleteProfileSuccess",
            payload: data.message
        })
        
    } catch (error) {
        dispatch({
            type: "DeleteProfile",
            payload: error.response.data.message
        })        
    }
}

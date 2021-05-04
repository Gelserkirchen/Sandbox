import { authAPI } from '../../api/api'

const SET_USER_DATA = 'SET_USER_DATA'

export const authAction = (id, login, email, isAuth) => ({
    type: SET_USER_DATA,
    data: {id, login, email, isAuth}
})

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                isAuth: true,
                ...action.data,
            }
        default:
            return state
    }
}

export default authReducer

export const isIamLoggedIn = () => {
    return (dispatch) => {
        authAPI.me().then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(authAction(
                    response.data.data.id, 
                    response.data.data.login, 
                    response.data.data.email,
                    true,
                    ))
            } else {
                dispatch(authAction(null, null, null, false))
            }
      });
    }
}
const SET_USER_DATA = 'SET_USER_DATA'

export const authAction = (id, email, login) => ({
    type: SET_USER_DATA,
    data: {id, email, login}
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
                ...action.data,
                isAuth: true,
            }
        default:
            return state
    }
}

export default authReducer
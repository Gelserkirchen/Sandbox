const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
  usersData: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData:  state.usersData.map(u => {
          if (u.id === action.userId) {
            return {...u, followType: true}
          }
          return u
        })

      }
    case UNFOLLOW:
      return {
        ...state,
        usersData:  state.usersData.map(u => {
          if (u.id === action.userId) {
            return {...u, followType: false}
          }
          return u
        })
      }
    case SET_USERS: {
      return {...state, usersData: [...state.usersData, ...action.users]}
    }
    default:
      return state
  }
}

export const followAction = (userId) => ({type: FOLLOW, userId})
export const unfollowAction = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAction = (users) => ({type: SET_USERS, users})

export default usersReducer
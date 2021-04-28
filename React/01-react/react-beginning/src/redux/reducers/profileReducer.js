import { usersAPI } from '../../api/api'


const ADD_POST = 'ADD_POST'
const UPD_POST = 'UPD_POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'

export const addPostAction = (text) => ({
  type: ADD_POST,
  value: text
})

export const updPostAction = (text) => ({
  type: UPD_POST,
  value: text
})

export const setProfileUsersAction = (profile) => (
  {type: SET_USERS_PROFILE,
   value: profile}
)

const initialState = {
  PostsData: [
    {id: '1', message: 'Hi it is my first post'},
    {id: '2', message: 'This is second post'}
  ],
  CurrentText: 'initial-text',
  profile: null
}

const profileReducer = (state = initialState, action) => {
  // debugger
  if (!action) {
    return 
  }

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        PostsData: [...state.PostsData, {id: action.id, message: state.CurrentText, likes: '0'}],
        CurrentText: '',
      }
    case UPD_POST:
      // debugger
      return {
        ...state,
        CurrentText: action.value
      }

    case SET_USERS_PROFILE:
      debugger
      return {
        ...state,
        profile: action.value
      }
    default:
      return state
  }
}

export default profileReducer


// export const getProfile7 = (userId) => {
//   return (dispatch) => {
//     usersAPI.getUsersProfile(userId).then(response => {
//       console.log('response from axios get profile from reducer = ', response.data)
//       dispatch(setProfileUsersAction(response.data))
//     })
//   }
// }

// export const getProfile7 = (dispatch) => {

//   const userId = 2
//   usersAPI.getUsersProfile(userId).then(response => {
//     console.log('yehraaa motherfucker')
//     dispatch(setProfileUsersAction(response.data))
//   })
// }

// export function getProfile7(userId) {
//   return async function(dispatch) {
//       const response = await usersAPI.getUsersProfile(userId)
//     // dispatch
//     dispatch({
//       type: SET_USERS_PROFILE,
//       value: response.data
//     })
//   };
// }

export const getProfile = (userId) => {
  console.log('hello i am in getProfile7')
  return (dispatch) => {
    usersAPI.getUsersProfile(userId).then(response => {
      console.log('i am really here getProfile7 forever')
      dispatch(setProfileUsersAction(response.data))
   })
  }
}
import { profileAPI } from '../../api/api'

const ADD_POST = 'ADD_POST'
const UPD_POST = 'UPD_POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const GET_USER_PROFILE_STATUS = 'GET_USER_PROFILE_STATUS'

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

export const getProfileStatusAction = (value) => ({
  type: GET_USER_PROFILE_STATUS,
  status: value
})

// export const updateProfileStatusAction = (value) => ({
//   type: UPD_USER_PROFILE_STATUS,
//   status: value
// })

const initialState = {
  PostsData: [
    {id: '1', message: 'Hi it is my first post'},
    {id: '2', message: 'This is second post'}
  ],
  CurrentText: 'initial-text',
  profile: null,
  status: ""
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
      // debugger
      return {
        ...state,
        profile: action.value
      }

    case GET_USER_PROFILE_STATUS:
    return {
      ...state,
      status: action.status
    }  
    
    default:
      return state
  }
}

export default profileReducer

// Thunk for get profile 
export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getUsersProfile(userId).then(response => {
      dispatch(setProfileUsersAction(response.data))
   })
  }
}

// Thunk for get profile 
export const getProfileStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
      // debugger
      dispatch(getProfileStatusAction(response.data))
   })
  }
}

// Thunk for updating profile status
export const updateProfileStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
      debugger
      if (response.data.resultCode === 0) {
        dispatch(getProfileStatusAction(status))
      } 
   })
  }
}
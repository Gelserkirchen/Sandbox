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
      // let x = action.value
      return {
        ...state,
        profile: action.value
      }
    default:
      return state
  }
}

export default profileReducer

export const getProfile = (userId) => (dispatch) => {
  usersAPI.getUserProfile(userId).then(response => {
    debugger
    console.log('i am here and here is response', response)
    dispatch(setProfileUsersAction(response.data))
  })
}

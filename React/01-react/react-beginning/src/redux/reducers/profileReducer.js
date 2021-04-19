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

export const setProfileUsersAction = (data) => (
  {type: SET_USERS_PROFILE,
   data: data}
)

const initialState = {
  PostsData: [
    {id: '1', message: 'Hi it is my first post'},
    {id: '2', message: 'This is second post'}
  ],
  CurrentText: 'initial-text'
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
      return {
        ...state,
        Avatar: action.data.photos
      }
    default:
      return state
  }
}

export default profileReducer
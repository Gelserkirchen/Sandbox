const ADD_POST = 'ADD_POST'
const UPD_POST = 'UPD_POST'

export const addPostAction = (text) => ({
  type: ADD_POST,
  value: text
})

export const updPostAction = (text) => ({
  type: UPD_POST,
  value: text
})

const initialState = {
  PostsData: [
    {id: '1', message: 'Hi it is my first post'},
    {id: '2', message: 'This is second post'}
  ],
  CurrentText: 'initial-text'
}

const postsReducer = (state = initialState, action) => {
  // debugger
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: action.id,
        message: state.CurrentText,
        likes: '0'
      }
      state.PostsData.push(newPost)
      // debugger
      state.CurrentText = ''
      // state.subscribeRender()
      return state
    case UPD_POST:
      state.CurrentText = action.value
      // state.subscribeRender()
      return state
    default:
      return state
  }
}

export default postsReducer
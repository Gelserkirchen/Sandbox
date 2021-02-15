import {ADD_MESSAGE, ADD_POST, UPD_MESSAGE_TEXT, UPD_POST, updMessageText, updPostAction} from '../store';

const postsReducer = (state, action) => {
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
      return state
    case UPD_POST:
      state.CurrentText = action.value
      return state
    default:
      return state
  }
}

export default postsReducer
import {ADD_MESSAGE, ADD_POST, UPD_MESSAGE_TEXT, UPD_POST, updMessageText, updPostAction} from '../store';

const messagesReducer = (state, action) => {
  switch (action.type) {
    case UPD_MESSAGE_TEXT:
      state.MessageText = action.value
      return state
    case ADD_MESSAGE:
      const objToPush = {
        id: '777',
        message: state.MessageText
      }
      state.MessagesData.push(objToPush)
      state.MessageText = ''
      return state
    default:
      return state
  }
}

export default messagesReducer
const ADD_MESSAGE = 'ADD_MESSAGE'
const UPD_MESSAGE_TEXT = 'UPD_MESSAGE_TEXT'

export const addMessage = () => ({
  type: ADD_MESSAGE,
})

export const updMessageText = (text) => ({
  type: UPD_MESSAGE_TEXT,
  value: text
})

const initialState = {
  DialogsData: [
    {id: '1', name: 'Marya', likes: '11'},
    {id: '2', name: 'Dima', likes: '12'},
    {id: '3', name: 'Egor', likes: '23'},
    {id: '4', name: 'Tanya', likes: '12'},
    {id: '5', name: 'Fedor', likes: '12'},
  ],
    MessagesData: [
    {id: '1', message: 'Hello, world'}
  ],
    MessageText: ''
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        MessagesData: [...state.MessagesData, {id: '777', message: state.MessageText}],
        MessageText: ''
      }
    case UPD_MESSAGE_TEXT:
      return {
        ...state,
        MessageText: action.value
      }
    default:
      return state
  }
}

export default messagesReducer
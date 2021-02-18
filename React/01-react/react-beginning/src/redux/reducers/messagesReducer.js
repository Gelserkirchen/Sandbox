export const ADD_MESSAGE = 'ADD_MESSAGE'
export const UPD_MESSAGE_TEXT = 'UPD_MESSAGE_TEXT'

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
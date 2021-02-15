import postsReducer from './reducers/postsReducer';
import messagesReducer from './reducers/messagesReducer';

export const ADD_POST = 'ADD_POST'
export const UPD_POST = 'UPD_POST'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const UPD_MESSAGE_TEXT = 'UPD_MESSAGE_TEXT'

let store = {
  _state: {
    dialogPages: {
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
    },
    profilePage: {
      PostsData: [
        {id: '1', message: 'Hi it is my first post'},
        {id: '2', message: 'This is second post'}
      ],
      CurrentText: 'initial-text'
    },
    sideBar: {}
  },

  getState() {
    return this._state
  },

  _callSubscriber () {
    console.log('error') // stop word
  },


  dispatch(action) {
    // debugger
    this._state.profilePage = postsReducer(this._state.profilePage, action)
    this._state.dialogPages = messagesReducer(this._state.dialogPages, action)
    this._callSubscriber(this._state)
  },

  subscribeRender (observer) {
    this._callSubscriber = observer
  }
}

export const addPostAction = (text) => ({
  type: ADD_POST,
  value: text
})

export const updPostAction = (text) => ({
  type: UPD_POST,
  value: text
})

export const addMessage = () => ({
  type: ADD_MESSAGE,
})

export const updMessageText = (text) => ({
  type: UPD_MESSAGE_TEXT,
  value: text
})

export default store
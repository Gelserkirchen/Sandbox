let rerenderEntireTree = () => {
  console.log('error')
}

const state = {
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
    ]
  },
  profilePage: {
    PostsData: [
      {id: '1', message: 'Hi it is my first post'},
      {id: '2', message: 'This is second post'}
    ],
    CurrentText: 'initial-text'
  }
}

export let addPost = () => {
  const newPost = {
    id: '6',
    message: state.profilePage.CurrentText,
    likes: '0'
  }

  state.profilePage.PostsData.push(newPost)
  rerenderEntireTree(state)
  updatePost('')
}

export let updatePost = (text) => {
  state.profilePage.CurrentText = text
  rerenderEntireTree(state)
}

export const subscribeRender = (observer) => {
  rerenderEntireTree = observer
}

export default state
import React from 'react'
import styles from './MyPosts.module.css'
import Post from './MyPost/Post';
import { reduxForm, Field } from 'redux-form'

const MyPosts = (props) => {

  let posts = props.profilePage.PostsData.map(element => {
    return <Post message={element.message}/>
  })

  const submitMessage = (values) => {
    debugger
    props.addPost(values.messageFormComponent)
  }

  return (
    <div>
      <h3>My posts</h3>
      <MessageReduxForm onSubmit={submitMessage}/>
      <div className={styles.posts}>
        {posts}
      </div>
    </div>
  )
}

const MessageComponent = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"textarea"} name={"messageFormComponent"} placeholder={"enter text here"}/>
      </div>
      <div className={ styles.buttons }>
        <button>Add post</button>
      </div>
    </form>
  )
}

const MessageReduxForm = reduxForm({form: 'profileMessages'})(MessageComponent)

export default MyPosts
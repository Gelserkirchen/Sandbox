import React from 'react'
import styles from './MyPosts.module.css'
import Post from './MyPost/Post';
import {addPostAction, updPostAction} from '../../../redux/store';

const MyPosts = (props) => {

  console.log('props in MyPosts', props)

  let posts = props.postData.PostsData.map(element => {
    return <Post message={element.message}/>
  })

  let addPostLink = React.createRef()

  const addPost = () => {
    // debugger
    const message = addPostLink.current.value
    props.dispatch(addPostAction(message))
  }

  const updPst = () => {
    // debugger
    const message = addPostLink.current.value
    props.dispatch(updPostAction(message))
  }

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea onChange={ updPst } ref={addPostLink} value={ props.postData.CurrentText }/>
      </div>
      <div className={ styles.buttons }>
        <button onClick={ addPost }>Add post</button>
        <button>Remove</button>
      </div>
      <div className={styles.posts}>
        {posts}
      </div>
    </div>
  )
}

export default MyPosts
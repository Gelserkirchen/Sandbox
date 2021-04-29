import React from 'react'
import styles from './MyPosts.module.css'
import Post from './MyPost/Post';
// import { MyPostsContainer } from './MyPostsContainer';

const MyPosts = (props) => {
  let state = props.profilePage

  let posts = state.PostsData.map(element => {
    return <Post message={element.message}/>
  })

  let addPostLink = React.createRef()

  const updatePosts = (event) => {
    props.updPost(event.target.value)
    event.target.value = state.CurrentText
  }

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea onChange={ updatePosts } ref={ addPostLink } value={ state.CurrentText }/>
      </div>
      <div className={ styles.buttons }>
        <button onClick={ props.addPost }>Add post</button>
        <button>Remove</button>
      </div>
      <div className={styles.posts}>
        {posts}
      </div>
    </div>
  )
}

export default MyPosts
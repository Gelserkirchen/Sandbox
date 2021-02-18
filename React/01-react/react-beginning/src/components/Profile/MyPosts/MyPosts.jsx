import React from 'react'
import styles from './MyPosts.module.css'
import Post from './MyPost/Post';

const MyPosts = (props) => {

  let posts = props.messages.map(element => {
    return <Post message={element.message}/>
  })

  let addPostLink = React.createRef()

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea onChange={ props.updPst } ref={ addPostLink } value={ props.currentText }/>
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
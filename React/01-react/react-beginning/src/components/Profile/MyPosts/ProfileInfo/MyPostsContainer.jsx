import React from 'react'
import MyPosts from '../MyPosts';
import {addPostAction, updPostAction} from '../../../../redux/reducers/postsReducer';

const MyPostsContainer = (props) => {

  const addPost = () => {
    props.dispatch(addPostAction())
  }

  const updPst = (message) => {
    props.dispatch(updPostAction(message))
  }

  return (
    <div>
      <MyPosts addPost={ addPost }
               updPst={ updPst }
               currentText={props.store.getState().profilePage.currentText}/>
    </div>
  )
}

export default MyPostsContainer
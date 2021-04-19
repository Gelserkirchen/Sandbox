import React from 'react'
import MyPosts from './MyPosts';
import {addPostAction, updPostAction} from '../../../redux/reducers/profileReducer';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    // messages: state.PostsData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updPost: (body) => {
      // debugger
        dispatch(updPostAction(body))
    },
    addPost: () => {
        dispatch(addPostAction())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
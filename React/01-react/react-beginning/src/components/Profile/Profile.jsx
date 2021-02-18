import React from 'react'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/ProfileInfo/MyPostsContainer';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store = {props.store} />
    </div>
  )
}

export default Profile
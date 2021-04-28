import React from 'react'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
debugger
  let x = props
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer store = {props.store} />
    </div>
  )
}

export default Profile
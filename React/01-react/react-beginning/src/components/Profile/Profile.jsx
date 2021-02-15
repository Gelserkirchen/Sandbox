import React from 'react'
import styles from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts postData = {props.postData} dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile
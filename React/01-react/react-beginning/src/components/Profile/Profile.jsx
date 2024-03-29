import React from 'react'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  console.log('props in pofile', props)

  return (
    <div>
      <ProfileInfo profile={props.profile.profile} status={props.profile.status} updateProfileStatus={props.updateProfileStatus}/>
      <MyPostsContainer store = {props.profile.store} />
    </div>
  )
}

export default Profile
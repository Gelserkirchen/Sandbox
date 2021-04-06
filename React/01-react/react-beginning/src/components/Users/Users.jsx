import React from 'react'
import styles from './Users.settings.css'
import axios from 'axios';
import photo from '../../assets/images/avatar.png'

const Users = (props) => {

  if (props.usersData.usersData.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        props.setUsers(response.data.items)
      }
    )
  }

  return (
    <div>
      {
        props.usersData.usersData.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small === null ? photo : u.photos.small} alt="" className={styles.usersPhoto}/>
            </div>
            <div>
              {
                u.followType === true
                  ? <button onClick={() => { props.unfollowAction(u.id) }}> Unfollow </button>
                  : <button onClick={() => { props.followAction(u.id) }}> Follow </button>
              }
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.followType}</div>
            </span>
            <span>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </span>

          </span>
        </div>)
      }
    </div>
  )
}

export default Users


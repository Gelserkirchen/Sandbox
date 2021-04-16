import React from 'react'
import styles from './Users.module.css'
import photo from '../../assets/images/avatar.png'

let Users = (props) => {

  const numberOfPages = Math.ceil(props.usersCount / props.usersOnPage)

  const pages = []

  for (let i = 1; i <= 8; i++) {
    if (i === 8) {
      pages.push('...')
      pages.push(numberOfPages)
    } else {
      pages.push(i)
    }
  }

  return (<div>
    <div>
      {
        pages.map(number => {

          return <span className={props.currentPage === number ? styles.selectedPhoto : styles.unselectedItem}
                       onClick={(e) => {props.getNewData(number)}} >{number}</span>
        })
      }
    </div>
    {
      props.usersData.map(u => <div key={u.id}>
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
  </div>)
}


export default Users


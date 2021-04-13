import React from 'react'
import styles from './Users.module.css'
import axios from 'axios';
import photo from '../../assets/images/avatar.png'
import {setUsersAction} from '../../redux/reducers/usersReducer';

class Users extends React.Component{

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalCountOfUsers(response.data.totalCount)
    })
  }

  getNewData(pageNumber) {
    this.props.setCurrentPageAction(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersOnPage}`).then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {

    const numberOfPages = Math.ceil(this.props.usersCount / this.props.usersOnPage)

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
            // debugger
            return <span className={this.props.currentPage === number ? styles.selectedPhoto : styles.unselectedItem}
                         onClick={() => {this.getNewData(number)}} >{number}</span>
          })
        }
      </div>
      {
        this.props.usersData.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small === null ? photo : u.photos.small} alt="" className={styles.usersPhoto}/>
            </div>
            <div>
              {
                u.followType === true
                  ? <button onClick={() => { this.props.unfollowAction(u.id) }}> Unfollow </button>
                  : <button onClick={() => { this.props.followAction(u.id) }}> Follow </button>
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
}

export default Users


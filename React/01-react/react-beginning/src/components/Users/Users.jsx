import React from 'react'
import styles from './Users.settings.css'

const Users = (props) => {
  const users = []
  props.usersData.usersData.map(e => {
    console.log(e)
    users.push(e)
  })

  return (
    users.map(e => {
        // console.log(e.name)
        return <div>
            <div>{e.location.city}</div>
            <div>{e.name}</div>
        </div>


      }
    )
  )
}

export default Users


import React from 'react'
import Users from './Users';
import {connect} from 'react-redux';
import {followAction, setUsersAction, unfollowAction} from '../../redux/reducers/usersReducer';

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followAction: (userId) => {
      dispatch(followAction(userId))
    },
    unfollowAction: (userId) => {
      dispatch(unfollowAction(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAction(users))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
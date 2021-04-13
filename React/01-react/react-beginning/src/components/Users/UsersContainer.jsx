import React from 'react'
import Users from './Users';
import {connect} from 'react-redux';
import {
  followAction,
  setCurrentPageAction,
  setTotalCountOfUsers,
  setUsersAction,
  unfollowAction
} from '../../redux/reducers/usersReducer';

const mapStateToProps = (state) => {

  console.log('mapStateToProps: ', state)

  return {
    usersData: state.usersPage.usersData,
    usersOnPage: state.usersPage.usersOnPage,
    usersCount: state.usersPage.countOfUsers,
    currentPage: state.usersPage.currentPageNumber
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
    },
    setCurrentPageAction: (pageNumber = 1) => {
      dispatch(setCurrentPageAction(pageNumber))
    },
    setTotalCountOfUsers: (pageNumber = 1) => {
      dispatch(setTotalCountOfUsers(pageNumber))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
import React from 'react'
import Users from './Users';
import {connect} from 'react-redux';
import {followAction, unfollowAction} from '../../redux/reducers/usersReducer';

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followAction: () => {
      dispatch(followAction())
    },
    unfollowAction: () => {
      dispatch(unfollowAction())
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
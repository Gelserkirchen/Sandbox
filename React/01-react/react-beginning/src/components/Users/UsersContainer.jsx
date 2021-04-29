import React from 'react'
import Users from './Users';
import {connect} from 'react-redux';
import {
  follow, unfollow,
  setCurrentPageAction,
  setTotalCountOfUsers,
  setUsersAction, toggleFetchingStatus,
  getUsers, 
  toggleButtonStatus, 
} from '../../redux/reducers/usersReducer';
import Preloader from '../MultiComponents/Preloader';
import { compose } from 'redux';

class UsersContainer extends React.Component {
  props = {}

  componentDidMount() {
    this.props.getUsers()
  }

  render() {

    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users usersCount={this.props.usersCount}
               usersOnPage={this.props.usersOnPage}
               currentPage={this.props.currentPage}
               getUsers={this.props.getUsers}
               unfollow={this.props.unfollow}
               follow={this.props.follow}
               usersData={this.props.usersData}
               toggleButtonStatus={this.props.toggleButtonStatus}
               buttonsDisabledArray={this.props.buttonsDisabledArray}
        />
      </>

    )
  }
}

let mapStateToProps = (state) => {

  // console.log('mapStateToProps: ', state)
  return {
    usersData: state.usersPage.usersData,
    usersOnPage: state.usersPage.usersOnPage,
    usersCount: state.usersPage.countOfUsers,
    currentPage: state.usersPage.currentPageNumber,
    isFetching: state.usersPage.isFetching,
    toggleButtonStatus: state.usersPage.toggleButtonStatus,
    buttonsDisabledArray: state.usersPage.buttonsDisabledArray
  }
}

export default compose(connect(mapStateToProps, {
  follow,
  unfollow,
  setUsersAction,
  setCurrentPageAction,
  setTotalCountOfUsers,
  toggleFetchingStatus,
  toggleButtonStatus,
  getUsers
}))(UsersContainer)


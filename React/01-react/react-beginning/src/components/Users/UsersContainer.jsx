import React from 'react'
import Users from './Users';
import {connect} from 'react-redux';
import {
  followAction,
  setCurrentPageAction,
  setTotalCountOfUsers,
  setUsersAction, toggleFetchingStatus,
  unfollowAction
} from '../../redux/reducers/usersReducer';
import axios from 'axios';
import Preloader from '../MultiComponents/Preloader';

class UsersContainer extends React.Component {
  props = {}

  componentDidMount() {
    this.props.toggleFetchingStatus(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`).then(response => {
      this.props.toggleFetchingStatus(false)
      this.props.setUsersAction(response.data.items)
      this.props.setTotalCountOfUsers(response.data.totalCount)
    })
  }

  getNewData = (pageNumber) => {
    this.props.toggleFetchingStatus(true)
    this.props.setCurrentPageAction(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersOnPage}`).then(response => {
      this.props.toggleFetchingStatus(false)
      this.props.setUsersAction(response.data.items)
    })
  }

  render() {

    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users usersCount={this.props.usersCount}
               usersOnPage={this.props.usersOnPage}
               currentPage={this.props.currentPage}
               getNewData={this.getNewData}
               unfollowAction={this.props.unfollowAction}
               followAction={this.props.followAction}
               usersData={this.props.usersData}
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
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps, {
  followAction,
  unfollowAction,
  setUsersAction,
  setCurrentPageAction,
  setTotalCountOfUsers,
  toggleFetchingStatus
})(UsersContainer)


import { getProfile } from '../../redux/reducers/profileReducer'
import React from 'react'
import {connect} from 'react-redux';
import Profile from './Profile';
import { withRouter } from 'react-router';
import { withAuthRedirectComponent } from '../HOC/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

    componentDidMount() {
      let userId = this.props.match.params.userId
      this.props.getProfile(userId)
    }
    render() {    
      return <Profile {...this.props.profile}/>
    }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage,
    isAuth: state.auth.isAuth
  }
}

export default compose(
  connect(mapStateToProps, {getProfile}),
  withRouter,
  withAuthRedirectComponent
)(ProfileContainer)
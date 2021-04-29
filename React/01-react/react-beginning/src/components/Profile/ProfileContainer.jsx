import { getProfile } from '../../redux/reducers/profileReducer'
import React from 'react'
import {connect} from 'react-redux';
import Profile from './Profile';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
      let userId = this.props.match.params.userId
      this.props.getProfile(userId)
    }

    render() {
      if (!this.props.isAuth) { return <Redirect to={"/login"}/> }
      return <Profile {...this.props.profile}/>
    }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage,
    isAuth: state.auth.isAuth
  }
}

let PCwithDataFromRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
  getProfile
})(PCwithDataFromRouter)


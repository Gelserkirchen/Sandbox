import { getProfile } from '../../redux/reducers/profileReducer'
import React from 'react'
import {connect} from 'react-redux';
import Profile from './Profile';
import {setProfileUsersAction} from './../../redux/reducers/profileReducer'
import { withRouter } from 'react-router';


class ProfileContainer extends React.Component {

    componentDidMount() {
      let userId = this.props.match.params.userId
      console.log('userId', userId)

      this.props.getProfile(userId)
      // usersAPI.getUsersProfile(userId).then(response => {
      //   console.log('response from axios get profile = ', response.data)
      //   this.props.setProfileUsersAction(response.data)
      // })
    }

    render() {
      debugger
      return <Profile {...this.props.profile}/>

    }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage
  }
}

let PCwithDataFromRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
  getProfile,
  setProfileUsersAction
})(PCwithDataFromRouter)


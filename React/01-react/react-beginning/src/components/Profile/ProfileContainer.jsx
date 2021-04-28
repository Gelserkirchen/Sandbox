// import React from 'react'
// import {connect} from 'react-redux';
// import Profile from './Profile';
// import getProfile from '../../redux/reducers/profileReducer'
// import { withRouter } from 'react-router';

import React from 'react'
import {connect} from 'react-redux';
import Profile from './Profile';
import axios from 'axios';
import {setProfileUsersAction} from './../../redux/reducers/profileReducer'
import { withRouter } from 'react-router';


class ProfileContainer extends React.Component {

    componentDidMount() {
      // debugger
      // let userId = this.props.match.params.userId
      // this.props.getProfile(userId)

      debugger
      let userId = this.props.match.params.userId
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
        debugger
        this.props.setProfileUsersAction(response.data)
      })
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
  // getProfile
  setProfileUsersAction
})(PCwithDataFromRouter)
import React from 'react'
import {connect} from 'react-redux';
import Profile from './Profile';
import axios from 'axios';
import {setProfileUsersAction} from './../../redux/reducers/profileReducer'
import { withRouter } from 'react-router';


class ProfileContainer extends React.Component {
    componentDidMount() {
      let userId = this.props.match.params.userId
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
        // debugger
        this.props.setProfileUsersAction(response.data)
      })
    }

    render() {
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
  setProfileUsersAction
})(PCwithDataFromRouter)
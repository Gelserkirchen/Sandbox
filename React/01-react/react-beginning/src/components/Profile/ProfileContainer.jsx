import React from 'react'
import {connect} from 'react-redux';
import Profile from './Profile';
import axios from 'axios';
import {setProfileUsersAction} from './../../redux/reducers/profileReducer'


class ProfileContainer extends React.Component {
    componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
        // debugger
        this.props.setProfileUsersAction(response.data)
      })
    }

    render() {
      return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
  console.log('mapStateToPropsInProfile: ', state)
  return {
    a: 15,
  }
}



export default connect(mapStateToProps, {
  setProfileUsersAction
})(ProfileContainer)
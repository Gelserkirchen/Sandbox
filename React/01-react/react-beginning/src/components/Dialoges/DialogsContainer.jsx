import React from 'react'
import {addMessage, updMessageText} from '../../redux/reducers/messagesReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

  const mapStateToProps = (state) => {
    return {
      dialogPages: state.usersPage,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      addMessage: () => {
        dispatch(addMessage())
      } ,
      updMessageText: (body) => {
        dispatch(updMessageText(body))
      }
    }
}

  const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
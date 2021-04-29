import {addMessage, updMessageText} from '../../redux/reducers/messagesReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {dialoges} from '../../redux/reducers/messagesReducer'

  const mapStateToProps = (state) => {
    return {
      dialogPages: state.dialogPages,
      isAuth: state.auth.isAuth
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
import {addMessage, updMessageText} from '../../redux/reducers/messagesReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { withAuthRedirectComponent } from '../HOC/withAuthRedirect'
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialogPages: state.dialogPages
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

// const withAuthRedirect = withAuthRedirectComponent(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect)

// export default DialogsContainer

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirectComponent
)(Dialogs)
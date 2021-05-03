import {addMessageToDialog} from '../../redux/reducers/messagesReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialogPages: state.dialogPages
  }
}

export default compose(
  connect(mapStateToProps, {
    addMessageToDialog
  }),
)(Dialogs)
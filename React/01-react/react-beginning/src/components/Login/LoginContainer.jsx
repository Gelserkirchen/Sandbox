import {login} from '../../redux/reducers/auth_Reducer';
// import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirectComponent } from '../HOC/withAuthRedirect'
import Login from './Login'

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default compose(
    connect(mapStateToProps, {
      login
    }),
  )(Login)
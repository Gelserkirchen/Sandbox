import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Route from 'react-router-dom/es/Route';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialoges/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer'
import {connect, Provider} from 'react-redux';
import Preloader from './components/MultiComponents/Preloader';
import { compose } from 'redux';
import {appInit} from './redux/reducers/appReducer';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/redux-store';
// import {rerenderEntireTree} from './index';

class App extends React.Component {
  componentDidMount() {
    this.props.appInit()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
        <div className='app-wrapper'>
          <HeaderContainer/>
          <NavBar/>
          <div className='app-wrapper-content'>
            <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route path='/Users' component={() => <UsersContainer/>}/>
            <Route path='/News' component={() => <News/>}/>
            <Route path='/Music' component={Music}/>
            <Route path='/Settings' component={Settings}/>
            <Route path='/Login' render={() => <LoginContainer/>}/>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  connect(mapStateToProps, {appInit}),
)(App)

let SocialNetworkApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
        <AppContainer/>
    </Provider>
  </BrowserRouter>
}



export default SocialNetworkApp
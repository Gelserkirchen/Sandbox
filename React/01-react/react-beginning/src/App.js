import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialoges/Dialogs';
import Route from 'react-router-dom/es/Route';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialoges/DialogsContainer';
import MyPostsContainer from './components/Profile/MyPosts/MyPostsContainer';


const App = (props) => {
  // console.log('props in app', props)

  return (
      <div className='app-wrapper'>
        <Header/>
        <NavBar/>
        <div className='app-wrapper-content'>
          <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
          <Route path='/Profile' render={() => <MyPostsContainer/>}/>
          <Route path='/News' component={() => <News/>}/>
          <Route path='/Music' component={Music}/>
          <Route path='/Settings' component={Settings}/>
        </div>
      </div>
  )
}

export default App;

import state, {addPost, updatePost, subscribeRender} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';


export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App dialogs={state.dialogPages.DialogsData} messages={state.dialogPages.MessagesData}
             posts={state.profilePage} addPost = {addPost} updPosts = {updatePost}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

subscribeRender(rerenderEntireTree(state))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

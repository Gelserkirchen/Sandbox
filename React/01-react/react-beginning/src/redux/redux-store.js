import {combineReducers, createStore} from 'redux';
import postsReducer from './reducers/postsReducer';
import messagesReducer from './reducers/messagesReducer';
import usersReducer from './reducers/usersReducer';

const reducers = combineReducers({
  profilePage: postsReducer,
  dialogPages: messagesReducer,
  usersPage: usersReducer
})


const store = createStore(reducers)

export default store
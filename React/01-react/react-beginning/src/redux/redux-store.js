import {combineReducers, createStore} from 'redux';
import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';
import usersReducer from './reducers/usersReducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogPages: messagesReducer,
  usersPage: usersReducer
})


const store = createStore(reducers)

export default store
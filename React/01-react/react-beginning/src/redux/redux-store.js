import { combineReducers, createStore } from 'redux';
import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';
import usersReducer from './reducers/usersReducer';
import authReducer from './reducers/auth_Reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogPages: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer
})

const store = createStore(reducers)

export default store
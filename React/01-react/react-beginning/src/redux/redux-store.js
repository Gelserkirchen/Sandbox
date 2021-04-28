import { applyMiddleware, combineReducers, createStore } from 'redux';
import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';
import usersReducer from './reducers/usersReducer';
import authReducer from './reducers/auth_Reducer';
import thunk from 'redux-thunk'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogPages: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  PCwithDataFromRouter: profileReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
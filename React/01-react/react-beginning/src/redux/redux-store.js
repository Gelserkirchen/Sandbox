import { applyMiddleware, combineReducers, createStore } from 'redux';
import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';
import usersReducer from './reducers/usersReducer';
import authReducer from './reducers/auth_Reducer';
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogPages: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  PCwithDataFromRouter: profileReducer,
  form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
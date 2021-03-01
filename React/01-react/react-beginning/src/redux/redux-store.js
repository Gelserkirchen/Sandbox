import {combineReducers, createStore} from 'redux';
import postsReducer from './reducers/postsReducer';
import messagesReducer from './reducers/messagesReducer';

const reducers = combineReducers({
  profilePage: postsReducer,
  dialogPages: messagesReducer
})


const store = createStore(reducers)

export default store
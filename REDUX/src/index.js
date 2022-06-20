import './styles.css'
import {applyMiddleware, createStore, compose} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'
import {rootReducer} from "./redux/reducers";
import {async_increment, changeThemes, decrement, increment} from "./redux/actions";

let counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const async = document.getElementById('async')
const changeTheme = document.getElementById('theme')

let store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})

async.addEventListener('click', () => {
  store.dispatch(async_increment())
})

changeTheme.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('dark')
  ? 'light' : 'dark'
  store.dispatch(changeThemes(newTheme))
})

store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state.counter
  document.body.className = state.theme.value
})

store.dispatch({type: '__INIT_STATE__'})



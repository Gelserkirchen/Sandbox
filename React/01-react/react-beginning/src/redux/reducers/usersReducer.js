import { usersAPI } from '../../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT_OF_USERS = 'SET_TOTAL_COUNT_OF_USERS'
const TOGGLE_FETCHING_STATUS = 'TOGGLE_FETCHING_STATUS'
const TOGGLE_BUTTON_STATUS = 'TOGGLE_BUTTON_STATUS'

const initialState = {
  usersData: [],
  usersOnPage: 5,
  countOfUsers: 19,
  currentPageNumber: 1,
  isFetching: false,
  buttonsDisabledArray: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData:  state.usersData.map(u => {
          if (u.id === action.userId) {
            return {...u, followType: true}
          }
          return u
        })

      }
    case UNFOLLOW:
      return {
        ...state,
        usersData:  state.usersData.map(u => {
          if (u.id === action.userId) {
            return {...u, followType: false}
          }
          return u
        })
      }
    case SET_USERS: {
      return {...state, usersData: action.users}
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPageNumber: action.pageNumber}
    }
    case SET_TOTAL_COUNT_OF_USERS: {
      return {...state, countOfUsers: action.countOfUsers}
    }
    case TOGGLE_FETCHING_STATUS: {
      return {...state, isFetching: action.isFetching}
    }
    case TOGGLE_BUTTON_STATUS: {
      // debugger
      return {
        ...state, 
        buttonsDisabledArray: action.isFetching ? 
        [...state.buttonsDisabledArray, action.userId] :
        [state.buttonsDisabledArray.filter(id => id !== action.userId)]
      }
    }

    default:
      return state
  }
}

export const followAction = (userId) => ({type: FOLLOW, userId})
export const unfollowAction = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAction = (users) => ({type: SET_USERS, users})
export const setCurrentPageAction = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export const setTotalCountOfUsers = (countOfUsers) => ({type: SET_TOTAL_COUNT_OF_USERS, countOfUsers})
export const toggleFetchingStatus = (isFetching) => ({type: TOGGLE_FETCHING_STATUS, isFetching})
export const toggleButtonStatus = (isFetching, userId) => ({type: TOGGLE_BUTTON_STATUS, isFetching, userId})

export default usersReducer

export const getUsers = (pageNumber = initialState.currentPageNumber) => {
   return (dispatch) => {
      
      dispatch(setCurrentPageAction(pageNumber))
      dispatch(toggleButtonStatus(true))

      usersAPI.getUsers(pageNumber, initialState.usersOnPage).then(response => {
        dispatch(toggleFetchingStatus(false))
        dispatch(setUsersAction(response.items))

        if (pageNumber === initialState.currentPageNumber) {
           dispatch(setTotalCountOfUsers(response.totalCount))
        }
    })
   }
}

const toggleFollowStatus = (userId, dispatch, apiUsersMethod, actionMethod) => {
  dispatch(toggleButtonStatus(true, userId))
  const response = apiUsersMethod(userId)
  if (response.resultCode === 0) {
    dispatch(actionMethod(userId))
    dispatch(toggleButtonStatus(false, userId))
  }
}

export const unfollow = (userId) => {
  return async (dispatch) => {
    const apiUsersMethod = await usersAPI.getUsersForUnfollow.bind(usersAPI)
    const actionMethod = unfollowAction

    toggleFollowStatus(userId, dispatch, apiUsersMethod, actionMethod)

  }
}

export const follow = (userId) => {
  return async (dispatch) => {
    const apiUsersMethod = await usersAPI.getUsersForFollow.bind(usersAPI)
    const actionMethod = followAction

    toggleFollowStatus(userId, dispatch, apiUsersMethod, actionMethod)
  }
}

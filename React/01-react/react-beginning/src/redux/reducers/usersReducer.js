const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

const initialState = {
  usersData: [
    {id: '1', followType: 'follow', imgUrl: '', name: 'Igor', location: {city: 'Moscow', country: 'Russia'}},
    {id: '2', followType: 'unfollow', imgUrl: '', name: 'Andrew', location: {city: 'Budapesht', country: 'Hangry'}},
    {id: '3', followType: 'follow', imgUrl: '', name: 'Semen', location: {city: 'Berlin', country: 'Germany'}},
    {id: '4', followType: 'unfollow', imgUrl: '', name: 'Anton', location: {city: 'Brugge', country: 'Belgium'}},
  ]
}

export const followAction = () => {
  return {
    type: FOLLOW
  }
}

export const unfollowAction = () => {
  return {
    type: UNFOLLOW
  }
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        followType: 'unfollow'
      }
    case UNFOLLOW:
      return {
        ...state,
        followType: 'follow'
      }
    default:
      return state
  }
}

export default usersReducer
const initialState = {
  data: [
    {id: Math.random(), imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/de/Windows_live_square.JPG"},
    {id: Math.random(), imgUrl: "https://upload.wikimedia.org/wikipedia/commons/7/71/Weaved_truncated_square_tiling.png"}
  ]
}

export default (state = initialState , action) => {
 switch (action.type) {
  case 'USER_FETCH_REQUESTED':
    return {
    ...state,
    }
  case 'USER_FETCH_SUCCEEDED':
   return {
    ...state,
   }
  case 'USER_FETCH_FAILED':
   return {
    ...state,
   }
  default:
   return state
 }
}

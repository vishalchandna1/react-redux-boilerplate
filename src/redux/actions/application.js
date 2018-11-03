export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
export function fetchUser() () => ({
  type: USER_FETCH_REQUESTED,
  payload: {},
})

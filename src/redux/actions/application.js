export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
export function fetchUser() {
  return {
    type: USER_FETCH_REQUESTED,
    payload: {},
  }
}

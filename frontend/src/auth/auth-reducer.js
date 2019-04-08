const USER_KEY = '_mymoney_user';
const INITIAL_STATE = {
  user: JSON.stringify(localStorage.getItem(USER_KEY)),
  validToken: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOKEN_VALIDATED':
      if (action.payload) {
        return { ...state, validToken: true };
      } else {
        localStorage.removeItem(USER_KEY);
        return { ...state, validToken: false, user: null };
      }

    case 'USER_FETCHED':
      localStorage.setItem(USER_KEY, JSON.stringify(action.payload));
      return { ...state, validToken: true, user: action.payload };

    default:
      return state;
  }
};

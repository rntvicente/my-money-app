const INITIAL_STATE = {
  selected: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TAB_SELETED':
      return { ...state, selected: action.payload };

    case 'TAB_SHOWED':
      return { ...state, visible: action.payload };

    default:
      return state;
  }
}

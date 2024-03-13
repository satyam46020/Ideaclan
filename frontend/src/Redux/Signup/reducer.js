import { REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from './actiontypes';

const initialState = {
  user: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default signupReducer;

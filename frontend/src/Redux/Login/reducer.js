import { FETCH_TOKEN_SUCCESS, FETCH_TOKEN_FAILURE } from './actiontypes';

const initialState = {
  token: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
    console.log(state)
  switch (action.type) {
    case FETCH_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: null,
      };
    case FETCH_TOKEN_FAILURE:
      return {
        ...state,
        token: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;

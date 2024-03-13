import axios from 'axios';
import { FETCH_TOKEN_SUCCESS, FETCH_TOKEN_FAILURE } from './actiontypes';

export const loginUser = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/auth/login', formData); 
    const token = response.data.token;
    console.log(token);
    dispatch({
      type: FETCH_TOKEN_SUCCESS,
      payload: token,
    });
  } catch (error) {
    dispatch({
      type: FETCH_TOKEN_FAILURE,
      payload: error.message,
    });
  }
};

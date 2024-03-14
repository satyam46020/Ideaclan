import axios from 'axios';
import { REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from './actiontypes';

export const registerUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('https://ideaclan-6lrr.onrender.com/auth/register', userData); 
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_USER_FAILURE,
      payload: err.response.data,
    });
  }
};
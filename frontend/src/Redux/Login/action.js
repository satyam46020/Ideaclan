import axios from 'axios';
import { FETCH_TOKEN_SUCCESS, FETCH_TOKEN_FAILURE } from './actiontypes';

export const loginUser = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('https://ideaclan-6lrr.onrender.com/auth/login', formData); 
    const data = response.data;
    console.log(data);
    dispatch({
      type: FETCH_TOKEN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_TOKEN_FAILURE,
      payload: error.message,
    });
  }
};

import axios from 'axios';
import {
  FETCH_ADMIN_DASHBOARD_DATA_SUCCESS,
  FETCH_ADMIN_DASHBOARD_DATA_FAILURE,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE
} from './actiontypes';

// Fetch Admin Dashboard Data
export const fetchAdminDashboardData = (token, page = 1, limit = 10) => {
  return async (dispatch) => {
    try {
      const response1 = await axios.get(`https://ideaclan-6lrr.onrender.com/users?page=${page}&limit=${limit}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const response2 = await axios.get('https://ideaclan-6lrr.onrender.com/courses', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      let count = 0;
      let students = [];
      for (let user of response1.data.results) {
        if (user.role === "student") {
          count++;
          students.push(user);
        }
      }

      const total = {
        totalStudents: count,
        totalCourses: response2.data.length,
        students
      };

      dispatch({ type: FETCH_ADMIN_DASHBOARD_DATA_SUCCESS, payload: total });
    } catch (error) {
      dispatch({ type: FETCH_ADMIN_DASHBOARD_DATA_FAILURE, payload: error.message });
    }
  };
};

// Create User
export const createUser = (userData, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://ideaclan-6lrr.onrender.com/users', userData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchAdminDashboardData();

      dispatch({ type: CREATE_USER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: CREATE_USER_FAILURE, payload: error.message });
    }
  };
};

// Update User
export const updateUser = ( updatedUserData, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(`https://ideaclan-6lrr.onrender.com/users/${updatedUserData._id}`, updatedUserData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("updatedata"+ response.data)
      fetchAdminDashboardData();
      dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: UPDATE_USER_FAILURE, payload: error.message });
    }
  };
};

// Delete User
export const deleteUser = (userId, token) => {
  return async (dispatch) => {
    try {
      await axios.delete(`https://ideaclan-6lrr.onrender.com/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchAdminDashboardData();
      dispatch({ type: DELETE_USER_SUCCESS, payload: userId });
    } catch (error) {
      dispatch({ type: DELETE_USER_FAILURE, payload: error.message });
    }
  };
};

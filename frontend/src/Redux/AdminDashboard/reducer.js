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

const initialState = {
  totalStudents: 0,
  totalCourses: 0,
  students: [],
  error: null
};

const adminDashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADMIN_DASHBOARD_DATA_SUCCESS:
      return {
        ...state,
        totalStudents: action.payload.totalStudents,
        totalCourses: action.payload.totalCourses,
        students: action.payload.students,
        error: null
      };
    case FETCH_ADMIN_DASHBOARD_DATA_FAILURE:
      return { ...state, error: action.payload };
    case CREATE_USER_SUCCESS:
      return state;
    case CREATE_USER_FAILURE:
      return { ...state, error: action.payload };
    case UPDATE_USER_SUCCESS:
      return state;
    case UPDATE_USER_FAILURE:
      return { ...state, error: action.payload };
    case DELETE_USER_SUCCESS:
      return state;
    case DELETE_USER_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default adminDashboardReducer;

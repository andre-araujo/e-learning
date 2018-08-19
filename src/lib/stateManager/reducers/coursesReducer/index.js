import {
  CREATE_COURSE,
  GET_COURSES,
} from '../../actions';

const initialState = {
  createCourse: {},
  getCourses: {},
};

function coursesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case (CREATE_COURSE): {
      return {
        ...state,
        createCourse: action.payload,
      };
    }
    case (GET_COURSES): {
      return {
        ...state,
        getCourses: action.payload,
      };
    }
    default:
      return state;
  }
}

export default coursesReducer;

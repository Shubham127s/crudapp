import { GET_EMPLOYEE_ERROR, GET_EMPLOYEE_REQUEST, GET_EMPLOYEE_SUCCESS, VIEW_EMPLOYEE_ERROR, VIEW_EMPLOYEE_REQUEST, VIEW_EMPLOYEE_SUCCESS } from "../Constant/employeeConstant";

const initialState = {
    employeeList: [],
    error: "",
    loading: false,
    viewSingleData: [],
  };

  const employee = (state = initialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_EMPLOYEE_SUCCESS:
      console.log("reducer", action.employeeData);
      return {
        ...state,
        loading: false,
        employeeList: action.employeeData,
      };
    case GET_EMPLOYEE_ERROR:
      return {
        loading: false,
        error: action.err,
      };
      case VIEW_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case VIEW_EMPLOYEE_SUCCESS:
      console.log("reducer view", action.singleValue);
      return {
        ...state,
        loading: false,
        viewSingleData: action.singleValue,
        // count: action.count,
      };
    case VIEW_EMPLOYEE_ERROR:
      return {
        loading: false,
        error: action.err,
      };
      default:
      return state;
    }
  }

  export default employee
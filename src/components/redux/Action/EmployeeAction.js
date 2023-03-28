import { ADD_EMPLOYEE_REQUEST, DELETE_EMPLOYEE_REQUEST, GET_EMPLOYEE_REQUEST, UPDATE_EMPLOYEE_REQUEST, VIEW_EMPLOYEE_REQUEST } from "../Constant/employeeConstant"

export const addEmployee = (data) => {
    console.log("Action",data)
    return{
        type: ADD_EMPLOYEE_REQUEST,
        data
    }
}

export const getEmployee = () => {
    return{
        type: GET_EMPLOYEE_REQUEST
    }
}

export const viewEmployee = (id) => {
    console.log("viewEmployee",id)
    return{
        type: VIEW_EMPLOYEE_REQUEST,
        id
    }
}

export const updateEmployee = (id, data) => {
    return{
        type: UPDATE_EMPLOYEE_REQUEST,
        id,
        data
    }
}

export const deleteEmployee = (id) => {
    return {
      type: DELETE_EMPLOYEE_REQUEST,
      id,
    };
  };
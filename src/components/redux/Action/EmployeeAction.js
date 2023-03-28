import { ADD_EMPLOYEE_REQUEST, GET_EMPLOYEE_REQUEST } from "../Constant/employeeConstant"

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
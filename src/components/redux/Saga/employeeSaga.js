import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_EMPLOYEE_ERROR, ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_SUCCESS, GET_EMPLOYEE_ERROR, GET_EMPLOYEE_REQUEST, GET_EMPLOYEE_SUCCESS } from "../Constant/employeeConstant";
import firebase from '../../../firebase'
import { db } from "../../../firebase";


function setValue(data, obj) {
    console.log("setValue", data, obj);
    const { name, employeeId,  address } = data;
    if (name !== "" && address !== "" && employeeId !== "") {
      obj["name"] = name;
      obj["address"] = address;
      obj["employeeId"] = employeeId;
      return obj;
    }
  }

  function addDatas(data) {
    console.log("data1", data)
    return firebase
      .firestore()
      .collection("Employee")
      .add(data)
      .then((response) => response);
  }

function* addEmployee(values) {
    try{
        const { data } = values;
        let obj = {};
        setValue(data, obj);
        console.log("data:saga", data);
        yield call(addDatas, obj);
        // console.log("value1")
        yield put({ type: ADD_EMPLOYEE_SUCCESS });
    }
    catch(error){
        const err = error.message
        yield put({type: ADD_EMPLOYEE_ERROR, err})
    }
}


async function getEmployeeData() {
  let array = [];
  let list = db.collection("Employee");
  await list.get().then((snapshot) => {
    if (snapshot.empty) {
      return;
    }
    snapshot.forEach((doc) => {
      array.push({ ...doc.data(), id: doc.id });
    });
  });
  return array;
}

function* getEmployee() {
  try{
    const employeeData = yield call(getEmployeeData)
    console.log("employeeData", employeeData)
    yield put({type: GET_EMPLOYEE_SUCCESS, employeeData})
  }
  catch(error){
    const err = error.message
    yield put({type: GET_EMPLOYEE_ERROR, err})
  }
}




export default () => {
    function* watcher() {
        yield takeLatest(ADD_EMPLOYEE_REQUEST, addEmployee)
        yield takeLatest(GET_EMPLOYEE_REQUEST, getEmployee)
    }
    return{watcher};
}
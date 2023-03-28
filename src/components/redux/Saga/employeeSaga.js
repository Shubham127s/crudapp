import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_EMPLOYEE_ERROR, ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_ERROR, DELETE_EMPLOYEE_REQUEST, DELETE_EMPLOYEE_SUCCESS, GET_EMPLOYEE_ERROR, GET_EMPLOYEE_REQUEST, GET_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE_ERROR, UPDATE_EMPLOYEE_REQUEST, VIEW_EMPLOYEE_ERROR, VIEW_EMPLOYEE_REQUEST, VIEW_EMPLOYEE_SUCCESS } from "../Constant/employeeConstant";
import firebase from '../../../firebase'
import { db } from "../../../firebase";
import { doc, deleteDoc } from "firebase/firestore";


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

function viewSingledata(id) {
  console.log("id ", id)
  return firebase
    .firestore()
    .collection("Employee")
    .doc(id)
    .get()
    .then((response) => response);
}

function* viewEmployee(id) {
  console.log("sagaId", id);
  try {
    const singleData = yield call(viewSingledata, id.id);
    const singleValue = singleData.data();
    console.log("singleValue", singleValue);
    yield put({ type: VIEW_EMPLOYEE_SUCCESS, singleValue });
  } catch (error) {
    const err = error.message;
    yield put({ type: VIEW_EMPLOYEE_ERROR, err });
  }
}

function updateDb(id, obj) {
  console.log("sagaId", id, obj);
  return firebase
    .firestore()
    .collection("Employee")
    .doc(id)
    .update(obj)
    .then((response) => response);
}

function* updateEmployee(id) {
  console.log("sagaId", id);
  try {
    let obj = {};
    setValue(id.data, obj);
    console.log("SETVLAUE", obj);
    yield call(updateDb, id.id, obj);
    // yield call(getData);
    // yield put({ type: UPDATE_DATA_SUCCESS, singleValue });
  } catch (error) {
    const err = error.message;
    yield put({ type: UPDATE_EMPLOYEE_ERROR, err });
  }
}

async function deleteValue(id) {
  return await deleteDoc(doc(db, "Employee", id.id));
}

function* deleteEmployee(id) {
  console.log("sagaId", id);
  try {
    yield call(deleteValue, id);
    console.log(id);
    yield put({ type: DELETE_EMPLOYEE_SUCCESS, id });
    yield call(getEmployee);
  } catch (error) {
    console.log(error);
    const err = error.message;
    yield put({ type: DELETE_EMPLOYEE_ERROR, err });
  }
}


export default () => {
    function* watcher() {
        yield takeLatest(ADD_EMPLOYEE_REQUEST, addEmployee)
        yield takeLatest(GET_EMPLOYEE_REQUEST, getEmployee)
        yield takeLatest(VIEW_EMPLOYEE_REQUEST, viewEmployee)
        yield takeLatest(UPDATE_EMPLOYEE_REQUEST, updateEmployee)
        yield takeLatest(DELETE_EMPLOYEE_REQUEST, deleteEmployee)
    }
    return{watcher};
}
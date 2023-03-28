import { fork } from "redux-saga/effects";
import employeeSaga from "./employeeSaga";

export default function* sagas() {
  yield fork(employeeSaga().watcher);
}
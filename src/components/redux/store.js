import { createLogger } from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./Reducer";
import sagas from "./Saga";

const loggerMiddleware = createLogger();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, loggerMiddleware)
);

sagaMiddleware.run(sagas);

export default store;
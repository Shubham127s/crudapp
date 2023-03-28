import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import employee from "./Employee.reducer";

const rootReducer = combineReducers({
  employeeReducer: employee,
  form: reduxFormReducer,
});

export default rootReducer;
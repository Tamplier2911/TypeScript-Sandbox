import { combineReducers } from "redux";

// reducers
import tasksReducer from "./tasks/task.reducer";

const rootReducer = combineReducers({
  tasks: tasksReducer
});

export default rootReducer;

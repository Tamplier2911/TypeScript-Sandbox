import { combineReducers } from "redux";

// reducers
import tasksReducer from "./tasks/task.reducer";
import { Task } from "./tasks/task.actions";

// state interface
export interface StoreState {
  tasks: {
    allTasks: [] | Task[];
    errorMessage: string;
    isLoading: boolean;
  };
}

const rootReducer = combineReducers({
  tasks: tasksReducer
});

export default rootReducer;

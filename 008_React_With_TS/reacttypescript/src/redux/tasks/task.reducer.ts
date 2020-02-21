// import taskTypes, {TaskType} from "./task.types";
import { TaskType } from "./task.types";
import {
  Task,
  FetchTasksSuccessAction,
  FetchTasksFailureAction
} from "./task.actions";

const { FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE } = TaskType;

const INITIAL_STATE = {
  allTasks: [],
  errorMessage: ""
};

const tasksReducer = (
  state = INITIAL_STATE,
  // action: { type: string; payload: object }
  action: FetchTasksSuccessAction | FetchTasksFailureAction
) => {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      return { ...state, allTasks: action.payload, errorMessage: "" };
    case FETCH_TASKS_FAILURE:
      return { ...state, allTasks: [], errorMessage: action.payload };
    default:
      return state;
  }
};

export default tasksReducer;

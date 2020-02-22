// import taskTypes, {TaskType} from "./task.types";
import { TaskType } from "./task.types";
import { DeleteTaskAction, Task } from "./task.actions";
import {
  FetchTasksStartAction,
  FetchTasksSuccessAction,
  FetchTasksFailureAction
} from "./task.actions";

const {
  FETCH_TASKS_START,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  DELETE_TASK
} = TaskType;

const INITIAL_STATE = {
  allTasks: [],
  errorMessage: "",
  isLoading: false
};

export type Action =
  | FetchTasksStartAction
  | FetchTasksSuccessAction
  | FetchTasksFailureAction
  | DeleteTaskAction;

const tasksReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case FETCH_TASKS_START:
      return { ...state, isLoading: true };
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        allTasks: action.payload,
        errorMessage: "",
        isLoading: false
      };
    case FETCH_TASKS_FAILURE:
      return {
        ...state,
        allTasks: [],
        errorMessage: action.payload,
        isLoading: false
      };
    case DELETE_TASK:
      return {
        ...state,
        allTasks: state.allTasks.filter(
          (task: Task) => task.id !== action.payload
        ),
        errorMessage: ""
      };
    default:
      return state;
  }
};

export default tasksReducer;

import axios from "axios";
// import taskTypes, { TaskType } from "./task.types";
import { TaskType } from "./task.types";

import { Dispatch } from "redux";
// import { ThunkDispatch } from "redux-thunk";
// import { AxiosResponse } from "axios";

/*

const {
  FETCH_TASKS_START,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE
} = taskTypes;

*/

export interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface Action {
  type: TaskType;
  payload: Task[] | string;
}

export interface FetchTasksStartAction {
  type: TaskType.FETCH_TASKS_START;
}

export interface FetchTasksSuccessAction {
  type: TaskType.FETCH_TASKS_SUCCESS;
  payload: Task[];
}

export interface FetchTasksFailureAction {
  type: TaskType.FETCH_TASKS_FAILURE;
  payload: string;
}

export interface DeleteTaskAction {
  type: TaskType.DELETE_TASK;
  payload: number;
}

export const deleteTask = (id: number): DeleteTaskAction => ({
  type: TaskType.DELETE_TASK,
  payload: id
});

export const fetchTasksStart = (): FetchTasksStartAction => ({
  type: TaskType.FETCH_TASKS_START
});

export const fetchTasksSuccess = (tasks: Task[]): FetchTasksSuccessAction => ({
  type: TaskType.FETCH_TASKS_SUCCESS,
  payload: tasks
});

export const fetchTasksFailure = (error: string): FetchTasksFailureAction => ({
  type: TaskType.FETCH_TASKS_FAILURE,
  payload: error
});

export const fetchTasksAsync = () => async (dispatch: Dispatch) => {
  dispatch<FetchTasksStartAction>(fetchTasksStart());
  try {
    const res = await axios.get<Task[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );
    dispatch<FetchTasksSuccessAction>(fetchTasksSuccess(res.data));
  } catch (error) {
    dispatch<FetchTasksFailureAction>(fetchTasksFailure(error.message));
  }
};

import "./App.css";
import React, { Component, useEffect } from "react";

import { connect } from "react-redux";
import { fetchTasksAsync, deleteTask, Task } from "./redux/tasks/task.actions";
import { StoreState } from "./redux/root.reducer";

interface AppProps {
  // tasks?: { allTasks: Task[]; errorMessage: string; isLoading: boolean };
  tasks?: { allTasks: Task[]; errorMessage: string; isLoading: boolean };
  fetchTasksAsync?: any;
  deleteTask?: any;
}

const App = (props: AppProps): any => {
  const { tasks, fetchTasksAsync, deleteTask } = props;
  useEffect(() => {
    fetchTasksAsync();
  }, [fetchTasksAsync]);
  const n = 8;
  if (tasks) {
    console.log(tasks.isLoading);
  }
  return (
    <div className="container">
      <h1>Hello TSX</h1>
      <div className="tasks-box">
        <button
          type="button"
          className="tasks-box__button"
          onClick={fetchTasksAsync}
        >
          Fetch Tasks
        </button>
        <div className="tasks-box__tasks">
          {tasks?.allTasks.map((task, i) => {
            const { id, title, completed } = task;
            if (i < n) {
              return (
                <div className="tasks-box__task" key={id}>
                  <div className="tasks-box__task--cnt">
                    <div>Task: {title[0].toUpperCase() + title.slice(1)}.</div>
                    <div>Completed: {completed ? `Yes` : "No"}</div>
                  </div>
                  <div className="tasks-box__task--btn">
                    <button
                      type="button"
                      className="tasks-box__task--btnd"
                      onClick={() => deleteTask(id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <ClassApp />
    </div>
  );
};

interface CLassAppState {
  count: number;
}

class ClassApp extends Component<AppProps, CLassAppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      count: 0
    };
  }

  onIncrementCounter() {
    this.setState({ count: this.state.count + 1 });
  }

  onDecrementCounter() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <div className="counter">
          <button
            type="button"
            className="counter__button"
            onClick={() => this.onDecrementCounter()}
          >
            -
          </button>
          <div className="counter__value">{this.state.count}</div>
          <button
            type="button"
            className="counter__button"
            onClick={() => this.onIncrementCounter()}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (
  state: StoreState
): {
  tasks: { allTasks: Task[] | []; errorMessage: string; isLoading: boolean };
} => {
  return {
    tasks: state.tasks
  };
};

export default connect(mapStateToProps, { fetchTasksAsync, deleteTask })(App);
// export default connect(mapStateToProps, { fetchTasksAsync })(App);
// export default App;

import "./App.css";
import React, { Component } from "react";

import connect from "react-redux";
import { fetchTasksAsync } from "./redux/tasks/task.actions";

interface AppProps {
  color?: string;
}

const App = (props: AppProps): any => {
  // console.log(props);
  return (
    <div className="container">
      <h1>Hello TSX</h1>
      <p>App Component color is: {props.color}</p>
      <ClassApp />
    </div>
  );
};

interface CLassAppState {
  count: number;
}

class ClassApp extends Component<AppProps, CLassAppState> {
  /*
  public state: CLassAppState;
  constructor(props: AppProps) {
    super(props);

    this.state = {
      count: 0
    };
  }
  */

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
        <div>Class component color is: {this.props.color}</div>
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

// const mapStateToProps = state => ({
//   tasks: state.tasks
// });

// export default connect(mapStateToProps, { fetchTasksAsync })(App);
export default App;

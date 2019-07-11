import React, { Component } from "react";
import ReactDOM from "react-dom";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends Component {
  render() {
    return <div>Hello World</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

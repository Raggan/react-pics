import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="inverted circular search link icon" />
          </div>
        </form>
      </div>
    );
  }
}

export default App;

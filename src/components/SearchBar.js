import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
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

export default SearchBar;

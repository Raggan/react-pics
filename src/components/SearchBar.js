import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="ui icon input">
            <input type="text" placeholder="Image Search..." />
            <i className="inverted circular search link icon" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

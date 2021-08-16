import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: this.event.target.value });
  };

  onFormSubmit = event => {
        event.preventDefault();

        //make sure we call call back from parent function
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form"  onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Enter term :</label>
            <input
              type="text"
              val={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

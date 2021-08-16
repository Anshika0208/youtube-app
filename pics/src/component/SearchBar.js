import React from "react";

class SearchBar extends React.Component {
  /*
    onInputChange(event) {
      console.log(event.target.value);
  }
*/
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault(); //stop from reloading webpage upon submitting the form
    this.props.onSubmit(this.state.term); //set user input to term
  }

  render = () => {
    return (
      <div className="ui segment" >
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label>Image Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
          {/*
          <input type="text" onChange={this.onInputChange} />
          alternate way to handle event
          <input type="text" onChange={(event) => console.log(event.target.value)} /> 
          */}
        </form>
      </div>
    );
  };
}

export default SearchBar;

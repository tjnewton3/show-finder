import React from "react";
import {func} from "prop-types";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleSearch = () => {
    this.props.handleSubmit(this.state.input);
  }

  render() {
    return (
      <div className="search-form d-flex">
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
          className="form-control"
        />
        <button className="btn btn-primary add-todo" onClick={this.handleSearch}>
          Search
        </button>
      </div>
    );
  }
}

SearchForm.propTypes = {
  handleSubmit: func.isRequired
};

export default SearchForm

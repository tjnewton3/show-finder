import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/showsActions';
import SearchForm from "../SearchForm";

export class ShowFinder extends React.Component {

  fetchResults = e => {
    this.props.actions.fetchResults(e);
  }

  render() {
    return (
      <SearchForm handleSubmit={this.fetchResults} />
    );
  }
}

ShowFinder.propTypes = {
  actions: PropTypes.object.isRequired,
  shows: PropTypes.array.isRequired,
  searchPhrase: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    shows: state.shows.shows,
    searchPhrase: state.shows.searchPhrase
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowFinder);

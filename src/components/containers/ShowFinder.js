import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/showsActions';
import SearchForm from "../SearchForm";
import ListShows from "../ListShows";

export class ShowFinder extends React.Component {

  fetchResults = e => {
    this.props.actions.fetchResults(e);
  }

  render() {
    return (
      <div>
      <div className="row">
        <div className="col">
          <SearchForm handleSubmit={this.fetchResults} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ListShows shows={this.props.shows.shows} />
        </div>
      </div>
      </div>
    );
  }
}

ShowFinder.propTypes = {
  actions: PropTypes.object.isRequired,
  shows: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    shows: state.shows
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

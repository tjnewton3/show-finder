import React from "react";
import {array} from "prop-types";

class ListShows extends React.Component {

  render() {
    const { shows } = this.props;
    const showsItems = shows && shows.map(s => (
      <div key={s.show.id} className="panel">
        <h3>{s.show.name}</h3>
        <p>{s.show.summary}</p>
      </div>
    ))
    return (
      <div className="list-shows">
        {showsItems}
      </div>
    );
  }
}

ListShows.propTypes = {
  shows: array.isRequired
};

export default ListShows

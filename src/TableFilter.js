import React from 'react';

class TableFilter extends React.Component {
  constructor(props) {
    super(props);

    this.sortBy = this.sortBy.bind(this);
    this.position = this.position.bind(this);
    this.filterValues = this.filterValues.bind(this);
  }

  position(event) {
    this.props.position(event.target.value)
  }

  sortBy(event) {
    this.props.sortBy(event.target.value)
  }

  filterValues(event) {
    this.props.filterValues(event.target.value)
  }

  render() {
    return (
      <div className="table-headers">

        <div className="dropdown sortby">
          <select className="btn btn-secondary dropdown-toggle" name="position" onChange={this.position}>
          <option className="dropdown-item" value="ALL">ALL</option>
            <option className="dropdown-item" value="GK">GK</option>
            <option className="dropdown-item" value="DEF">DEF</option>
            <option className="dropdown-item" value="MID">MID</option>
            <option className="dropdown-item" value="FWD">FWD</option>
          </select>
        </div>

        <div className="dropdown sortby">
          <select className="btn btn-secondary dropdown-toggle" name="sort_by" onChange={this.sortBy}>
            <option className="dropdown-item" value="goals">Goals</option>
            <option className="dropdown-item" value="assists">Assists</option>
            <option className="dropdown-item" value="totalPoints">Total Points</option>
            <option className="dropdown-item" value="clean_sheets">Clean Sheets</option>
            <option className="dropdown-item" value="saves">Saves</option>
            <option className="dropdown-item" value="pp_min">Points per Min</option>
            <option className="dropdown-item" value="pp_mil">Points per Mil</option>
          </select>
        </div>

        <div className="dropdown selector">
          <select className="btn btn-secondary dropdown-toggle" name="per_page" onChange={this.filterValues}>
            <option className="dropdown-item" value="10">10</option>
            <option className="dropdown-item" value="25">25</option>
            <option className="dropdown-item" value="50">50</option>
            <option className="dropdown-item" value="100">100</option>
          </select>
        </div>

      </div>
    );
  }
}

export default TableFilter;

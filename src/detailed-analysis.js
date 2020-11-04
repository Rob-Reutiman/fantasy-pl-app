import React from 'react';
import teamStrings from './team-strings';
import TableFilter from './TableFilter';

class DetailedAnalysis extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: "goals",
      position: "ALL",
      entries_per_page: 10,
      page: 1,
    };
  }

  capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  filterValues(value) {
    this.setState({entries_per_page: value, page: 1});
  }

  render () {
    const positions = ["GK", "DEF", "MID", "FWD"];
    const positionPlayers = this.state.position !== "ALL" ? this.props.players.filter(player => player.position === (positions.indexOf(this.state.position) + 1)) : this.props.players;
    const sorted = positionPlayers.sort((a, b) => b[this.state.filter] - a[this.state.filter]);
    const page_entries = sorted.slice(0, this.state.entries_per_page);

    const tableRows = page_entries.map(player => { return (
      <tr className={"table-row"}>
        <td><img className="thumbnail"src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.code}.png`} alt=""></img></td>
        <td>{player.lastName}</td>
        <td>{teamStrings[player.teamID - 1]}</td>
        <td>{positions[player.position - 1]}</td>
        <td>{player.form}</td>
        <td>{player.totalPoints}</td>
        <td>{player.price + "m"}</td>
        <td>{player.goals}</td>
        <td>{player.assists}</td>
        <td>{player.clean_sheets}</td>
        <td>{player.saves}</td>
        <td>{player.pp_min}</td>
        <td>{player.pp_mil}</td>
      </tr>
    )});

    return (
      <div className="section">

        <h1>Detailed Analysis</h1>

        <div>

        <TableFilter 
          filterValues={(value) => this.filterValues(value)}
          sortBy={(value) => this.setState({filter: value})}
          position={(value) => this.setState({position: value})}
        />

          <table className="table table-hover table-dark">

            <thead>
              <tr className={"table-row"}>
                <th scope="col"></th>
                <th scope="col">Player</th>
                <th scope="col">Team</th>
                <th scope="col">POS</th>
                <th scope="col">Form</th>
                <th scope="col">Total Points</th>
                <th scope="col">Price</th>
                <th scope="col">Goals</th>
                <th scope="col">Assists</th>
                <th scope="col">Clean Sheets</th>
                <th scope="col">Saves</th>
                <th scope="col">Points per Minute</th>
                <th scope="col">Points per Million</th>
              </tr>
            </thead>

            <tbody>
              {tableRows}
            </tbody>

          </table>
        </div>

      </div>
    );
  }
}

export default DetailedAnalysis;
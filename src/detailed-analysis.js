import React from 'react';

class DetailedAnalysis extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: "goals",
      entries_per_page: 20,
      page: 1,
    };
  }

  capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render () {
    console.dir(this.props.players);
    const sorted = this.props.players.sort((a, b) => b[this.state.filter] - a[this.state.filter]);
    const tableRows = sorted.map(player => { return (
      <tr>
        <td><img src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.code}.png`} alt="<player_img>"></img></td>
        <td>{player.firstName}</td>
        <td>{player.lastName}</td>
        <td>{player.teamID}</td>
        <td>{player.price}</td>
        <td>{player[this.state.filter]}</td>
      </tr>
    )});

    return (
      <div className="section">

        <h1>Detailed Analysis</h1>

        <table class="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Team</th>
              <th scope="col">Price</th>
              <th scope="col">{this.capitalizeFirst(this.state.filter)}</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>

      </div>
    );
  }
}

export default DetailedAnalysis;
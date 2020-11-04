import React from 'react';
import teams from './teams.json';

class MyTeam extends React.Component {

  render () {

    const team = teams[this.props.username];

    return(
      <div className="section">

        <h1>My Team</h1>

        <div className="team-row">

        </div>
        <div className="team-row">
          
        </div>
        <div className="team-row">
          
        </div>
        <div className="team-row">
          
        </div>

      </div>
    );
  }
}

export default MyTeam;
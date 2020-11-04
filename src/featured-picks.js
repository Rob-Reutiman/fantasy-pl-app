import React from 'react';
import axios from 'axios';

class FeaturedPicks extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true,
      positions: ["Forward", "Midfielder", "Defender", "Goalkeeper"]
    }
  }

  componentDidMount(){
    this.setState({
      loading: false
    })
  }

  render () {
    return(
      <React.Fragment>
        <div className="section">
          <h1>Featured Picks</h1><br/>
          <div className="card-deck">
            {!this.state.loading ? (this.props.featured.map((p, index) => { return (
              <div className="card">
              <div className="card-header" style={{textAlign: "center"}}>{this.state.positions[index]}</div>
              <img src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${p.code}.png`} className="player-photo" alt=""/>
              <div className="card-body">
                <h5 className="card-title">{p.firstName + " " + p.lastName}</h5>
                {index !== 3 ? <p className="card-text">Goals: {p.goals}</p> : <p className="card-text">Clean Sheets: {p.clean_sheets}</p>}
                {index !== 3 ? <p className="card-text">Assists: {p.assists}</p> : <p className="card-text">Saves: {p.saves}</p>}
              </div>
            </div>
            )})) : (
            <p>loading...</p>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FeaturedPicks;
import React from 'react';
import axios from 'axios';

class FeaturedPicks extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true,
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
            {!this.state.loading ? (this.props.featured.map((p) => { return (
            <div className="card">
              <img src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${p.code}.png`} className="player-photo"/>
              <div className="card-body">
                <h5 className="card-title">{p.firstName + " " + p.lastName}</h5>
                <p className="card-text">Goals: {p.goals}</p>
                <p className="card-text">Assists: {p.assists}</p>
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
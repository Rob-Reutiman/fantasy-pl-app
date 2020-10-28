import React from 'react';
import axios from 'axios';

class FeaturedPicks extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      featured: [],
      loading: true
    }
  }

  /*

  Are we going to update and keep player information locally? 
  Because if so we can make the api call for the players in the main app 
  and pass the players down as props instead of making the api call here

  Where are we going to do the filtering for the featured cards?

  */
  filterForFeatured = () => {

    let top3 = [];

    return top3;
  }

  componentDidMount(){
    axios.get("http://127.0.0.1:53075/players/")
    .then((result) => {
      players = [];
      for p in result.players:
        let player = {
          name: `${p.firstName} ${p.lastName}`,
          teamID: p.teamID,
          position: p.position
        };
        players.append(player);

      let featuredPlayers = this.filterForFeatured(players);

      this.setState({
        featured: players,
        loading: false
      });
    })
  }

  render () {
    return(
      <React.Fragment>
      <h1>Featured Picks</h1><br/>
      {!this.state.loading ? (this.state.featured.map((p) => {
        <div className="section">
          <div class="card-deck">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{p.name}</h5>
                <p class="card-text">{p.position}</p>
                <p class="card-text">{p.teamID}</p>
              </div>
            </div>
          </div>
        </div>
      })) : (
        <p>loading...</p>
      )}
      </React.Fragment>
    );
  }
}

export default FeaturedPicks;
import React from 'react';
import Nav from './nav';
import FeaturedPicks from './featured-picks';
import DetailedAnalysis from './detailed-analysis';
import FixtureDifficultyRanking from './fdr';
import axios from 'axios';
//import Footer from './footer';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "Peems",
      featuredPlayers: []
    }
  }

  componentDidMount(){
    axios.get("http://127.0.0.1:53075/featured/")
    .then((result) => {

      console.log(result.data);
      players = result.data;

      this.setState({
        featured: [players.featured_fwd, players.featured_mid, players.featured_def, players.featured_gkp]
      });
    })
  }

  render () {
    return (
      <React.Fragment>

        <Nav username={this.state.username}/>

        <div className="page-content">

          <FeaturedPicks featured={this.state.featuredPlayers}/>

          <DetailedAnalysis/>

          <FixtureDifficultyRanking/>
      
        </div>

        {/* <Footer/> */}

      </React.Fragment>
    )
  };
}

export default App;

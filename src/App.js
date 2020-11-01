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
    axios.post("http://127.0.0.1:8000/featured/", {
      username: "robo", password: "jeems"
    }).then((result) => {

      console.log("results data: ", result.data);
      this.setState({
        featuredPlayers: [result.data["featured_fwd"], result.data["featured_mid"], result.data["featured_def"], result.data["featured_gkp"]]
      });
    })

    console.log("featured players: ", this.state.featuredPlayers);
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

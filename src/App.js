import React from 'react';
import Nav from './nav';
import FeaturedPicks from './featured-picks';
import DetailedAnalysis from './detailed-analysis';
import FixtureDifficultyRanking from './fdr';
//import Footer from './footer';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "Peems"
    }
  }

  render () {
    return (
      <React.Fragment>

        <Nav username={this.state.username}/>

        <div className="page-content">

          <FeaturedPicks/>

          <DetailedAnalysis/>

          <FixtureDifficultyRanking/>
      
        </div>

        {/* <Footer/> */}

      </React.Fragment>
    )
  };
}

export default App;

import React from 'react';
import axios from 'axios';

class FeaturedPicks extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    this.setState({
      loading: true
    })
  }

  render () {
    return(
      <React.Fragment>
        <div className="section">
          <h1>Featured Picks</h1><br/>
          <div class="card-deck">
            {!this.state.loading ? (this.props.featured.map((p) => { return (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{p.name}</h5>
                <p class="card-text">{p.position}</p>
                <p class="card-text">{p.teamID}</p>
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
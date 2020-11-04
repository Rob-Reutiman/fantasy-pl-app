import React from 'react';
import Nav from './nav';
import FeaturedPicks from './featured-picks';
import DetailedAnalysis from './detailed-analysis';
import FixtureDifficultyRanking from './fdr';
import MyTeam from './myTeam';
import axios from 'axios';
import Footer from './footer';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: true,
      username: "robo",
      password: "jeems",
      featuredPlayers: [],
      playerDetails: []
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleFormInput = this.handleFormInput.bind(this);
   }

   componentDidMount() {
     /* Feature players call */
    axios.post("http://127.0.0.1:8000/featured/", {
      username: this.state.username,
      password: this.state.password
    })
    .then((result) => {

      console.log(result.data);
      console.log("results data: ", result.data);
      this.setState({
        featuredPlayers: [result.data["featured_fwd"], result.data["featured_mid"], result.data["featured_def"], result.data["featured_gkp"]]
      });
    })

    /* Detailed stats call */
    axios.post("http://127.0.0.1:8000/players/", {
      username: this.state.username,
      password: this.state.password
    })
    .then((result) => {
      console.log(result.data);
      let playerDetails = result.data.players;
      this.setState({playerDetails});
    })
   }

  async handleLogin(e){

    e.preventDefault();

    const data = { "username": this.state.username, "password": this.state.password };
    await axios.post("http://127.0.0.1:8000/auth/", data)
    .then((result) => {
      let auth = result.data["result"] === "success";
      this.setState = {
        authenticated: auth
      }
    })

    /* Move componentDidMount() here when done testing */

  }

  async handleFormInput (e){
    e.persist();

    const id = e.target.id;
    const target = e.target.value;

    console.dir(id)
    console.dir(target)

    await this.setState({
      [id]: target,
    });
    console.log(this.state);
  };

  render () {
    return (

      <React.Fragment>

        <Nav username={this.state.username}/>

        {!this.state.authenticated &&

        <div className="section">

          <h1 className="login">Login</h1>

          <div className="container form-container">
            <form>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="username"
                  className="form-control" 
                  id="username" 
                  placeholder="Username" 
                  onChange={this.handleFormInput} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input 
                type="password" 
                className="form-control" 
                id="password" 
                placeholder="Password"
                onChange={this.handleFormInput} />
              </div>
            </form>
          </div>

          <div className="submit">
            <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Submit</button>
          </div>

        </div>

        }
      
        { this.state.authenticated && 

        <React.Fragment>

          <div className="page-content">

            <FeaturedPicks featured={this.state.featuredPlayers}/>

            <DetailedAnalysis players={this.state.playerDetails}/>

            {/* <FixtureDifficultyRanking/> */}

            <MyTeam username={this.state.username}/>
      
          </div>

        </React.Fragment>

        }

        <Footer/>

      </React.Fragment>
    )
  };
}

export default App;

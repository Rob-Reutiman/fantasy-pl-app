import React from 'react';
import axios from 'axios';

class MyTeam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      GKs: ["", ""],
      DEFs: ["", "", "", "", ""],
      MIDs: ["", "", "", "", ""],
      FWDs: ["", "", ""],
    }
  }

  async componentDidMount() {
    setTimeout(async () => {

    
      await axios.post("http://127.0.0.1:8000/myTeam/", {
        username: this.props.username,
      })
      .then((result) => {
        console.dir(result.data)
        this.setState(result.data["team"])
      })

    }, 1000);
  }

  async handleSubmit(e) {
    e.preventDefault();    
  }

  async handleInput(e, index) {
    let temp = this.state;
    let input = e.target;
    const value = e.target.value;
    if(input.name === "keepers") {
      temp.GKs[index] = value;
      this.setState({GKs: temp.GKs});
    } else if(input.name === "defenders") {
      temp.DEFs[index] = value;
      this.setState({DEFs: temp.DEFs});
    } else if(input.name === "midfielders") {
      temp.MIDs[index] = value;
      this.setState({MIDs: temp.MIDs});
    } else if(input.name === "forwards") {
      temp.FWDs[index] = value;
      this.setState({FWDs: temp.FWDs});
    }

    // API save
    await axios.post("http://127.0.0.1:8000/updateTeam/", {
      username: this.props.username,
      team: this.state
    })
    .then((result) => {
      if(result.data["result"] !== "success") return;
        })
  }

  render () {

    console.dir(this.state)

    let totalPrice = 0;

    const keeperOptions = this.props.players.filter(player => player.position === 1).map(player => (
      <option className="dropdown-item" value={player.lastName}>{player.lastName}</option>
    ));
    const defenderOptions = this.props.players.filter(player => player.position === 2).map(player => (
      <option className="dropdown-item" value={player.lastName}>{player.lastName}</option>
    ));
    const midfieldOptions = this.props.players.filter(player => player.position === 3).map(player => (
      <option className="dropdown-item" value={player.lastName}>{player.lastName}</option>
    ));
    const forwardOptions = this.props.players.filter(player => player.position === 4).map(player => (
      <option className="dropdown-item" value={player.lastName}>{player.lastName}</option>
    ));

    const GKs = this.state.GKs.map((value, index) => {
      const player = this.props.players.filter(player => player.position === 1).find(p => p.lastName == this.state.GKs[index]);
      return (
      <div id={"GK" + index} className="player-entry" value={value}>
        {this.state.GKs[index] != "" ? <img className="thumbnail" src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player !== undefined ? player.code : ""}.png`} alt=""></img> : <img></img>}
        <form onSubmit={this.handleSubmit}>
          <input onChange={e => this.handleInput(e, index)} name="keepers" list={"keepers" + index} value={this.state.GKs[index]}/>
          <datalist id={"keepers" + index}>
            {keeperOptions}
          </datalist>
        </form>
      </div>
      )
    });

    const DEFs = this.state.DEFs.map((value, index) => { 

      const player = this.props.players.filter(player => player.position === 2).find(p => p.lastName == this.state.DEFs[index]);
      return (
        <div id={"DEF" + index} className="player-entry" value={value}>
          {this.state.DEFs[index] != "" ? <img className="thumbnail" src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player !== undefined ? player.code : ""}.png`} alt=""></img> : <img></img>}
          <form onSubmit={this.handleSubmit}>
            <input onChange={e => this.handleInput(e, index)} name="defenders" list={"defenders" + index} value={this.state.DEFs[index]}/>
            <datalist id={"defenders" + index}>
              {defenderOptions}
            </datalist>
          </form>
        </div>
      )
    });

    const MIDs = this.state.MIDs.map((value, index) => { 

      const player = this.props.players.filter(player => player.position === 3).find(p => p.lastName == this.state.MIDs[index]);
      return (
      <div id={"MID" + index} className="player-entry" value={value}>
        {this.state.MIDs[index] !== "" ? <img className="thumbnail" src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player !== undefined ? player.code : ""}.png`} alt=""></img> : <img></img>}
        <form onSubmit={this.handleSubmit}>
          <input onChange={e => this.handleInput(e, index)} name="midfielders" list={"midfielders" + index} value={this.state.MIDs[index]}/>
          <datalist id={"midfielders" + index}>
            {midfieldOptions}
          </datalist>
        </form>
      </div>
      )
    });

    const FWDs = this.state.FWDs.map((value, index) => {
      const player = this.props.players.filter(player => player.position === 4).find(p => p.lastName == this.state.FWDs[index]);
      return (
      <div id={"FWD" + index} className="player-entry" value={value}>
        {this.state.FWDs[index] !== "" ? <img className="thumbnail" src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player !== undefined ? player.code : ""}.png`} alt=""></img> : <img></img>}
        <form onSubmit={this.handleSubmit}>
          <input onChange={e => this.handleInput(e, index)} name="forwards" list={"forwards" + index} value={this.state.FWDs[index]}/>
          <datalist id={"forwards" + index}>
            {forwardOptions}
          </datalist>
        </form>
      </div>
      )
    });

    return (
      <div className="section">

        <h1>My Team</h1>

        <div className="team-row">
          {GKs}
        </div>

        <div className="team-row">
          {DEFs}
        </div>

        <div className="team-row">
          {MIDs}
        </div>

        <div className="team-row">
          {FWDs}
        </div>

        {/* <div>
          <h1>Total Price: {totalPrice}</h1>
        </div> */}

      </div>
    );
  }
}

export default MyTeam;
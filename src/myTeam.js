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

  async handleSubmit(e, index) {
    e.preventDefault();

    let temp = this.state;
    let input = e.target.childNodes[0];
    if(input.name === "keepers") {
      temp.GKs[index] = input.value;
      this.setState({GKs: temp.GKs});
    } else if(input.name === "defenders") {
      temp.DEFs[index] = input.value;
      this.setState({DEFs: temp.DEFs});
    } else if(input.name === "midfielders") {
      temp.MIDs[index] = input.value;
      this.setState({MIDs: temp.MIDs});
    } else if(input.name === "forwards") {
      temp.FWDs[index] = input.value;
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

  // Set total price

  }

  render () {

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

    const GKs = this.state.GKs.map((value, index) => (
      <div id={"GK" + index} className="player-entry" value={value}>
        {this.state.GKs[index] != "" ? <img className="thumbnail" src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${this.props.players.filter(player => player.position === 1).find(p => p.lastName == this.state.GKs[index]).code}.png`} alt=""></img> : <img></img>}
        <form onSubmit={e => this.handleSubmit(e, index)}>
          <input name="keepers" list={"keepers" + index}/>
          <datalist id={"keepers" + index}>
            {keeperOptions}
          </datalist>
        </form>
      </div>
    ));

    const DEFs = this.state.DEFs.map((value, index) => (
      <div id={"DEF" + index} className="player-entry" value={value}>
        {this.state.DEFs[index] != "" ? <img className="thumbnail" src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${this.props.players.filter(player => player.position === 2).find(p => p.lastName == this.state.DEFs[index]).code}.png`} alt=""></img> : <img></img>}
        <form onSubmit={e => this.handleSubmit(e, index)}>
          <input name="defenders" list={"defenders" + index}/>
          <datalist id={"defenders" + index}>
            {defenderOptions}
          </datalist>
        </form>
      </div>
    ));

    const MIDs = this.state.MIDs.map((value, index) => (
      <div id={"MID" + index} className="player-entry" value={value}>
        {this.state.MIDs[index] !== "" ? <img className="thumbnail" src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${this.props.players.filter(player => player.position === 3).find(p => p.lastName == this.state.MIDs[index]).code}.png`} alt=""></img> : <img></img>}
        <form onSubmit={e => this.handleSubmit(e, index)}>
          <input name="midfielders" list={"midfielders" + index}/>
          <datalist id={"midfielders" + index}>
            {midfieldOptions}
          </datalist>
        </form>
      </div>
    ));

    const FWDs = this.state.FWDs.map((value, index) => (
      <div id={"FWD" + index} className="player-entry" value={value}>
        {this.state.FWDs[index] !== "" ? <img className="thumbnail" src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${this.props.players.filter(player => player.position === 4).find(p => p.lastName == this.state.FWDs[index]).code}.png`} alt=""></img> : <img></img>}
        <form onSubmit={e => this.handleSubmit(e, index)}>
          <input name="forwards" list={"forwards" + index}/>
          <datalist id={"forwards" + index}>
            {forwardOptions}
          </datalist>
        </form>
      </div>
    ));

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
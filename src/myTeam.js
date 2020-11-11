import React from 'react';

class MyTeam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      GKs: ["", ""],
      DEFs: ["", "", "", "", ""],
      MIDs: ["", "", "", "", ""],
      FWDs: ["", "", ""],
      GK_images: ["", ""],
      DEF_images: ["", "", "", "", ""],
      MID_images: ["", "", "", "", ""],
      FWD_images: ["", "", ""],
    }
  }

  componentDidMount() {
    /* this is still not working */
    const entries = document.querySelectorAll("div[className='player-entry']");
    entries.forEach(entry => entry.addEventListener("focusout", (e) => this.handleSubmit(e)));
  }

  handleSubmit(e, index) {
    // Filter and set codes for images
    console.dir(e.target)
    // Set total price
  }

  render () {

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
        {this.state.GK_images[index] != "" ? <img className="thumbnail" src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${this.state.GK_images[index]}.png`} alt=""></img> : <img></img>}
        <form onSubmit={e => this.handleSubmit(e, index)}>
          <input list={"keepers" + index}/>
          <datalist id={"keepers" + index}>
            {keeperOptions}
          </datalist>
        </form>
      </div>
    ));

    const DEFs = this.state.DEFs.map((value, index) => (
      <div id={"DEF" + index} className="player-entry" value={value}>
        {this.state.DEF_images[index] != "" ? <img className="thumbnail" src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${this.state.DEF_images[index]}.png`} alt=""></img> : <img></img>}
        <form onSubmit={e => this.handleSubmit(e, index)}>
          <input list={"defenders" + index}/>
          <datalist id={"defenders" + index}>
            {defenderOptions}
          </datalist>
        </form>
      </div>
    ));

    const MIDs = this.state.MIDs.map((value, index) => (
      <div id={"MID" + index} className="player-entry" value={value}>
        {this.state.MID_images[index] !== "" ? <img className="thumbnail" src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${this.state.MID_images[index]}.png`} alt=""></img> : <img></img>}
        <form onSubmit={e => this.handleSubmit(e, index)}>
          <input list={"midfielders" + index}/>
          <datalist id={"midfielders" + index}>
            {midfieldOptions}
          </datalist>
        </form>
      </div>
    ));

    const FWDs = this.state.FWDs.map((value, index) => (
      <div id={"FWD" + index} className="player-entry" value={value}>
        {this.state.FWD_images[index] !== "" ? <img className="thumbnail" src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${this.state.FWD_images[index]}.png`} alt=""></img> : <img></img>}
        <form onSubmit={e => this.handleSubmit(e, index)}>
          <input list={"forwards" + index}/>
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

      </div>
    );
  }
}

export default MyTeam;
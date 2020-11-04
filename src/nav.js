import React from 'react';

class Nav extends React.Component {

  render () {
    return(
      <nav className="navbar navigation">
        <span className="brand">Fantasy Premier League Companion</span>
        <span className="right">{this.props.username}</span>
      </nav>
    );
  }
}

export default Nav;
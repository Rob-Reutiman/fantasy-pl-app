import React from 'react';

class Nav extends React.Component {

  render () {
    return(
      <nav class="navbar navbar-expand-lg navigation">
        <span className="brand">Fantasy Premier League Analytics</span>
        <span>{this.props.username}</span>
      </nav>
    );
  }
}

export default Nav;
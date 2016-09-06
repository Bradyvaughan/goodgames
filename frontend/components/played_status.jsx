import React from 'react';

class PlayedStatus extends React.Component {


  constructor(props) {
    super(props);
    this.addToLib = this.addToLib.bind(this);
  }

  addToLib(libName) {
    return () => this.props.specCreate(this.props.currentUser.id,
    libName, this.props.gameId);
  }

  render() {

    let played = "Played?";

    const libs = ["Currently Playing", "Played", "Wanting to Play"];
    if (this.props.game.libraries) {
      this.props.game.libraries.forEach((library) => {
        if (libs.indexOf(library.name) > -1) {
          played = library.name;
        }
      });
      return(
        <section className = "drop-down">
          <span className="button">{played}</span>
          <ul className = "menu">
            <li onClick={this.addToLib("Played")}>Played</li>
            <li onClick={this.addToLib("Currently Playing")}>Currently Playing</li>
            <li onClick={this.addToLib("Wanting to Play")}>Wanting to Play</li>
          </ul>
        </section>
      );
    } else {
      return(
        <span></span>
      );
    }
  }
}


export default PlayedStatus;

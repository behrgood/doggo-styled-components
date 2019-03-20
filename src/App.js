import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppWrapper, AppLogo, AppHeader } from "./styles/app";
import { Button } from "./styles/buttons";

// components
import Doggo from "./components/Doggo";

class App extends Component {
  state = { party: false };

  setParty = bool => {
    this.setState({ party: bool });
  };

  render() {
    const { party } = this.state;

    return (
      <AppWrapper>
        <AppHeader party={party} className="App-header">
          <Doggo />
          <AppLogo src={logo} alt="logo" party={party} />
        </AppHeader>
        <Button onClick={() => this.setParty(true)} primary right>
          🤘
        </Button>
        <Button onClick={() => this.setParty(false)} secondary left>
          ✌️
        </Button>
      </AppWrapper>
    );
  }
}

export default App;

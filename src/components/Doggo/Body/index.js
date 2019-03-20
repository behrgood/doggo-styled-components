import React, { Component } from "react";
// Styles
import { BodyWrapper, Trunk, Paw, Tail } from "./styles";
// Components

class Body extends Component {
  render() {
    return (
      <BodyWrapper>
        <Trunk />
        <Paw left near />
        <Paw right near />
        <Paw left far />
        <Paw right far />
        <Tail />
      </BodyWrapper>
    );
  }
}

export default Body;

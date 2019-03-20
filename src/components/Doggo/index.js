import React, { Component } from "react";
// Containers
import Head from "./Head";
import Body from "./Body";

// Styled Components
import { DoggoWrapper, Collar, CollarTag } from "./styles";

class Doggo extends Component {
  render() {
    return (
      <DoggoWrapper>
        <Head />
        <Collar>
          <CollarTag />
        </Collar>
        <Body />
      </DoggoWrapper>
    );
  }
}

export default Doggo;

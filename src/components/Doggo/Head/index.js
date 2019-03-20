import React, { Component } from "react";
import { HeadWrapper, Eye, Ear, Teef, Nose } from "./styles";

class Head extends Component {
  render() {
    return (
      <HeadWrapper>
        <Eye left />
        <Eye right />
        <Ear left />
        <Ear right />
        <Teef />
        <Nose />
      </HeadWrapper>
    );
  }
}

export default Head;

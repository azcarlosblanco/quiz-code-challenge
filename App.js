import React from "react";
import Home from "./src/screens/home"
import { store } from "./src/redux";
import { Provider } from "react-redux";

export default class App extends React.Component {
  render() {
    return (
        <Home />
    );
  }
}

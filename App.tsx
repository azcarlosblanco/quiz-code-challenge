import React from "react";
import Navigation from "./src/navigation";
import { StoreProvider } from './src/context';

export default class App extends React.Component {
  render() {
    return (
      <StoreProvider>
        <Navigation />
      </StoreProvider>
    );
  }
}

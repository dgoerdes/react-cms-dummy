import React, { Component } from 'react';
import Header from "./components/header/header";
import CmsContainer from "./container-components/cms-container/cms-container";

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <CmsContainer/>
        </div>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar.js';
import Top from './components/Top.js';
import Worldview from './components/Worldview.js';
import Download from './components/Download.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appStyle: {}
    };
  }

  componentDidMount() {
    let docElm = document.documentElement;
    let clientWidth = docElm.clientWidth;
    let clientHeihgt = docElm.clientHeight;

    let style = {
      width: clientWidth,
      height: clientHeihgt
    }

    this.setState({ appStyle: style })
  }

  render() {
    return (
      <div className="App" style={this.state.appStyle}>
        <div className="cover-top" />
        <BrowserRouter>
          <Route path="/" exact component={Top}></Route>
          <Route path="/worldview" component={Worldview}></Route>
          <Route path="/download" component={Download}></Route>
          <Navbar />
        </BrowserRouter>
        <div className="cover-bottom" />
      </div>
    );
  }
}

export default App;

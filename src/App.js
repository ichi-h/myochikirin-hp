import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar.js'
import Top from './components/Top.js'
import Overview from './components/Overview.js'
import Download from './components/Download.js'
import Credit from './components/Credit.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Top}></Route>
        <Route path="/overview" component={Overview}></Route>
        <Route path="/download" component={Download}></Route>
        <Route path="/credit" component={Credit}></Route>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;

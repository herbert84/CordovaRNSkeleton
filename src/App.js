import React, { Component } from 'react';
import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import Home from './screen/Home';
import Roster from './screen/Roster';
import Schedule from './screen/Schedule';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
            <main>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/roster' component={Roster}/>
                <Route path='/schedule' component={Schedule}/>
              </Switch>
          </main>
        </div>
      </HashRouter>
    );
  }
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MasterLayout from './layouts/frontend/MasterLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/" name="Homepage" render={(props) => <MasterLayout {...props} />} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;

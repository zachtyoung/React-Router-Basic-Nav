import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';


const App = () => (
  <Router>
  <div>
    <Navigation />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
  </div>
  </Router>
);

export default App;

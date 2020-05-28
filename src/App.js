import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListeProduits from './components/ListeProduits';
import CreateProduit from './components/CreateProduit';
import ModifierProduit from './components/ModifierProduit';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ListeProduits} />
        <Route exact path="/create" component={CreateProduit} />
        <Route exact path="/update/:id" component={ModifierProduit} />
        <Route exact path="/detail/:id" component={ListeProduits} />
      </Switch>
    </Router>
  );
}

export default App;

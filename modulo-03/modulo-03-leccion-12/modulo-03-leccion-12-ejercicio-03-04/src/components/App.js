import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import Counter from './Counter';
import Relax from './Relax';
import '../stylesheets/App.scss';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Menu} />
      <Route path="/counter" component={Counter} />
      <Route path="/relax" component={Relax} />
    </Switch>
  );
}

export default App;

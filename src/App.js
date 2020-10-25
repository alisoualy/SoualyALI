import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import skill from './componement/skill';
import Home from './componement/Home'
import profil from './componement/profil';
import experience from './componement/experience';
import eductaions from './componement/eductaions';
import portfolios from './componement/portfolios';

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home}></Route>
        <switch>
          <Route path="/skill" component={skill}></Route>
          <Route path="/profil" component={profil}></Route>
          <Route path="/experience" component={experience}></Route>
          <Route path="/educations" component={eductaions}></Route>
          <Route path="/portfolios" component={portfolios}></Route>
        </switch>
      </>
    </Router>
  );
}

export default App;

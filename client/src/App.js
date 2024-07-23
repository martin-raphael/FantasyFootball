// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

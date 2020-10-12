import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { RegisterCertificate } from './components/RegisterCertificate/RegisterCertificate';
import { ViewCertificate } from './components/ViewCertificate/ViewCertificate';
import { ListAuthorities } from './components/ListAuthorities/ListAuthorities';
import { SignCertificate } from './components/SignCertificate/SignCertificate';
import './App.css';
import { NavbarMain } from './components/Navbar/';

function App() {
  return (
    <div className="App">
      <NavbarMain />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/RegisterCertificate" exact component={RegisterCertificate} />
          <Route path="/ViewCertificate" exact component={ViewCertificate} />
          <Route path="/ListAuthorities" exact component={ListAuthorities} />
          <Route path="/SignCertificate" exact component={SignCertificate} />
        </Switch>
 
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { RegisterCertificate } from './components/RegisterCertificate/RegisterCertificate';
import { ViewCertificate } from './components/ViewCertificate/ViewCertificate';
import { ViewCertificate1 } from './components/ViewCertificate1/ViewCertificate1';
import { ListAuthorities } from './components/ListAuthorities/ListAuthorities';
import { SignCertificate } from './components/SignCertificate/SignCertificate';
import './App.css';
import { NavbarMain } from './components/Navbar/';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarMain />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/RegisterCertificate" exact component={RegisterCertificate} />
          <Route path="/ViewCertificate" exact component={ViewCertificate} />
          <Route path="/ViewCertificate/:hash" exact component={ViewCertificate1} />
          <Route path="/ListAuthorities" exact component={ListAuthorities} />
          <Route path="/SignCertificate" exact component={SignCertificate} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

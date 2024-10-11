import * as React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Home';
//pages
import Services from './Component/pages/Services/Services';
import About from './Component/pages/About/About';
import Contect from './Component/pages/contect/Contect';
import Team from './Component/pages/Team/Team';
const pages = ['HOME', 'PAGES', 'PORTFOLIO', 'BLOG', 'ELEMENTS', 'FEATURES'];

function App() {

  return (
    <>
      <div className="w-100">

        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/contect">
              <Contect />
            </Route>
            <Route exact path="/team">
              <Team />
            </Route>
          </Switch>
          <Footer />
        </Router>

        

      </div>
    </>
  );
}

export default App;



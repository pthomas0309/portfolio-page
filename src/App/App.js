import Header from '../Header/Header';
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {

  return (
    <Router>
      <div className="walls">
        <Header />
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Portfolio">
          <Portfolio />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;

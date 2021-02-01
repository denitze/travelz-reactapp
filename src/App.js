import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Destination from "./components/Destination";
import Partner from "./components/Partner";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
    <Navigation />
    <Hero />
    {/* <Hero /> */}
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/destination" component={Destination}/>
    <Route path="/about" component={About}/>
    <Route path="/partner" component={Partner}/>
    {/* <Route path="/destination" exact component={Destination}/>
    <Route path="/about" exact component={About}/>
    <Route path="/partner" component={Partner} /> */}
    </Switch>
    <Footer/>
  </Router>
  );
}

export default App;

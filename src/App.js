import React from 'react';
import {Route} from "react-router-dom"
import './App.css';
import Home from "./components/index";
import CssBaseline from '@material-ui/core/CssBaseline';
import Services from "./components/Services";
import Work from"./components/Work";
import About from"./components/About";
import Contact from"./components/Contact";


function App() {
  return (
    < >
    <CssBaseline/>
    <Route exact path="/" component={Home}/>
    <Route path="/Services" component={Services}/>
    <Route path="/Work" component={Work}/>
    <Route path="/About" component={About}/>
    <Route path="/Contact" component={Contact}/>
    </>
  );
}

export default App;

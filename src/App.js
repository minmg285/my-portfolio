import React from 'react';
import {CssBaseline} from "@material-ui/core"
import Home from "./components/index";
import Resume from "./components/resume";
import {Route} from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <CssBaseline />
        <Route exact path="/" component ={Home} />
        <Route path="/resume" component ={Resume} />
        
    </>
  );
}

export default App;

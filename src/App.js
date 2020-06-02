import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Galerija from "./Galerija";
import About from "./About";
import Footer from "./components/Footer";
import Rooms from "./Reservation";
import Rezervacija from "./Rezervacija";

const App = () => {
  return (
    <Router>
      <div className="App-container">
        <Nav />
        <Switch>
          <Home exact path="/home" Component={Home} />
          <Galerija path="/galerija" Component={Galerija} />
          <About path="/about" Component={About} />
          <Rezervacija path="/rezervacija" Component={Rezervacija} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

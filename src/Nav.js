import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { FaAlignRight } from "react-icons/fa";
import logo from "./images/Labas.JPG";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    console.log("handleTogglas");
    setIsOpen(currentState => !currentState);
  };

  return (
    <nav className="Nav-bar">
      <div className="Main-menu">
        <Link to="/home">
          <img src={logo} id="Logo" />
        </Link>
        <p id="Header-info">Mus rasite - Karaimų g. 43A</p>
        <div id="Main-navigation">
          <ul>
            <Link to="/home">
              <li id="bin">Pagrindinis</li>
            </Link>
            <Link to="/about">
              <li>Apie mus</li>
            </Link>
            <Link className="Link-style" to="/galerija">
              <li>Galerija</li>
            </Link>
          </ul>
        </div>
        <button id="Menu-btn" onClick={handleToggle}>
          <FaAlignRight size={40} />
        </button>
      </div>
      <div className="Meniu-drop">
        <div className={isOpen ? "Meniu-drop-open" : "Meniu-drop-close"}>
          <ul>
            <Link to="/home" onClick={handleToggle}>
              <li>Pagrindinis</li>
            </Link>
            <Link to="/about" onClick={handleToggle}>
              <li>Apie mus</li>
            </Link>
            <Link className="Link-style" to="/galerija" onClick={handleToggle}>
              <li>Galerija</li>
            </Link>
          </ul>
        </div>
        <hr></hr>
      </div>
    </nav>
  );
}

// class NavBar extends Component {

//   state = {
//     isOpen: false
//   };
//   handleToggle = () => {
//     console.log("handleTogglas");
//     this.setState(prevState => {
//       return { isOpen: !prevState.isOpen };
//     });
//   };
//   render() {
//     return (
//       <nav className="NavBar">
//         <ul className="nav-list">
//           <Link className="Link-style" to="/">
//             <li>Home</li>
//           </Link>
//           <Link className="Link-style" to="/galerija">
//             <li>Galerija</li>
//           </Link>
//         </ul>
//         <button className="MeniuButton" onClick={this.handleToggle}>
//           {<MeniuButton />}
//         </button>
//         {this.state.isOpen
//           ? console.log("atidaryta")
//           : console.log("neatidaryta")}
//       </nav>
//     );
//   }
// }

export default NavBar;

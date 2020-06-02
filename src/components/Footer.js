import React from "react";
import { Link } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import MapContainer from "./Maps";

const Styles = {
  position: "static",
  width: "100%",
  height: "100%",
};

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-meniu">
        <div>
          <p id="Adresas">Adresas: Karaimų 43A</p>
        </div>
        <hr></hr>
      </div>
      <div className="Susisiekite">
        <p id="Susisiek">Susisiekite</p>
        <ul>
          <li>SunchaserTrakai@gmail.com</li>
          <li>+370 643 38663</li>
          <li>+370 673 38433</li>
        </ul>
      </div>
      <hr></hr>
      <div className="Sekite">
        <td
          onClick={() =>
            window.open("https://www.instagram.com/sunchaser.trakai/", "_blank")
          }
        >
          <FaInstagram size={40} color={"white"} />
        </td>

        <td
          onClick={() =>
            window.open(
              "https://www.facebook.com/sunchasertrakai/?modal=admin_todo_tour",
              "_blank"
            )
          }
        >
          <FaFacebookSquare size={40} color={"white"} />
        </td>

        <td
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=-MdV_oQ3Jjo", "_blank")
          }
        >
          <FaYoutube size={40} color={"white"} />
        </td>
      </div>
      <div>
        <MapContainer CustomStyle={Styles} />
      </div>
    </footer>
  );
};

export default Footer;

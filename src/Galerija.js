import React from "react";
import Banner from "./components/Banner";
import { Link } from "react-router-dom";

import image1 from "./images/Laivas2.jpg";
import image2 from "./images/MusuLaivai.jpg";
import image3 from "./images/MusuLaivai2.jpg";
import image4 from "./images/Laivas5.jpg";

const Home = () => {
  return (
    <component className="Galery">
      <header>
        <div className="Galerija-header">
          <h3 id="Nepamirstami">Nepamirštami įspūdžiai - garantuoti !</h3>
        </div>
      </header>
      <div className="Galery-images">
        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image4} />
      </div>
      <p id="Ieskantiems">
        Nori pamatyti daugiau ? Sek mus soc. tinkluose Instagram bei Facebook !
      </p>
    </component>
  );
};

export default Home;

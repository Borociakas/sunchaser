import React from "react";

import img1 from "./images/quality.png";
import img2 from "./images/Sofos2.jpg";
import img3 from "./images/Variklis.jpg";

const About = () => {
  return (
    <component className="About">
      <header id="Ieskantiems">Sunchaser - vertinantiems kokybę</header>
      <p>Kodel SunChaser ?</p>
      <div id="Kokybe">
        <p>
          Šis amerikiečių gamintojas - konstrukcijai naudoja tik aukščiausios
          kokybės standartus atitinkančias medžiagas. Laivo konstrukcijai yra
          suteikiama viso gyvenimo garantija.
        </p>
        <img src={img1} />
      </div>
      <hr id="HR" />
      <div id="Komfortas">
        <img src={img2} />
        <p>
          Neprilygstamas komfortas ir švara, naudojami tik aukščiausios kokybės
          odiniai EKO minkštasuoliai.
        </p>
      </div>
      <hr id="HR" />
      <div id="Pazanga">
        <p>
          Nuolatinis tobulėjimas. SunChaser laivuose naudojami galingi ir tylūs
          varikliai, bendradarbiavimas su industrijoje lyderiaujančiais
          gamintojais kaip "Mercury" ir "Evinrude".
        </p>
        <img src={img3} />
      </div>
    </component>
  );
};

export default About;

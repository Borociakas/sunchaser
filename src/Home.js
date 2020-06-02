import React from "react";
import Banner from "./components/Banner";
import { Link } from "react-router-dom";

const images = [
  require("./images/background1.jpg"),
  require("./images/Laivas5.jpg"),
  require("./images/background3.jpg"),
  require("./images/background4.jpg"),
];

export default class Galerija extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };
  }

  componentWillMount() {
    const timeout = () =>
      setTimeout(() => {
        const { index } = this.state;
        if (index !== images.length - 1) this.setState({ index: index + 1 });
        else this.setState({ index: 0 });
        timeout();
      }, 3000);
    timeout();
  }

  render() {
    const { index } = this.state;
    return (
      <component>
        <div className="Gallery-container">
          <Banner title="Pasiplaukiok šiandien !" subtitle="Įvairioms progoms">
            <Link to="/rezervacija" className="btn-primary">
              Rezervacija
            </Link>
          </Banner>
          {images.map((image, i) => (
            <div
              className={`Gallery-background ${
                index === i
                  ? "Gallery-background--active"
                  : "Gallery-background--inactive"
              }`}
              style={{ backgroundImage: `url(${image}` }}
            />
          ))}
        </div>
      </component>
    );
  }
}

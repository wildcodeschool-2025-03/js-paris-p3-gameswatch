import "./Nav.css";
import { Link } from "react-router";
import logo from "../img/logo.svg";
import search from "../img/search.svg";
import sitting from "../img/sitting.svg";
import user from "../img/user.svg";
import MenuBurger from "./MenuBurger";

const News = {
  title: "News",
  list: [
    { title: "GamePc", url: "/Game" },
    { title: "GameXbox", url: "/Game" },
    { title: "GamePlay", url: "/Game" },
  ],
};

const Games = {
  title: "Games",
  list: [
    { title: "GamePc", url: "/Game" },
    { title: "GameXbox", url: "/Game" },
    { title: "GamePlay", url: "/Game" },
  ],
};

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="IntroSite">
        <Link to="/">
          <img className="logoSite" src={logo} alt="logo" />
        </Link>
        <h2 className="TitreNav">
          GAME<span className="WATCH">WATCH</span>
        </h2>
      </div>

      <div className="MenuNav">
        <div className="MenuNews">
          <MenuBurger pagesLevel={News} />
        </div>
        <div className="MenuGame">
          <MenuBurger pagesLevel={Games} />
        </div>
        <Link className="Contact" to="/">
          contact us
        </Link>
      </div>

      <div className="logoNav">
        <Link to="/">
          <img className="logo" src={search} alt="logo" />
        </Link>
        <Link to="/Profile">
          <img className="logo" src={user} alt="logo" />
        </Link>
        <Link to="/">
          <img className="logo" src={sitting} alt="logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

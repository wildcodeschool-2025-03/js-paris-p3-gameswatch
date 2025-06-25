import "./Footer.css";
import { Link } from "react-router";
import logo from "../img/logo.svg";
import github from "../img/network/github.svg";
import insta from "../img/network/insta.svg";
import twiter from "../img/network/twiter.svg";
import youtube from "../img/network/youtube.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-left">
          <Link to="/">
            <img className="logoSite" src={logo} alt="logo" />
          </Link>
          <span className="brand">
            <span className="blue">GAME</span>WATCH
          </span>
        </div>
        <div className="footer-icons">
          <Link to="/">
            <img className="logoFooter" src={insta} alt="logo" />
          </Link>
          <Link to="/">
            <img className="logoFooter" src={twiter} alt="logo" />
          </Link>
          <Link to="/">
            <img className="logoFooter" src={github} alt="logo" />
          </Link>
          <Link to="/">
            <img className="logoFooter" src={youtube} alt="logo" />
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;

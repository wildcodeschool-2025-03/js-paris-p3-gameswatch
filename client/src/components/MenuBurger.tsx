import { useState } from "react";
import { Link } from "react-router";
import ArrowDown from "../img/Pictos/ArrowDown.svg";
import ArrowRight from "../img/Pictos/ArrowRight.svg";
import "./Nav.css";

interface Item {
  title: string;
  url: string;
}

interface MenuBurgerProps {
  pagesLevel: {
    title: string;
    list: Item[];
  };
}

const MenuBurger = ({ pagesLevel }: MenuBurgerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropdown">
      <div
        className="dropdown-header"
        onClick={() => setIsOpen(!isOpen)}
        onKeyUp={() => setIsOpen(!isOpen)}
      >
        <span className="NameBurger">{pagesLevel.title}</span>
        {isOpen ? (
          <img className="arrow" src={ArrowDown} alt="" />
        ) : (
          <img className="arrow" src={ArrowRight} alt="" />
        )}
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {pagesLevel.list.map((item) => (
            <li key={item.title}>
              <Link className="lienList" to={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuBurger;

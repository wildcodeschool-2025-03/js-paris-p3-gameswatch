import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
import Nav from "../components/Nav";
import Nepal from "./../img/NEPAL.webp";
import Ldc from "./../img/PSG 2025.webp";
import MarioBros from "./../img/SUPER_MARIO_BROS.webp";

function Contact() {
  const [buttonText, setButtonText] = useState(["Raf", "Hake", "Solana"]);
  const navigate = useNavigate();

  const handleClick = (index: number) => {
    setButtonText((prev) =>
      prev.map((text, i) =>
        i === index
          ? text === "Cliquez à nouveau"
            ? i === 0
              ? "Raf"
              : i === 1
                ? "Hake"
                : "Solana"
            : "Cliquez à nouveau"
          : text,
      ),
    );
    navigate("/select");
  };

  return (
    <main className="contact-background">
      <Nav />
      <div className="imgBodyContact"> </div>
      <div className="contactUs">
        {/* Mes trois carrés */}
        <div className="Square">
          <img src={Nepal} alt="Nepal" className="SquareImage" />
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className="ClassButton" onClick={() => handleClick(0)}>
            {buttonText[0]}
          </button>
          <p className="lien">Mail :</p>
          <p className="lien">Linkedin :</p>
        </div>
        <div className="Square">
          <img src={Ldc} alt="Ldc" className="SquareImage" />
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className="ClassButton" onClick={() => handleClick(1)}>
            {buttonText[1]}
          </button>
          <p className="lien">Mail : hake92240@gmail.com</p>
          <p className="lien">Linkedin :</p>
        </div>
        <div className="Square">
          <img src={MarioBros} alt="Mario" className="SquareImage" />
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className="ClassButton" onClick={() => handleClick(2)}>
            {buttonText[2]}
          </button>
          <p className="lien">Mail :</p>
          <p className="lien">Linkedin :</p>
        </div>
      </div>
    </main>
  );
}

export default Contact;

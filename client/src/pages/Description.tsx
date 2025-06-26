import "./Description.css";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import gameImage from "../img/lostark-card.jpg";
import backgroundImage from "../img/backgroundark.svg"; // image de fond diagonale
import background from "../img/backgroundHome.svg";

function Description() {
  return (
    <>
      <main className="descriptionContainer">
        <Nav />

        <div
          className="diagonalBackground"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        <div
          className="background"
          style={{ background: `url(${background})` }}
        />

        <div className="foregroundContent">
          <div className="contentWrapper">
            <div className="gameCardLeft">
              <img src={gameImage} alt="Lost Ark" className="gameImage" />
            </div>

            <div className="gameCardRight">
              <h2 className="gameTitle">Lost Ark</h2>
              <div className="platformBadge">Steam</div>

              <div className="actionButtons">
                <button type="button" className="iconButton">
                  👍
                </button>
                <button type="button" className="iconButton">
                  🔗
                </button>
                <Link to="/login">
                  <button type="button" className="buyButton">
                    Acheter
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <section className="aboutSection">
            <h3>À propos</h3>
            <p>
              Embark on an odyssey for the Lost Ark in a vast, vibrant world:
              explore new lands, seek out lost treasures, and test yourself in
              thrilling action combat. Define your fighting style with your
              class and advanced class, and customize your skills, weapons, and
              gear to bring your might to bear as you fight against hordes of
              enemies, colossal bosses, and dark forces seeking the power of the
              Ark in this action-packed...{" "}
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a href="#">Voir plus</a>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

export default Description;

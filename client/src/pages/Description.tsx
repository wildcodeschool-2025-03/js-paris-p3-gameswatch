import "./Description.css";
import Nav from "../components/Nav";
import background from "../img/backgroundHome.svg";
import backgroundImage from "../img/backgroundark.svg"; // image de fond diagonale
import coeur from "../img/coeur.svg";
import gameImage from "../img/lostark-card.jpg";
import pouce from "../img/pouce.svg";

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
                  <img src={coeur} alt="coeur" className="iconImage" />
                  <span className="popup">Ajouter à la wishlist</span>
                </button>
                <button type="button" className="iconButton">
                  <img src={pouce} alt="pouce" className="iconImage" />
                  <span className="popup">Ajouter aux favoris</span>
                </button>
                <a
                  href="https://store.steampowered.com/app/1599340/Lost_Ark/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buyButton"
                >
                  Acheter
                </a>
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
              Ark in this action-packed.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

export default Description;

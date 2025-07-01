import "./Description.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Nav from "../components/Nav";
import background from "../img/backgroundHome.svg";
import coeur from "../img/coeur.svg";
import pouce from "../img/pouce.svg";
import type { VideoGame } from "../types/vite-env";

function Description() {
  const [VideoGame, setVideoGame] = useState<VideoGame>();
  const { id } = useParams();

  useEffect(() => {
    const loadVideoGame = async () => {
      try {
        const response = await fetch(
          `http://localhost:3310/api/videoGames/${id}`,
        );
        if (response.status !== 200) console.error("offre non trouvée");
        else {
          const VideoGame = await response.json();
          setVideoGame(VideoGame);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadVideoGame();
  }, [id]);

  return (
    <>
      <main className="descriptionContainer">
        <Nav />

        <div
          className="diagonalBackground"
          style={{ backgroundImage: `url(${VideoGame?.img})` }}
        />

        <div
          className="background"
          style={{ background: `url(${background})` }}
        />

        <div className="foregroundContent">
          <div className="contentWrapper">
            <div className="gameCardLeft">
              <img src={VideoGame?.img} alt="Lost Ark" className="gameImage" />
            </div>

            <div className="gameCardRight">
              <h2 className="gameTitle">{VideoGame?.name}</h2>
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
                  href={VideoGame?.url}
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

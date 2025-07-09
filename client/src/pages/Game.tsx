import "./Game.css";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Nav from "../components/Nav";
import type { VideoGame } from "../types/vite-env";

function Game() {
  const [VideoGame, setVideoGame] = useState<VideoGame[] | never[]>([]);
  const [SearchBar, setSearchBar] = useState("");

  const loadSearch = async (event: { key: string }) => {
    try {
      if (event.key === "Enter") {
        const response = await fetch(
          `http://localhost:3310/api/videoGames?search=${SearchBar}`,
        );
        if (response.status !== 200) console.error("game non trouvé");
        else {
          const videoGame = await response.json();
          setVideoGame(videoGame);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadVideoGame = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/videoGames");
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
  }, []);

  return (
    <>
      <main className="bodyGame">
        <Nav />
        <div className="searchBar-container">
          <div className="Game-container">
            <input
              onInput={(event) => setSearchBar(event.currentTarget.value)}
              onKeyDown={loadSearch}
              type="text"
              className="searchBar"
              placeholder="recherche"
            />
          </div>
          <div className="gameSearch">
            {VideoGame.map((game) => (
              <Link
                className="gameCub"
                key={game.id}
                to={`/Description/${game.id}`}
              >
                <div className="game-Container">
                  <h1 className="nameGame">{game.name}</h1>
                  <img src={game.img} className="imgGame" alt="" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Game;

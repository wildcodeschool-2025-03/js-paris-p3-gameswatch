import "./Game.css";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import type { VideoGame } from "../types/vite-env";

function Game() {
  const [VideoGame, setVideoGame] = useState<VideoGame[] | never[]>([]);

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
            <input type="text" className="searchBar" placeholder="recherche" />
          </div>
          <div className="gameSearch">
            {VideoGame.map((game) => (
              <div key={game.id} className="game-Container">
                <h1>{game.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Game;

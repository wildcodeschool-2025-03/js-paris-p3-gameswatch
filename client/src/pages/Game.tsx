import "./Game.css";
import { Link } from "react-router";
import Nav from "../components/Nav";

function Game() {
  return (
    <>
      <main className="bodyGame">
        <Nav />
        <div className="searchBar-container">
          <div className="Game-container">
            <input type="text" className="searchBar" placeholder="recherche" />
          </div>

          <Link to="/Description">
            <div className="gameSearch">
              <div className="game-Container"> </div>
              <div className="game-Container"> </div>
              <div className="game-Container"> </div>
              <div className="game-Container"> </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Game;

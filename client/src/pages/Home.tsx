import "./Home.css";
import { Link } from "react-router";
import Nav from "../components/Nav";

function Home() {
  return (
    <>
      <main className="bodyHome">
        <Nav />
        <div className="imgBody"> </div>
        <div className="titreBtnLogin">
          <h1 className="TitreHome">Improve your gaming experience</h1>

          <Link to="/Login">
            <button type="button" className="buttonLogin">
              Login
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Home;

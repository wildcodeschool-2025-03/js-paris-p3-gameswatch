import "./Sitting.css";
import CrossSitting from "../assets/images/CrossSitting.svg";

function Sitting() {
  return (
    <>
      <div className="rectangle">
        <div className="subrectangle" />
        <div className="subrectangle right">
          <button type="button" className="modifier">
            modifier le profil
          </button>

          <button type="button" className="deconnect">
            déconnexion
          </button>
        </div>

        <div className="trait" />

        <img className="crossitting" src={CrossSitting} alt="Cross" />
      </div>
    </>
  );
}

export default Sitting;

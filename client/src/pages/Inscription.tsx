import "./Inscription.css";
import Nav from "../components/Nav";

function Inscription() {
  return (
    <>
      <main className="bodyInscription">
        <Nav />
        <div className="pageI">
          <div className="inscriptionContainer">
            <h2 className="titreInscription">Inscription :</h2>
            <article className="articleI">
              <h3 className="titreI">name</h3>
              <input
                className="inputInscription"
                type="name"
                placeholder="name"
              />
            </article>
            <article className="articleI">
              <h3 className="titreI">age</h3>
              <input
                className="inputInscription"
                type="age"
                placeholder="age"
              />
            </article>
            <article className="articleI">
              <h3 className="titreI">portable</h3>
              <input
                className="inputInscription"
                type="portable"
                placeholder="portable"
              />
            </article>
            <article className="articleI">
              <h3 className="titreI">email</h3>
              <input
                className="inputInscription"
                type="email"
                placeholder="email"
              />
            </article>
            <article className="articleI">
              <h3 className="titreI">password</h3>
              <input
                className="inputInscription"
                type="password"
                placeholder="password"
              />
            </article>
            <article className="articleI">
              <h3 className="titreI">confirm password</h3>
              <input
                className="inputInscription"
                type="password"
                placeholder="password"
              />
            </article>
          </div>
          <div>
            <button className="comfirmBtn" type="button">
              confirm
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Inscription;

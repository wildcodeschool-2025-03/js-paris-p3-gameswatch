import "./Profile.css";
import Nav from "../components/Nav";

function Profile() {
  return (
    <>
      <main className="bodyProfile">
        <Nav />
        <div className="profileMain">
          <div className="profileContainer">
            <div className="containerContain">
              <h3 className="containerTitle">Profile</h3>
              <div className="profileInformation">
                <div className="profileImg"> </div>
                <div className="line"> </div>
                <div className="descContainer">
                  <h3>solana</h3>
                  <h3>21</h3>
                  <h3>developper web</h3>
                  <h2>description : </h2>
                </div>
              </div>
              <div className="detailInformation"> </div>
            </div>
          </div>
          <div className="bibliContainer">
            <h3 className="containerTitle">Bibliotheque</h3>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;

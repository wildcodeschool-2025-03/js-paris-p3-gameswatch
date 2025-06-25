import "./Login.css";
import { Link } from "react-router";
import Nav from "../components/Nav";

function Login() {
  return (
    <>
      <main className="bodyLogin">
        <Nav />
        <div className="imgBodyLogin"> </div>
        <div className="caseLogin">
          <div className="userBtn">
            <input className="inputField" type="email" placeholder="email" />
            <input
              className="inputField"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="userLogin">
            <div className="remember-container">
              <input type="checkbox" />
              <h3 className="remember">remember me</h3>
            </div>
            <Link to="/Inscription">
              <button id="createBtn" className="loginBtn" type="button">
                create account
              </button>
            </Link>
            <button id="LogBtn" className="loginBtn" type="button">
              login
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;

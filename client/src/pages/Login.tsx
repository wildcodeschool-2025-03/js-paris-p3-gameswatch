import "./Login.css";
import { useRef } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Nav from "../components/Nav";
import { useUser } from "../contexts/user.context";

function Login() {
  const navigate = useNavigate();
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const { setUser } = useUser();

  const login = async () => {
    try {
      const fetchOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.current?.value,
          password: password.current?.value,
        }),
      };
      const reponse = await fetch(
        "http://localhost:3310/api/users/login",
        fetchOptions,
      );
      if (!reponse.ok) toast.warning("identifiants incrorrects.");
      else {
        const { userWithoutPassword, token } = await reponse.json();
        toast.success("vous etes bien connecter.");
        const user = userWithoutPassword;
        user.token = token;
        setUser(user);
        navigate("/Profile");
      }
    } catch (error) {
      console.error(error);
      toast.error("une erreur est survenue");
    }
  };

  return (
    <>
      <main className="bodyLogin">
        <Nav />
        <div className="imgBodyLogin"> </div>
        <div className="caseLogin">
          <div className="userBtn">
            <input
              ref={email}
              className="inputField"
              type="email"
              placeholder="email"
            />
            <input
              ref={password}
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
            <button
              onClick={login}
              id="LogBtn"
              className="loginBtn"
              type="button"
            >
              login
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;

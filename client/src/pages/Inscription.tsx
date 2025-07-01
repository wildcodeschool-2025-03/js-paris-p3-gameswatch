import "./Inscription.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Nav from "../components/Nav";

export default function Register() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const age = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const portable = useRef<HTMLInputElement>(null);

  const register = async () => {
    try {
      const fetchOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          age: age.current?.value,
          email: email.current?.value,
          password: password.current?.value,
          portable: portable.current?.value,
        }),
      };
      const response = await fetch(
        "http://localhost:3310/api/users",
        fetchOptions,
      );
      if (response.ok) {
        toast.success("votre inscription a bien été prise en compte");
        navigate("/Login");
      } else {
        const errorMessage = await response.json();
        toast.warning(errorMessage);
      }
    } catch (error) {
      console.error(error);
      toast.error("une erreur est survenue");
    }
  };

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
                onChange={(event) => setname(event.target.value)}
                className="inputInscription"
                type="name"
                placeholder="name"
              />
            </article>
            <article className="articleI">
              <h3 className="titreI">age</h3>
              <input
                ref={age}
                className="inputInscription"
                type="age"
                placeholder="age"
              />
            </article>
            <article className="articleI">
              <h3 className="titreI">portable</h3>
              <input
                ref={portable}
                className="inputInscription"
                type="portable"
                placeholder="portable"
              />
            </article>
            <article className="articleI">
              <h3 className="titreI">email</h3>
              <input
                ref={email}
                className="inputInscription"
                type="email"
                placeholder="email"
              />
            </article>
            <article className="articleI">
              <h3 className="titreI">password</h3>
              <input
                ref={password}
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
            <button onClick={register} className="comfirmBtn" type="button">
              confirm
            </button>
            <button
              onClick={() => navigate("/Login")}
              className="comfirmBtn"
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

import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  const [isBeginner, setIsBeginner] = useState(true);
  return (
    <>
      <Nav />
      <Outlet context={{ isBeginner, setIsBeginner }} />
      <Footer />
    </>
  );
}

export default App;

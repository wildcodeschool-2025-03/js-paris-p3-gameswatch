import "./App.css";
import { useState } from "react";
import { Link, Outlet } from "react-router";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  const [isBeginner, setIsBeginner] = useState(true);
  return (
    <>
      <Outlet context={{ isBeginner, setIsBeginner }} />
      <Footer />
    </>
  );
}

export default App;

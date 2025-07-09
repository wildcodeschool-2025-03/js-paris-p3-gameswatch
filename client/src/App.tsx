import "./App.css";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import MouseTrail from "./components/MouseTrail";

function App() {
  return (
    <>
      <MouseTrail />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

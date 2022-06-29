import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "./index";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "./components/Loader";
function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }
  return (
    <BrowserRouter>
      <NavbarComponent />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

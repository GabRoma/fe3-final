import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <nav className={state.theme}>
      <Link to="/">Home</Link>
      <Link to="/favs">Favorites</Link>
      <Link to="/contact">Contact</Link>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Change Theme
      </button>
    </nav>
  );
};

export default Navbar;
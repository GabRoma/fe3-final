import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./utils/global.context";

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const isDarkTheme = state.theme === 'dark';

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkTheme ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={`../images/logo-dh-${isDarkTheme ? 'wh' : 'bk'}.png`} alt="logo" style={{ height: "5rem" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favs">
                Favorites
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <button
            className="btn btn-outline-secondary ms-auto"
            onClick={() => dispatch({ type: "TOGGLE_THEME" })}
          >
            <img src={`../images/${isDarkTheme ? 'light' : 'dark'}.png`} alt="theme toggle icon" style={{ height: "2rem" }} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
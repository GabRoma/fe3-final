import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./utils/global.context";

const Card = ({ dentist }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const [isFav, setIsFav] = useState(false);
  const isDarkTheme = state.theme === 'dark';

  useEffect(() => {
    setIsFav(state.favs.some(fav => fav.id === dentist.id));
  }, [state.favs, dentist.id]);

  const toggleFav = () => {
    if (isFav) {
      dispatch({ type: "REMOVE_FAV", payload: dentist.id });
    } else {
      dispatch({ type: "ADD_FAV", payload: dentist });
    }
    setIsFav(!isFav);
  };

  return (
    <div className={`card ${isDarkTheme ? 'card-dark' : 'card-light'}`} style={{ height: "100%" }}>
      <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
        <Link to={`/dentist/${dentist.id}`}>
          <img 
            src={`../images/dentists/${dentist.id}.jpg`} 
            alt={`../images/doctor.jpg`} 
            style={{ width: "100%", height: "auto" }} 
          />
          <h4>{dentist.name}</h4>
          <p>{dentist.username}</p>
        </Link>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
          <Link to={`/dentist/${dentist.id}`} className={`btn btn-outline-danger ${isDarkTheme ? 'btn-outline-dark' : ''}`}>
            View Details
          </Link>
          <button className={`btn btn-outline-secondary ${isDarkTheme ? 'btn-outline-dark' : ''}`} onClick={toggleFav}>
            {isFav ? "★" : "✰"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
import React, { useContext } from "react";
import { GlobalContext } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Favs = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <div className={`favs ${state.theme}`}>
      <div className="favs-header">
        <h1>Favorite Dentists</h1>
        {state.favs.length > 0 && (
          <button className="btn btn-danger" onClick={() => dispatch({ type: "CLEAR_FAVS" })}>
            Clear Favorites
          </button>
        )}
      </div>
      <div className="card-grid">
        {state.favs.length > 0 ? (
          state.favs.map((fav) => <Card key={fav.id} dentist={fav} />)
        ) : (
          <p>No favorite dentists added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;

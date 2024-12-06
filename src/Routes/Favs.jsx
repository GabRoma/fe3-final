import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Card from "../Components/Card";

const Favs = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <div className={`favs ${state.theme}`}>
      <h1>Favorite Dentists</h1>
      <div className="card-grid">
        {state.favs.length > 0 ? (
          state.favs.map((fav) => <Card key={fav.id} dentist={fav} />)
        ) : (
          <p>No favorite dentists added yet.</p>
        )}
      </div>
      {state.favs.length > 0 && (
        <div className="actions">
          <button onClick={() => dispatch({ type: "CLEAR_FAVS" })}>
            Clear Favorites
          </button>
        </div>
      )}
    </div>
  );
};

export default Favs;

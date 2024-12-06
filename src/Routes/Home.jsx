import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Card from "../Components/Card";

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_DENTISTS", payload: data }));
  }, [dispatch]);

  return (
    <div className={`home ${state.theme}`}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </div>
  );
};

export default Home;

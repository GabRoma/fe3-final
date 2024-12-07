import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_DENTISTS", payload: data }));
  }, [dispatch]);

  return (
    <div className={`container mt-4 ${state.theme}`}>
      <h1 className="text-center mb-4">Our Dentists</h1>
      <div className="row row-cols-md-5 row-cols-1">
        {state.dentists.map((dentist, index) => (
          <div className="col mb-5" key={index}>
            <Card dentist={dentist} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

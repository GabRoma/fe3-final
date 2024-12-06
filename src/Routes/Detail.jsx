import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setDentist(data));
  }, [id]);

  return (
    <div className="detail">
      {dentist ? (
        <>
          <h1>Dentist Detail</h1>
          <p><strong>Name:</strong> {dentist.name}</p>
          <p><strong>Email:</strong> {dentist.email}</p>
          <p><strong>Phone:</strong> {dentist.phone}</p>
          <p><strong>Website:</strong> {dentist.website}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;

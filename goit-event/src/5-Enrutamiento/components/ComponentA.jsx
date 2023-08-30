import React from "react";
import { Link } from "react-router-dom";

export const ComponentA = () => {
  const dataUser = {
    user: "Oso91",
    email: "oso91@gmail.com",
  };

  const btnHandler = (e) => {
    console.log(e)
  } 

  return (
    <Link to={"/login"} state={dataUser}>
      <button onClick={btnHandler} className="btn btn-outline-primary">Pasar dataUser</button>
    </Link>
  );
};

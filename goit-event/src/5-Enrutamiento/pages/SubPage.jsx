import React from "react";
import { useLocation } from "react-router-dom";

const SubPage = () => {
  const location = useLocation();
  console.log("location: ", location.state)
  const dataUser = location.state?.dataUser;

  return (
    <div>
      <h3>SubPage</h3>
      <p>User: {dataUser?.user}</p>
      <p>Email: {dataUser?.email}</p>
    </div>
  );
};

export default SubPage;

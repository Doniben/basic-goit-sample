import React from "react";
import { useNavigate } from "react-router-dom";

export const ComponentA = () => {
  const dataUser = {
    user: "Oso91",
    email: "oso91@gmail.com",
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/login/subpage', { state: { dataUser } });
  };

  return (
    <button 
      onClick={handleButtonClick}
      className="btn btn-outline-primary">
      Pasar dataUser
    </button>
  );
};

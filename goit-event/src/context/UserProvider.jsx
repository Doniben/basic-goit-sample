import { useContext } from "react";
import { UserContext } from "./UserContext";

const user = {
  name: "Doniben",
  id: "12",
  role: "student",
};

export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={user}>
    {children}
  </UserContext.Provider>;
};

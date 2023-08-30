import React, { useContext } from "react";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { ComponentA } from "../components/componentA";
import SubPage from "./Subpage";

const LoginPage = (props) => {
  const [searchParams] = useSearchParams();
  const location = useLocation()
  console.log("location: ", location.state)
  const userContextData = useContext(UserContext);
  const email = searchParams.get("email");
  const password = searchParams.get("password");
  const role = searchParams.get("role");

  return (
    <div>
      <h2>LoginPage</h2>
      <ComponentA />
      { location.state ?
      <SubPage/> :
      ''}
      <p>email: {email}</p>
      <p>password: {password}</p>
      <p>role: {role}</p>
      <hr />
      <p>contextname: {userContextData.name}</p>
      <p>contextid: {userContextData.id}</p>
      <p>contextrole: {userContextData.role}</p>
    </div>
  );
};

export default LoginPage;


import React from "react";
import { Routes, Route, Link, Router } from 'react-router-dom'
import Error404 from "./pages/Error404";
import LandingPage from "./pages/LandingPage";
import UserDashboard from "./pages/UserDashboard";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";


const RouteApp = () => {
  return <div>
    <Navbar />
    <hr />
    <Routes>
      <Route path="/" element={ <LandingPage /> }/>
      <Route path="login" element={ <LoginPage /> } />
      <Route path="user/:role_code/:id">
        <Route path="dashboard"  element={ <UserDashboard /> } />
      </Route>
      <Route path="user-dashboard" element={ <UserDashboard /> }/>
      <Route path="user-dashboard" element={ <UserDashboard /> } />
      <Route path="/*" element={ <Error404 /> } />
    </Routes>
  </div>;
};

export default RouteApp;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import HomePage from "./Homepage";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  // Log user's names to the console
  if (loggedInUser) {
    console.log(
      `Logged in user: ${loggedInUser.firstName} ${loggedInUser.lastName}`
    );
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;

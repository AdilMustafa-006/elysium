import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signup/SignUp";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";


function App() {
  return (
    <div>
       <Routes>
        <Route path="/"  element={ <SignIn/>}/>
        <Route path="/signup"  element={ <SignUp/>}/>
        <Route path="/forgotpassword"  element={ <ForgotPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;

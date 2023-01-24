import logo from "./logo.svg";
import "./App.css";
import React from "react";
import './Dashboard.css';
import {Route, Routes } from "react-router-dom";
import { Dashboard } from "./dashboard/Dashboard";
import { ButtonsComp } from "./pages/ButtonsComp";
import { CardsComp } from "./pages/CardsComp";
import { ColorsComp } from "./pages/ColorsComp";
import { BorderComp } from "./pages/BorderComp";
import { AnimationComp } from "./pages//AnimationComp";

import { TableComp } from "./pages/TableComp";
import { LoginComp } from "./pages/LoginComp";
import { RegisterComp } from "./pages/RegisterComp";
import { ForgetPasswordComp } from "./pages/ForgetPasswordComp";
import { NotFoundComp } from "./pages/NotFoundComp";
import { BlankPageComp } from "./pages/BlankPageComp";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/buttons' element={<ButtonsComp />}></Route>
        <Route path='/cards' element={<CardsComp />}></Route>
        <Route path='/colors' element={<ColorsComp />}></Route>
        <Route path='/border' element={<BorderComp />}></Route>
        <Route path='/animation' element={<AnimationComp />}></Route>
        <Route path='/tables' element={<TableComp />}></Route>
        <Route path='/login' element={<LoginComp />}></Route>
        <Route path='/register' element={<RegisterComp />}></Route>
        <Route path='/forgotpassword' element={<ForgetPasswordComp />}></Route>
        <Route path='/404' element={<NotFoundComp />}></Route>
        <Route path='/blank' element={<BlankPageComp />}></Route>
      </Routes>
    </div>
  );
}

export default App;

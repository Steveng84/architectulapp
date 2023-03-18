import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./app/features/profile/View";
import Home from "./app/features/home/View";
import Product from "./app/features/product/View";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" Component={Profile} />

        <Route path="/home" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

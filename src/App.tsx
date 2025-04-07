import React from "react";
import "./styles/index.scss";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  console.log(
    "API URL:",
    process.env.REACT_APP_API_URL,
    "ENV:",
    process.env.REACT_APP_ENV
  );
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import About from "../components/About";

import { Routes, Route } from 'react-router-dom';

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<About />}/>
      </Routes>
    </>
  );
};

export default Routers;

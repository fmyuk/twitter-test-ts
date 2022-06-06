import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { SendContainer } from "./containers/SendContainer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/twitter" element={<SendContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
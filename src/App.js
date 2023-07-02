import React from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout/Layout";
import Request from "./screen/Request";
import Home from "./screen/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="request" element={<Request />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

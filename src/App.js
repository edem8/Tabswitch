import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//style imports
import "./App.css";

//component imports
import Layout from "./routeLayouts/Layout";
import Home from "./screens/Home";
import Shop from "./screens/Shop";
import Tips from "./screens/Tips";
import Journey from "./screens/Journey";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="care" element={<Tips />} />
      <Route path="journey" element={<Journey />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

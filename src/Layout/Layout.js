import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../screen/Logo";

const gif = new URL("../../images/arrow.gif", import.meta.url);

function Layout() {
  return (
    <>
      <div className="layout_container">
        <div className="child1">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>

        <img src={gif} alt="" />
        
        <div className="child2">
          <NavLink to="request" >REQUEST</NavLink>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

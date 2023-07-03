import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../screen/Logo";

const gif = new URL("../../images/arrow.gif", import.meta.url);

function Layout() {
    const [text, setText] = useState("REQUEST");

    const handler = () => {
        setText(" ..HOME.. ")
    }
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
          <NavLink to="request" onClick={handler}>{text}</NavLink>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

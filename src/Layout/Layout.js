import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../screen/Logo";
import TabSwitch from "../component/TabSwitch";

const gif = new URL("../../images/arrow.gif", import.meta.url);

function Layout() {
  return (
    <>
      <div className="layout_container">
        <div className="child1">
          <Logo />
        </div>

        <img src={gif} alt="" />

        <div className="child2">
          <TabSwitch />
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

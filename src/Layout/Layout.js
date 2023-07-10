import React from "react";
import { Outlet } from "react-router-dom";
import TabSwitch from "../component/TabSwitch";

const gif = new URL("../../images/arrow.gif", import.meta.url);

function Layout() {
  return (
    <>
      <div className="layout_container">

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

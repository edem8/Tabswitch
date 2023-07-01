import { NavLink, Outlet } from "react-router-dom";
import "../App.css";

function Layout() {
  return (
    <div className="layout">
      <header>
        <nav>
          <h2>LUXXSIDE.CO</h2>
          <NavLink to="/"> HOME</NavLink>
          <NavLink to="shop"> SHOP NOW</NavLink>
          <NavLink to="care"> CANDLE CARE</NavLink>
          <NavLink to="journey"> JOURNEY</NavLink>
        </nav>
      </header>


      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

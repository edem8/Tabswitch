import { NavLink, Outlet } from "react-router-dom";
import "../App.css";

function Layout() {
  return (
    <div className="layout">
      <div>
        <header>
          <nav>
            <h2>LUXXSIDE.CO</h2>
            <NavLink to="/"> HOME</NavLink>
            <NavLink to="journey"> JOURNEY</NavLink>
            <NavLink to="shop"> SHOP NOW</NavLink>
            <NavLink to="care"> CANDLE CARE</NavLink>
          </nav>
        </header>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

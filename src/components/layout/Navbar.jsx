import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {

    // View -------------------------------------
    return (
        <nav> 
        <div className='navItem'>
          <NavLink to="/">Home</NavLink>
        </div>

        <div className='navItem'>
          <NavLink to="/modules">Modules</NavLink>
        </div>

        <div className='navItem'>
          <NavLink to="/students">Coursemates</NavLink>
        </div>

        <div className='navItem'>
          <NavLink to="/favourites">Favourites</NavLink>
        </div>


      </nav>
    );
}

export default Navbar;
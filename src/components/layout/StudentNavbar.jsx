import { NavLink } from "react-router-dom";
import "./StudentNavbar.scss";

function StudentNavbar() {
  // Initialisation ------------------------------
  // State ---------------------------------------
  // Handlers ------------------------------------
  // View -------------------------------------
  return (
    <nav> 

      <div className='navItem'>
        <NavLink to="/students">Coursemates</NavLink>
      </div>

      <div className='navItem'>
        <NavLink to="/modules">Modules</NavLink>
      </div>

      <div className='navItem'>
        <NavLink to="/groupassessments">Group Assessments</NavLink>
      </div>

      <div className='logOut'>
        <NavLink to="/">Log out</NavLink>
      </div>


    </nav>
  );
}

export default StudentNavbar;
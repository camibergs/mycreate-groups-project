import { NavLink } from "react-router-dom";
import "./LecturerNavbar.scss";

function LecturerNavbar() {
  // Initialisation ------------------------------
  // State ---------------------------------------
  // Handlers ------------------------------------
  // View -------------------------------------
  return (
    <nav> 

      <div className='navItem'>
        <NavLink to="/lecturerview">Assessments</NavLink>
      </div>

      <div className='logOut'>
        <NavLink to="/">Log out</NavLink>
      </div>


    </nav>
  );
}

export default LecturerNavbar;
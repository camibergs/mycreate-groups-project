import PropTypes from "prop-types";
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './Layout.scss';

function Layout(props) {
  // Initialisation ------------------------------
  // State ---------------------------------------
  // Handlers ------------------------------------
  // View -------------------------------------
  return (
    <div className="layout">
      <Header loggedInUser={props.loggedInUser} />
      <Navbar />
      <main>{props.children}</main>
      <Footer /> 
    </div>
  );
}

Layout.propTypes = {
  loggedInUser: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Layout;

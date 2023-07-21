import './header.scss';

function Header(props) {
  
  // View -------------------------------------
  return (
     <header>
        <h1>Creating Groups</h1>
        <p className="welcome">Welcome {props.loggedInUser}</p>
      </header>
    );
}

export default Header;
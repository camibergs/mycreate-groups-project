import PropTypes from 'prop-types';
import { Card } from '../../UI/Card.jsx';
import './UserCard.scss';

function UserCard({ user, children }) {
  // Initialisation ------------------------------
  // State ---------------------------------------
  // Handlers ------------------------------------
  // View ----------------------------------------
  return (
    <div className= 'studentCard'>
      <Card>
          <p>{user.UserEmail.substring(0,8)}</p>
          <p>{`${user.UserFirstname} ${user.UserLastname}`}</p>
          <img src={user.UserImageURL} alt={user.UserEmail.substring(0,8)} />
          <p>{user.UserAffinityID}</p>
          {children}
      </Card>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    UserEmail: PropTypes.string.isRequired,
    UserFirstname: PropTypes.string.isRequired,
    UserLastname: PropTypes.string.isRequired,
    UserImageURL: PropTypes.string.isRequired,
    UserAffinityID: PropTypes.string.isRequired,
  }),
};

UserCard.propTypes = {
  children: PropTypes.node,
};



export default UserCard;
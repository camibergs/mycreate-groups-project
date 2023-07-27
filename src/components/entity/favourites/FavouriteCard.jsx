import PropTypes from 'prop-types';
import './FavouriteCard.scss';

function FavouriteCard({user}) {
  // Initialisation ------------------------------

  // State ---------------------------------------

  // Handlers ------------------------------------
  const handleLikes = () => {
  };

  const handleDislikes = () => {
  };

  const handleReset = () => {
  };
  
  // View ----------------------------------------
  const buttonLike = <button>Like</button>;
  const buttonDislike = <button>Dislike</button>;
  const buttonReset = <button>Reset</button>;

  let buttons = null;
  switch (user.UserAffinityID) {
    case 0:
      buttons = <>{buttonLike}{buttonDislike}</>;
      break;
    case 1:
      buttons = <>{buttonDislike}{buttonReset}</>;
      break;
    case 2:
      buttons = <>{buttonLike}{buttonReset}</>;
      break;
  }

  return (
    <div className= 'favouriteCard'>
      {buttons}
    </div>
  );
}
  
FavouriteCard.propTypes = {
  user: PropTypes.shape({
    UserEmail: PropTypes.string.isRequired,
    UserFirstname: PropTypes.string.isRequired,
    UserLastname: PropTypes.string.isRequired,
    UserImageURL: PropTypes.string.isRequired,
    UserAffinityID: PropTypes.string.isRequired,
  }),
};
  
export default FavouriteCard;
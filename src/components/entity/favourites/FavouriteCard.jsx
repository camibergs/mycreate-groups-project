import PropTypes from 'prop-types';
import './FavouriteCard.scss';

function FavouriteCard({user}) {
  // Initialisation ------------------------------
  const loggedInUser = 277;
  const likeRecord = { LikerID: loggedInUser };
  const apiURL = "http://softwarehub.uk/unibase/api"
  const likeEndpoint = `${apiURL}/users/likes/${loggedInUser}`;
  
  // State ---------------------------------------
  const apiPost = async (url, likeRecord) => {
    const request = {
      method: "POST",
      body: JSON.stringify(likeRecord),
      headers: { "Content-type": "application/json" },
    };

    const response = await fetch(url, request);
    const result = await response.json();
    return response.status >= 200 && response.status < 300
      ? { isSuccess: true }
      : { isSuccess: false, message: result.message };
  };
  
  
  
  // Handlers ------------------------------------
  const handleLikes = (student) => {
    console.log(`You liked ${student.UserID}`);
    likeRecord.LikeeID = student.UserID;
    likeRecord.LikeAffinityID = 1;
    apiPost(likeEndpoint, likeRecord);
  };

  const handleDislikes = () => {
    console.log(`You disliked ${student.UserID}`);
    likeRecord.LikeeID = student.UserID;
    likeRecord.LikeAffinityID = 2;
    apiPost(likeEndpoint, likeRecord)
  };

  const handleReset = () => {
    console.log(`Reset ${student.UserID}`);
    likeRecord.LikeeID = student.UserID;
    likeRecord.LikeAffinityID = null;
    apiPost(likeEndpoint,)

  };
  
  // View ----------------------------------------
  const buttonLike = (
    <button onClick={() => handleLikes(user)}>Like</button>
  );
  const buttonDislike = (
    <button onClick={() => handleDislikes(user)}>Dislike</button>
  );
  const buttonReset = (
    <button onClick={() => handleReset(user)}>Reset</button>
  );

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
import PropTypes from 'prop-types';
import { Card } from '../../UI/Card.jsx';
import './AssessmentCard.scss';

function AssessmentCard({ assessment }) {
  // Initialisation ------------------------------
  // State ---------------------------------------
  // Handlers ------------------------------------
  // View ----------------------------------------
  return (
    <div className="assessmentCard">
      <Card>
      <p>{assessment.AssessmentID}</p>
        <p>{assessment.AssessmentName}</p>
        <p>{assessment.AssessmentPublishdate}</p>
      </Card>
    </div>  
  );
}

AssessmentCard.propTypes = {
  assessment: PropTypes.shape({
    AssessmentID: PropTypes.number.isRequired,
    AssessmentName: PropTypes.string.isRequired,
    AssessmentPublishdate: PropTypes.string.isRequired,
  }),
};

export default AssessmentCard;
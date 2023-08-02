import PropTypes from 'prop-types';
import Action from '../../UI/Actions.jsx';
import './AssessmentForm.scss';

function AssessmentForm({ onCancel }) {
  // Initialisation ------------------------------
  // State ---------------------------------------
  // Handlers ------------------------------------
  // View ----------------------------------------
  return (
    <div className="assessmentForm">
      <p>This is the form to add a new assessment</p>

      <Action.Tray>
        <Action.Cancel showText buttonText="Cancel Form" onClick={onCancel} />
      </Action.Tray>

    </div>
  );
}

AssessmentForm.propTypes = {
  onCancel: PropTypes.func,
};

export default AssessmentForm;
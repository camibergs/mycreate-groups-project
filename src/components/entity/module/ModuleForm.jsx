import PropTypes from 'prop-types';
import Action from '../../UI/Actions.jsx';
import './ModuleForm.scss';

function ModuleForm({ onCancel }) {
  // Initialisation ------------------------------
  // State ---------------------------------------
  // Handlers ------------------------------------
  // View ----------------------------------------
  return (
    <div className="moduleForm">
      <p>This is the form</p>

      <Action.Tray>
        <Action.Cancel showText buttonText="Cancel Form" onClick={onCancel} />
      </Action.Tray>

    </div>
  );
}

ModuleForm.propTypes = {
  onCancel: PropTypes.func,
};

export default ModuleForm;
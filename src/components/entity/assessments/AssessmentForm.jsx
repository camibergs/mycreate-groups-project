import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Action from '../../UI/Actions.jsx';
import './AssessmentForm.scss';

const initialAssessment = {
  AssessmentName: null,
  AssessmentPublishdate: null,
  AssessmentSubmissiondate: null,
  AssessmentFeedbackdate: null,
  AssessmentBriefURL: null,
  AssessmentModuleID: null,
  AssessmentTypeID: null,
};

function AssessmentForm({ onCancel, onSuccess }) {
  // Initialisation ------------------------------
  const validation = {
    isValid: {
      AssessmentName: (name) => name.length > 15,
      AssessmentPublishdate: (date) => date.getTime() > (new Date()).getTime(),
      AssessmentSubmissiondate: (date) => date.getTime() > (new Date()).getTime(),
      AssessmentFeedbackdate: (date) => date.getTime() > (new Date()).getTime(),
      AssessmentBriefURL: (text) => text.length > 15,
      AssessmentModuleID: (id) => id > 0,
      AssessmentTypeID: (id) => id > 0,
    },
    errorMessage: {
      AssessmentName: "Assessment name is too short",
      AssessmentPublishdate: "Invalid date",
      AssessmentSubmissiondate: "Invalid date",
      AssessmentFeedbackdate: "Invalid date",
      AssessmentBriefURL: "Invalid URL",
      AssessmentModuleID: "Invalid Module",
      AssessmentTypeID: "Invalid Description",
    }

  };

  const conformance = {
    html2js: {
      AssessmentName: (value) => (value === '' ? null : value),
      AssessmentPublishdate: (value) => (value === '' ? null : value),
      AssessmentSubmissiondate: (value) => (value === '' ? null : value),
      AssessmentFeedbackdate: (value) => (value === '' ? null : value),
      AssessmentBriefURL: (value) => (value === '' ? null : value),
      AssessmentModuleID: (value) => (value === '' ? null : value),
      AssessmentTypeID: (value) => (value === '' ? null : value),
    },
    js2html: {
      AssessmentName: (value) => (value === '' ? null : value),
      AssessmentPublishdate: (value) => (value === '' ? null : value),
      AssessmentSubmissiondate: (value) => (value === '' ? null : value),
      AssessmentFeedbackdate: (value) => (value === '' ? null : value),
      AssessmentBriefURL: (value) => (value === '' ? null : value),
      AssessmentModuleID: (value) => (value === '' ? null : value),
      AssessmentTypeID: (value) => (value === '' ? null : value),
    },
  };

  const loggedInLecturer = 820;
  const apiURL = 'http://softwarehub.uk/unibase/api';
  const postAssessmentEndpoint = `${apiURL}/assessments/`;
  const moduleEndpoint = `${apiURL}/modules`;
  const assessmentTypeDescrEndpoint = `${apiURL}/assessments/leader/${loggedInLecturer}`;
  

 
  // State ---------------------------------------
  const [assessment, setAssessments] = useState(initialAssessment);
  const [modules, setModules] = useState();
  const [assessmentTypeDescr, setAssessmentTypeDescr] = useState();

  const apiGet = async (endpoint, setState) => {
    const response = await fetch(endpoint);
    const result = await response.json();
    setState(result);
  };

  const apiPost = async (endpoint, record) => {
    // Build request object
    const request = {
      method: 'POST',
      body: JSON.stringify(record),
      headers: { 'Content-type': 'application/json' },
    };

    // Call the fetch
    const response = await fetch(endpoint, request);
    const result = await response.json();
    return response.status >= 200 && response.status < 300
      ? { isSuccess: true }
      : { isSuccess: false, message: result.message };
  };

  useEffect(() => {
    apiGet(moduleEndpoint, setModules);
  }, [moduleEndpoint]);

  useEffect(() => {
    apiGet(assessmentTypeDescrEndpoint, setAssessmentTypeDescr);
  }, [assessmentTypeDescrEndpoint]);



  // Handlers ------------------------------------
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAssessments({ ...assessment, [name]: conformance.html2js[name](value) });
  };

  const handleSubmit = async () => {
    console.log(`Assessment=[${JSON.stringify(assessment)}]`);
    const result = await apiPost(postAssessmentEndpoint, assessment);
    if (result.isSuccess) onSuccess();
    else alert(result.message);
  };


  // View ----------------------------------------
  return (
    <div className="assessmentForm">
      <div className="FormTray">

        <label>
          Assessment Name
          <input
            type="text"
            name="AssessmentName"
            value={conformance.js2html['AssessmentName'](assessment.AssessmentName)}
            onChange={handleChange}
          />
        </label>

        <label>
          Assessment Publish Date
          <input
            type="date"
            name="AssessmentPublishdate"
            value={conformance.js2html['AssessmentPublishdate'](assessment.AssessmentPublishdate)}
            onChange={handleChange}
          />
        </label>

        <label>
          Assessment Submission Date
          <input
            type="date"
            name="AssessmentSubmissiondate"
            value={conformance.js2html['AssessmentSubmissiondate'](assessment.AssessmentSubmissiondate)}
            onChange={handleChange}
          />
        </label>

        <label>
          Assessment Feedback Date
          <input
            type="date"
            name="AssessmentFeedbackdate"
            value={conformance.js2html['AssessmentFeedbackdate'](assessment.AssessmentFeedbackdate)}
            onChange={handleChange}
          />
        </label>

        <label>
          Assessment Brief URL
          <input
            type="text"
            name="AssessmentBriefURL"
            value={conformance.js2html['AssessmentBriefURL'](assessment.AssessmentBriefURL)}
            onChange={handleChange}
          />
        </label>

        <label>
          Assessment - Module ID
          <select
            name="AssessmentModuleID"
            value={conformance.js2html['AssessmentModuleID'](assessment.AssessmentModuleID)}
            onChange={handleChange}
          >
          <option value="0">None selected</option>
            {modules && modules.map((modules) => (
              <option key={modules.ModuleID} value={modules.ModuleID}>
                {modules.ModuleName}
              </option>
            ))}
          </select>
        </label>

        <label>
          Assessment Type ID 
          <select
            name="AssessmentTypeID"
            value={conformance.js2html['AssessmentTypeID'](assessment.AssessmentTypeID)}
            onChange={handleChange}
          >
          <option value="0">None selected</option>
          {assessmentTypeDescr && assessmentTypeDescr.map((assessmentTypeDescr) => (
            <option key={assessmentTypeDescr.AssessmentAssessmentTypeID} value={assessmentTypeDescr.AssessmentAssessmentTypeID}>
              {assessmentTypeDescr.AssessmentAssessmenttypeDescription}
            </option>
          ))}
            
          </select>
        </label>

        <Action.Tray>
          <Action.Submit showText onClick={handleSubmit} />
          <Action.Cancel showText buttonText="Cancel Form" onClick={onCancel} />
        </Action.Tray>

      </div>
    </div>

  );
}

AssessmentForm.propTypes = {
  onCancel: PropTypes.func,
  onSuccess: PropTypes.func,
};

export default AssessmentForm;
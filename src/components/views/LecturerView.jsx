import { useState, useEffect } from 'react';
import Action from '../UI/Actions.jsx';
import { CardContainer } from '../UI/Card.jsx';
import Header from '../../components/layout/Header.jsx';
import LecturerNavbar from '../../components/layout/LecturerNavbar.jsx';
import AssessmentCard from '../entity/assessments/AssessmentCard.jsx';
import AssessmentForm from '../entity/assessments/AssessmentForm.jsx';
import './LecturerView.scss';

function LecturerView() {
  // Initialisation ------------------------------
  const loggedInLecturer = 820;
  const apiURL = 'http://softwarehub.uk/unibase/api';
  const myModulesEndpoint = `${apiURL}/assessments/leader/${loggedInLecturer}`;

  // State ---------------------------------------
  const [assessments, setAssessments] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const apiGet = async (endpoint) => {
    const response = await fetch(endpoint);
    const result = await response.json();
      setAssessments(result);
  };

  useEffect(() => {
    apiGet(myModulesEndpoint);
  }, [myModulesEndpoint]);

  // Handlers ------------------------------------
  const handleAdd = () => setShowForm(true);
  const handleCancel = () => setShowForm(false);

  const handleSuccess = () => {
    setShowForm(false);
    apiGet(myModulesEndpoint); // Fetch updated data after successful form submission
  };

  // View ----------------------------------------
  return (
    <>
    <Header />
      <LecturerNavbar />
      <div className='lecturerPage'>
      <h1>List of assessments:</h1>

         <Action.Tray>
            {!showForm && <Action.Add showText buttonText="Add New Assessment" onClick={handleAdd} />}
        </Action.Tray>

        {showForm && <AssessmentForm onCancel={handleCancel} onSuccess={handleSuccess}/>}

        {!assessments ? (
          <p>Loading records ... </p>
        ) : assessments.length === 0 ? (
          <p>No records found</p>
        ) : (
        <CardContainer>
          {assessments.map((assessment) => (
            <AssessmentCard assessment={assessment} key={assessment.AssessmentID} />
        ))}
        </CardContainer>
      )}
      </div>
    </>
  );
}

export default LecturerView;
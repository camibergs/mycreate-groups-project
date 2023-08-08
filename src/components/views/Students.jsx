import { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout.jsx';
import Header from '../../components/layout/Header.jsx';
import StudentNavbar from '../../components/layout/StudentNavbar.jsx';
import Action from '../UI/Actions.jsx';
import { CardContainer } from '../UI/Card.jsx';
import UserCard from '../entity/user/UserCard';
import FavouriteButtons from '../entity/favourites/FavouriteButtons.jsx';
import './Students.scss';


function Students() {

    // Initialisation ---------------------------
    const newStudent = {
      UserFirstname: 'Nathan',
      UserLastname: 'Olsson',
      UserEmail: 'K9999999@kingston.ac.uk',
      UserRegistered: 0,
      UserLevel: 4,
      UserYearID: 1,
      UserUsertypeID: 2,
      UserImageURL:
        'https://images.generated.photos/m8Sph5rhjkIsOiVIp4zbvIuFl43F6BWIwhkkY86z2Ms/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODU4MTE5LmpwZw.jpg',
      UserUsertypeName: 'Student',
      UserYearName: '2022-23',
    };

    const loggedInUser = 277;
    const apiURL = "http://softwarehub.uk/unibase/api"
    const myGroupEndpoint = `${apiURL}/users/likes/${loggedInUser}`;

    // State ------------------------------------
    const [students, setStudents] = useState(null);
  
    const apiGet = async (endpoint) => {
      const response = await fetch(endpoint);
      const result = await response.json();
      const newResult = result.map((user) => {
        return {
          ...user, UserAffinityID: Math.random() > 0.9 ? 1 : Math.random() > 0.9 ? 2 : 0
        }
      });
      setStudents(newResult);
    };

    useEffect(() => {
      apiGet(myGroupEndpoint);
    }, [myGroupEndpoint]);

    // Handlers ---------------------------------
    const addToFavourites = (id) => {
            alert("Student has been added to Favourites");
    };

    const handleAdd = (student) => {
      student.UserID = Math.floor(10000 * Math.random());
      setStudents([...students, student]);
      console.log(`Length of students: ${students.length}`);
    };


    // View -------------------------------------
    return (
      <>
      <Header />
      <StudentNavbar />
      <div className='studentPage' >
        <h1>Students in your course</h1>

        <CardContainer>
          {!students ? (
            <p>Loading records ...</p>
          ) : students.length === 0 ? (
            <p>No records found.</p>
          ) : (
            students.map((student) => 
              <UserCard user={student} key={student.UserID}>
                <FavouriteButtons user={student}/>
              </UserCard>
        ))}
        </CardContainer>

        <button onClick={() =>
            addToFavourites(student.UserID)}> 
            <span>Add to Favourite</span>
        </button> 
        <button onClick={() => handleAdd(newStudent)}>Add student</button>
      </div>
      </>
);
}

export default Students;
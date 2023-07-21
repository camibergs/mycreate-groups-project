import './Favourites.scss';

function Favourites() {

    // View -------------------------------------
    return (
        <>
        <h1>Your favourite coursemates</h1>
        </>

    );
}

export default Favourites;

/*
<CardContainer>
            {favourites.map((student) => (
               <div className="studentCard" key={student.UserEmail}>
                 <Card>
                    <p>{student.UserEmail.substring(0, 8)}</p>
                    <p>{`${student.UserFirstname} ${student.UserLastname}`}</p>
                    <img src={student.UserImageURL} />
                 </Card>
               </div>
            ))}
        </CardContainer>
        */
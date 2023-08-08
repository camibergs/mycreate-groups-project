import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Login from './components/views/Login.jsx';
import Homepage from './components/views/Homepage.jsx';
import Modules from './components/views/Modules.jsx';
import Students from './components/views/Students.jsx';
import Favourites from './components/views/Favourites.jsx';
import LecturerView from './components/views/LecturerView.jsx';
import PageNotFound from './components/views/404.jsx';

function App() {

  // Initialisation ---------------------------
  const loggedInUser = 'Camilla';
  
  // State ------------------------------------

  
  // Handlers ---------------------------------




  // View -------------------------------------
  return (
    <BrowserRouter>
      <Layout loggedInUser={loggedInUser}> 
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/students" element={<Students />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/lecturerview" element={<LecturerView />} />
          <Route path="/*" element={<PageNotFound />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

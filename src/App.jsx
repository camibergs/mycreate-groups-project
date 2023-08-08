import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Login from './components/views/Login.jsx';
import Homepage from './components/views/Homepage.jsx';
import Modules from './components/views/Modules.jsx';
import Students from './components/views/Students.jsx';
import GroupAssessments from './components/views/GroupAssessments.jsx';
import LecturerView from './components/views/LecturerView.jsx';
import PageNotFound from './components/views/404.jsx';

function App() {
  // Initialisation ---------------------------
  // State ------------------------------------
  // Handlers ---------------------------------
  // View -------------------------------------
  return (
    <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/students" element={<Students />} />
          <Route path="/groupassessments" element={<GroupAssessments />} />
          <Route path="/lecturerview" element={<LecturerView />} />
          <Route path="/*" element={<PageNotFound />} />
        
        </Routes>
    </BrowserRouter>
  )
}

export default App

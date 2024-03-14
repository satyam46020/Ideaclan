import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import AdminDashboard from './components/AdminDashboard';
// import Course from './components/Course';

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Login/> }/>
          <Route path="/signup" element={<Signup/>} />
          {/* <Route path="/courses" element={<Course/>} /> */}
          <Route path="/admin-dashboard" element={<AdminDashboard/>} />
          {/* <Route path="/lectures" component={LecturesPage} /> */}
          {/* <Route path="/" component={Home} /> */}
          {/* <Route path="/student-dashboard" component={StudentDashboardPage} />   */}
        </Routes>
      </>
  );
}

export default App;
          
          

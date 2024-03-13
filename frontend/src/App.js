import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
      <>
        <Routes>
          {/* <Route path="/" component={Home} /> */}
          <Route path="/" element={<Login/> }/>
          <Route path="/signup" element={<Signup/>} />
          {/* <Route path="/courses" component={CoursesPage} />
          <Route path="/lectures" component={LecturesPage} />
          <Route path="/admin-dashboard" component={AdminDashboardPage} />
          <Route path="/student-dashboard" component={StudentDashboardPage} />  */}
        </Routes>
      </>
  );
}

export default App;
          
          

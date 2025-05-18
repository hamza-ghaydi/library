import React, { useState } from 'react';
import Navbar from './layouts/Navbar';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Admin from './pages/Admin';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path="/admin" 
          element={
            currentUser?.isAdmin ? 
            <Admin /> : 
            <Navigate to="/login" replace />
          } 
        />
      </Routes>
    </>
  );
};

export default App;
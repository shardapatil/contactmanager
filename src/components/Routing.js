import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './Signup';
import ContactManager from './ContactManager';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm></LoginForm>} />
        <Route path="/signup" element={<SignupForm></SignupForm>} />
        <Route path="/app" element={<ContactManager></ContactManager>} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
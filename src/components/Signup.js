import React, { useState } from 'react';
import axios from 'axios';
 import { useNavigate } from 'react-router-dom';

const SignupForm = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const navigate = useNavigate();
  const handlereset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSignup = async () => {
    try {
      // Check if the user already exists in db.json
      const existingUser = await axios.get(`http://localhost:3001/users?email=${email}`);
      if (existingUser.data.length > 0) {
        alert('User with this email already exists. Please use a different email.');
        return;
      }

      // If user doesn't exist, create a new user
      await axios.post('http://localhost:3001/users', { email, password });

      // Redirect to login page after successful signup
    
       navigate('/');
    } catch (error) {
      console.error('Signup failed:', error.message);
    }
  };

  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">
                  <div className="text-center">
                    <h4 className="mt-1 mb-5 pb-1">Signup</h4>
                  </div>

                  <form>
                    <div className="mb-4">
                      <label htmlFor="form3Example3" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control form-control-lg"
                        placeholder="Enter a valid email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="form3Example4" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control form-control-lg"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                      onClick={() => { handleSignup(); handlereset(); }}
                      >
                        Signup
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center justify-content-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="img-fluid"
                    alt="Sample image"
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default SignupForm;

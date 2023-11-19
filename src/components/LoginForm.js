
// export default LoginForm;
import React, { useState } from 'react';
import { useAppContext } from './AppContext';
import './CSS/loginpage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ContactImage from '../Image/ContactImage.jpg';


const LoginForm = () => {
  const { dispatch } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handlereset = () => {
    // Perform reset logic here
    setEmail('');
    setPassword('');
  };

  const handleLogin = async () => {
    try {
      if (email === '' || password === '') {
        alert('Field cannot be empty');
        return;
      }
  
      // Make an API request to check if the user exists in db.json
      const response = await axios.get(`http://localhost:3001/users?email=${email}&password=${password}`);
      console.log(response);
      if (response.data.length > 0) {
        // User exists, perform login
         dispatch({ type: 'LOGIN' });
        console.log('Login successful');
        
        navigate('/app');
       
      } else {
        // User not found, display error
        console.log('Login failed');
        setErrorMessage('Wrong username or password. Please try again.');
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    // <div id='X1'>

    //       <h2>Login</h2>
    //       <form id='X2'>
    //         <label>
    //           Email:
    //           <input
    //             type='email'
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             required
    //           />
    //         </label>
    //         <br />
    //         <label>
    //           Password:
    //           <input
    //             type='password'
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             required
    //           />
    //         </label>
    //         <br />
    //         <button type='button' onClick={() => { handleLogin(); handlereset(); }}>
    //           Login
    //         </button>
    //       </form>
  
    //</div>


      <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src={ContactImage}
                        style={{ width: '185px' }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">Contact Manager Application</h4>
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

                <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Don't have an account?</p>
                    {/* <button type="button" class="btn btn-outline-danger" onClick={handlesignup}>Create new</button> */}
                    <Link to="/Signup" className="btn btn-outline-danger">Create new</Link>
                  </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => { handleLogin(); handlereset(); }}
                  >
                    Login
                  </button>
                </div>
              </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4" style={{textAlign:'center'}}>The future is bright.</h4>
                    <p className="small mb-0">
                    A contact manager is a software program that enables users to easily store and find contact information, 
                    such as names, email, and telephone numbers. They are contact-centric databases that provide a fully integrated approach to tracking all information and communication activities linked to contacts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;

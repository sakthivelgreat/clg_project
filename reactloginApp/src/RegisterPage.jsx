import { useState } from 'react';
import './RegisterPage.css'; // Import the CSS file
import ClipLoader from "react-spinners/ClipLoader";
import { RegisterApi } from './Sevices/Api';
import { storeUserData } from './Sevices/Storage';
import { Navigate } from "react-router-dom";
import { isAuthenticated } from './Sevices/Auth';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const initialStateErrors = {
    email: { required: false, invalid: false },
    password: { required: false, weak: false },
    name: { required: false },
    custom_error: null,
  };
  const [errors, setErrors] = useState(initialStateErrors);
  const [inputs, setInputs] = useState({ email: "", password: "", name: "" });
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedErrors = { ...initialStateErrors };
    let hasError = false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (inputs.name === "") {
      updatedErrors.name.required = true;
      hasError = true;
    }
    if (inputs.email === "" || !emailRegex.test(inputs.email)) {
      updatedErrors.email.required = true;
      updatedErrors.email.invalid = true;
      hasError = true;
    }
    if (inputs.password === "" || inputs.password.length < 6) {
      updatedErrors.password.required = true;
      updatedErrors.password.weak = true;
      hasError = true;
    }

    setErrors(updatedErrors);

    if (!hasError) {
      
      setLoading(true);
      
      RegisterApi(inputs).then((response)=>{  
        console.log(response);
        storeUserData(response.data.idToken);
      }).catch((err)=>{
        if(err.response.data.error.message=="EMAIL_EXISTS"){
          setErrors({...errors,custom_error:"Already email register so login please!"})
        }else{
          setErrors({...errors,custom_error:"Registration successful!"})
        }
      }).finally(()=>{
        setLoading(false);
      }) 
    }
    setErrors(...errors);
  };
  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  if (isAuthenticated()) {
    return <Navigate  to="/Home"/>
   }


  return (
    <div className="container">
      <div className="login-container">
        <h2 className="heading">Register</h2>
        <form onSubmit={handleSubmit}>
  
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name='name'  onChange={handleInput}  placeholder="Enter your name" />
          {errors.name?.required && (
            <span className="text-danger">Name is required.</span>
          )}
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name='email' onChange={handleInput}  placeholder="Enter your email" />
          {errors.email?.required && (
            <span className="text-danger">Email is required.</span>
          )}
          {errors.email?.invalid && (
            <span className="text-danger">Invalid email format.</span>
          )}
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name='password' onChange={handleInput}  placeholder="Enter your Password" />
          <br />
          {errors.password?.required && (
           <span className="text-danger">Password is required.</span>
          )}
          {errors.password?.weak && (
           <span className="text-danger">Password must be at least 6 characters.</span>
          )}
          <br/>
          {errors.custom_error && (
            <span className="text-success">{errors.custom_error}</span>
          )}
          {loading && (
            <div className="text-center">
              <ClipLoader color="orange" loading={loading} size={30} aria-label="Loading spinner" />              
              <p>Loading, please wait...</p>
            </div>
          )}
          <button type="submit">Submit</button>
          <br/>
         
        </form>
        <div className="form-footer">
          <p>
            Already registered? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

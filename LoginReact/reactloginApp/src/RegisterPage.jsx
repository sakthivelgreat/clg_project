
import './RegisterPage.css'; // Import the CSS file

function RegisterPage() {

  return (
    <div className="container">
      <div className="login-container">
        <h2 className="heading">Login</h2>
        <form onSubmit="">
  
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value="" onChange="" required placeholder="Enter your name" />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value="" onChange="" required placeholder="Enter your email" />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value="" onChange="" required placeholder="Enter your Password" />
          <br />
          <button type="submit">Submit</button>
        </form>
        <div className="form-footer">
          <p>
            Already registered? <a href="Home.html">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

import React, { useState } from 'react';
import './styles.css'; // Assuming you have CSS styles in a separate file

const Profile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="profile-topnav">
        <div className="name">
          <h3>SAKTHIVEL KANDHASAMI</h3>
        </div>
        <img
          src="logo.png"
          alt="Logo"
          className="logo"
          onClick={toggleMenu}
        />
        <ul id="menu" className={menuOpen ? 'open' : ''}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Creator Profile</a>
          </li>
          <li>
            <a href="#">Go to Calculation</a>
          </li>
          <li>
            <a href="#">Contact Me</a>
          </li>
          <li>
            <a href="#">Roles and Regulations</a>
          </li>
        </ul>
      </div>
      <div className="profile2">
        <div className="profile-container1">
          <div>
            <img
              src="clg_photes/IMG-20230112-WA0020.jpg"
              alt="Your Photo"
              className="profile-img"
            />
            <div className="profile-info">
              <span>
                <span>
                  Created <br />
                  <br /> by <br />
                  <br />
                  <h2>K.sakthivel</h2>
                </span>
                <p>Occupation: Friend Developer</p>
                <p>Description: A brief description about yourself</p>
              </span>
            </div>
          </div>
        </div>
        <br />
        <div className="clg">
          <span>
            <h2>
              <a href="">my class met</a>
            </h2>
          </span>
          <span>
            <h2>
              <a href="">my sisters</a>
            </h2>
          </span>
          <span>
            <h2>
              <a href="">statistics teachers</a>
            </h2>
          </span>
          <span>
            <h2>
              <a href="">my clg statistics history</a>
            </h2>
          </span>
        </div>
        <div className="maindiv2">
          <div className="profile-container">
            <img
              src="clg_photes/IMG-20230112-WA0020.jpg"
              alt="Teacher's Photo"
              className="medium-profile-img"
            />
            <div className="profile-info">
              <span>
                <h2>Student's Name girl no2</h2>
              </span>
              <p>Grade: Student's Grade</p>
              <p>Description: A brief description about the student</p>
            </div>
          </div>
          <br />
          <div className="profile-container">
            <img
              src="clg_photes/IMG-20230112-WA0020.jpg"
              alt="Student's Photo"
              className="medium-profile-img"
            />
            <div className="profile-info">
              <span>
                <h2>Student's Name girl no2</h2>
              </span>
              <p>Grade: Student's Grade</p>
              <p>Description: A brief description about the student</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

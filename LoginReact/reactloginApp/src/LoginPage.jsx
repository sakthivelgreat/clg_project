import { useState } from 'react';
import './LoginPage.css'; // Import the CSS file

function LoginPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  // Function to get Salesforce Access Token
  const getAccessToken = async () => {
    const consumerKey = '3MVG9WVXk15qiz1JZcjbYhQtQriZ5cfPgewhRuVIzO744GlAUmFT42YJuQrITuvwMHKZFq3x6Hx3vwwOtlA7Q';
    const consumerSecret = '4759B4F25D8B1B77DFC9F0797116E43DEE3F0558721068FCBF1FF0F4F8D465A9';
    const username = 'ksakthivel@merfantz6.com';
    const password = 'Sakthi2177';
    const tokenURL = 'https://login.salesforce.com/services/oauth2/token';

    const params = new URLSearchParams({
      grant_type: 'password',
      client_id: consumerKey,
      client_secret: consumerSecret,
      username,
      password
    });

    try {
      const response = await fetch(tokenURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params
      });
      const data = await response.json();
      console.log('Access Token Response:', data);
      return data.access_token || null;
    } catch (error) {
      console.error('Error fetching access token:', error);
      return null;
    }
  };

  // Function to create a record in Salesforce
  const createSalesforceRecord = async (accessToken, name, email, age) => {
    const instanceUrl = 'https://merfantz6-dev-ed.develop.lightning.force.com';
    const objectApiName = 'SakthiClgAppLogin__c';
    const recordData = {
      Name: name,
      Email__c: email,
      Age__c: age
    };

    try {
      const response = await fetch(`${instanceUrl}/services/data/v61.0/sobjects/${objectApiName}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(recordData)
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Record created successfully:', data);
        return true;
      } else {
        console.error('Failed to create record:', data);
        alert('Error: ' + data[0].message);
        return false;
      }
    } catch (error) {
      console.error('Error creating record:', error);
      return false;
    }
  };

  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && age) {
      try {
        const accessToken = await getAccessToken();
        if (!accessToken) {
          alert('Failed to get access token.');
          return;
        }
        const recordCreated = await createSalesforceRecord(accessToken, name, email, age);
        if (recordCreated) {
          alert('Record created successfully!');
          // Navigate to next page
          window.location.href = 'nextpage.html';
        } else {
          alert('Failed to create record.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error in login or creating record.');
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2 className="heading">Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
          <br />
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            placeholder="Enter your age"
          />
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

export default LoginPage;

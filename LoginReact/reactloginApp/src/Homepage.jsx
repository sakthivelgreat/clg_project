import './Homepage.css';

const StatsCheckpoint = () => {
    return (
        <div style={{backgroundColor:'#2C3038'}}>
            <div className="profile-topnav">
                <div className="name-container">
                    <h3 className="name">DEPARTMENT OF STATISTICS</h3>
                </div>
                <ul id="menu">
                    <li><a href="Home.html">Home</a></li>
                    <li><a href="CreatorProfile.html">Creator Profile</a></li>
                    <li><a href="LineChart.html">Go to Calculation</a></li>
                    <li><a href="myclgInformation.html">My Stat dept.</a></li>
                    <li><a href="rolesandRegulation1.html">Roles and Regulations</a></li>
                </ul>
            </div>

            <div className="bio-data-container">
                <div className="profile2">
                    <span><h1 id="dd">Government Arts college salem-7</h1></span>
                    <h1 id="head">"Stats Checkpoint : Verify Your Answer"</h1>
                    <br /><br />
                    <div className="profile-container1">
                        <img src="clg_photes/Data-Science-in-Stock-Trading.jpeg" id="main22" alt="College" />
                        <div className="sakthi">
                            <div className="profile-info">
                                <img
                                    src="clg_photes/sakthi.jpeg"
                                    alt="Your Photo"
                                    className="profile-img"
                                />
                                <br />
                                <span>
                                    Created <br /><br />
                                    by <br /><br />
                                    <h2>K.sakthivel</h2>
                                    <p>Occupation: Front-End Developer</p>
                                    <p>Description: Government Arts college salem-7 master's degree <span>Student</span></p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="btm-container">
                        <div className="maindiv2">
                            <div className="profile-container">
                                <img
                                    src="clg_photes/kayal1.png"
                                    alt="Teacher's Photo"
                                    className="medium-profile-img"
                                />
                                <br />
                                <div className="profile-info">
                                    <span><h2 className="name">P.Kayalvizhi</h2></span>
                                    <p>Occupation: Code Performance Analyzer</p>
                                    <p>Description: Government Arts college salem-7 master's degree <span>Student</span></p>
                                </div>
                            </div>
                            <br />
                            <div className="profile-container">
                                <img
                                    src="clg_photes/sowmiya.png"
                                    alt="Student's Photo"
                                    className="medium-profile-img"
                                />
                                <div className="profile-info">
                                    <span><h2>V.Sowmiya</h2></span>
                                    <p>Occupation: Material Content Creator</p>
                                    <p>Description: Government Arts college salem-7 master's degree <span>Student</span></p>
                                </div>
                            </div>
                            <br />
                            <h1 id="APJ">
                                "The <span>best brains of<br />the nation</span> may be <br />
                                found on the last benches <br />
                                of the classroom " <br />
                                -- <span>A.P.J. Abdul Kalam</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsCheckpoint;

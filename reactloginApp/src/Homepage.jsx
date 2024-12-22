import './Homepage.css';

const StatsCheckpoint = () => {
    return (
        <div style={{backgroundColor:'#2C3038'}}>
            <div className="profile-topnav">
                <div style={{  display:'flex',justifyContent:'center',alignItems:'center'}} className="name-container">
                    <h3 style={{fontSize:'15px'}} className="name">DEPARTMENT OF STATISTICS</h3>
                </div>
                <ul id="menu">
                    <li><a href="Home.html">Home</a></li>
                    <li><a href="CreatorProfile.html">Creator Profile</a></li>
                    <li><a href="LineChart.html">Go to Calculation</a></li>
                    <li><a href="myclgInformation.html">My Stat dept.</a></li>
                    <li><a href="rolesandRegulation1.html">Roles and Regulations</a></li>
                </ul>
                <div>

                </div>
            </div>
            <div className="bio-data-container">
                <div className="profile2">
                    <div style={{display:'flex'}}>
                        <div style={{position:'relative',bottom:'10px'}}>
                            <h1  style={{fontSize:'25px', color:'#f4e9e9',margin:'0',width:'700px'}}>Government Arts college salem-7</h1>
                            <h1 style={{fontSize:'30px',width:'700px',margin:'0'}}>"Stats Checkpoint : Verify Your Answer"</h1>
                        </div>
                        <div className="profile-container1">
                            <div className="sakthi">
                                <div  style={{ display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} className="profile-info">
                                    <img src="clg_photes/sakthi.jpeg" alt="Your Photo" className="profile-img"
                                    />
                                    <span>
                                        <p style={{display:'flex',flexDirection:'column',lineHeight:'15px'}}>
                                            <span style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',fontSize:'12px'}}> <span>Created</span><span> by </span></span>
                                            <span style={{fontSize:'20px',fontWeight:'600',color:'#87BAB7'}}>K.sakthivel</span>
                                            <span><span style={{fontSize:'15px',fontWeight:'600'}}>Occupation:</span> <span style={{fontSize:'14px'}}>Front-End Developer</span></span> 
                                            <span><span style={{fontSize:'15px',fontWeight:'600'}}>Description:</span><span style={{fontSize:'14px'}}>Government Arts college salem-7 master's degree <span>Student</span></span></span>
                                        </p>
                                    </span>
                                </div>
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
                                <span>
                                        <p style={{display:'flex',flexDirection:'column',lineHeight:'15px'}}>
                                            <span style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',fontSize:'12px'}}> <span>Created</span><span> by </span></span>
                                            <span style={{fontSize:'20px',fontWeight:'600',color:'#87BAB7'}}>K.sakthivel</span>
                                            <span><span style={{fontSize:'15px',fontWeight:'600'}}>Occupation:</span> <span style={{fontSize:'14px'}}>Front-End Developer</span></span> 
                                            <span><span style={{fontSize:'15px',fontWeight:'600'}}>Description:</span><span style={{fontSize:'14px'}}>Government Arts college salem-7 master's degree <span>Student</span></span></span>
                                        </p>
                                    </span>
                            </div>
                            <br />
                            <div className="profile-container">
                                <img
                                    src="clg_photes/sowmiya.png"
                                    alt="Student's Photo"
                                    className="medium-profile-img"
                                />
                                <span>
                                        <p style={{display:'flex',flexDirection:'column',lineHeight:'15px'}}>
                                            <span style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',fontSize:'12px'}}> <span>Created</span><span> by </span></span>
                                            <span style={{fontSize:'20px',fontWeight:'600',color:'#87BAB7'}}>K.sakthivel</span>
                                            <span><span style={{fontSize:'15px',fontWeight:'600'}}>Occupation:</span> <span style={{fontSize:'14px'}}>Front-End Developer</span></span> 
                                            <span><span style={{fontSize:'15px',fontWeight:'600'}}>Description:</span><span style={{fontSize:'14px'}}>Government Arts college salem-7 master's degree <span>Student</span></span></span>
                                        </p>
                                    </span>
                            </div>
                            <span style={{ }} >
                                "The <span>best brains of<br />the nation</span> may be <br />
                                found on the last benches <br />
                                of the classroom " <br />
                                -- <span>A.P.J. Abdul Kalam</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsCheckpoint;

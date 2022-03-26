import notificationLogo from '../Assets/notificationnotify-topbar-icon.svg';
import profileLogo from '../Assets/profile-circleprofile-topbar-icon.svg';
import arrowDown from '../Assets/arrow-downdrop-topbar-icon.svg';
import settings from '../Assets/setting-2setting-icon.svg';
import logout from '../Assets/logoutlogout-icon.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TopBar = () => {
    const [show, setShow] = useState(true);
    const [user, setUser] = useState('');
    const [query, setQuery] = useState("");
    const [projects, setProjects] = useState("");
    const fetch = async() =>{
        const { data } =  await axios.get("http://localhost:4080/api/project");
        console.log(data);
        setProjects(data);
    }
    const toggle = ()=>{
        setShow(!show);
    }
    const isLoggedIn = localStorage.getItem("userInfo");

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("userInfo");
        if(isLoggedIn){
            const foundUser = JSON.parse(isLoggedIn);
            setUser(foundUser);
        }
        fetch();
    }, []);
    
    return (
        <div className="topbar">
            <input type="text" placeholder="Search for Projects" value={query} onChange={(e)=>setQuery(e.target.value)}/>
            <div className="inputSearch">
            <div  className="searchResult">
                            <Link to={`/project/${projects.id}`}>
                                <p className="projectName">{projects.projectName}</p>
                                <p className="projectAuthor">{projects.authorName}</p>
                                <p className="hashtagsearch">{projects.hashTag}</p>
                            </Link>
                        </div>
            </div>
            { isLoggedIn ? 
            <div className="d">
                <span className="top-icon l" onClick={toggle}>
                    <img src={arrowDown} alt="Arrow Down" />
                </span>
                <span className="top-icon">
                    <img src={profileLogo} alt="Profile" />
                </span>
                <span className="top-icon">
                    <img src={notificationLogo} alt="Notification" />
                </span>
                <div className={show ? "user-info" : "user-info active"}>
                    <span className="user-info-details">
                        <span className="user-img">
                            <img src={user.img} alt="" />
                        </span>
                       <p className="user-info-name">Profile</p>
                    </span>
                    <span className="user-info-details">
                        <img src={settings} alt="" />
                        <p className="user-info-settings">
                        <Link to="/settings" className='user-info-settings-link'>Settings</Link></p>
                    </span>
                    <span className="user-info-details">
                        <img src={logout} alt="" />
                        <p className="user-info-logout">Logout</p>
                    </span>
                </div>
            </div>
            : 
            <div className='prompt-in'>
                <button className="prompt-signup"><Link to="/signup" className='prompt-signup-link'>Sign Up</Link></button>
                <button className="prompt-signin"><Link to ="/login" className='prompt-signin-link'>Sign In</Link></button>
            </div>
            }
            </div>
    );
}
 
export default TopBar;
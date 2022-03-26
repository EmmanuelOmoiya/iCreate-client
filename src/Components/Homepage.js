import {Link} from 'react-router-dom';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { userData } from './dummyData';
import dpLogo from '../Assets/count-icon3.svg';
import audLogo from '../Assets/count-icon1.svg';
import appLogo from '../Assets/count-icon.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SideDrawer from './SideDrawer';
import TopBar from './TopBar';
const data = userData;
const dataKey="Active User";
let grid;

const Homepage = () => {
    const [user, setUser] = useState("");
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("userInfo");
        if(isLoggedIn){
            const foundUser = JSON.parse(isLoggedIn);
            setUser(foundUser);
        }
    }, []);

    const num = axios.get(`http://localhost:5000/api/project/${user.fullName}`);
    const dpNum = num.length;
    return ( 
        <>
        <TopBar/>
        <SideDrawer/>
            <div className="homepage">
            <div className="hero-prompt">
                <p className="hero-greet">
                    Hello {user.fullName},
                </p>
                <h2 className="hero-tell">
                    Create a new Display Picture to Grow your Brand
                </h2>
                <button className="hero-create">
                    <Link to="/create" className='hero-link'>Create Now</Link>
                </button>
            </div>
            <div className="home-counts">
                {/* Total Display Picture */}
                <div className="dp-count count">
                    <img src={dpLogo} alt="" className='count-logo'/>
                    <span className="dp-count-detail">
                        <p className="dp-count-title title">Total Display Picture</p>
                        <p className="dp-count-number number">{dpNum ? dpNum : '0'}</p>
                    </span>
                </div>
                {/* Total Audience */}
                <div className="aud-count count">
                    <img src={audLogo} alt="" className='count-logo'/>
                    <span className="aud-count-detail">
                        <p className="aud-count-title title">Total Audience</p>
                        <p className="aud-count-number number">{dpNum ? dpNum : '0'}</p>
                    </span>
                </div>
                {/* Total Dp Applied */}
                <div className="app-count count">
                    <img src={appLogo} alt="" className='count-logo'/>
                    <span className="app-count-detail">
                        <p className="app-count-title title">Total Dp Applied</p>
                        <p className="app-count-number number">{dpNum ? dpNum : '0'}</p>
                    </span>
                </div>
            </div>
            <div className="home-chart">
                <span className="header">
                    <span className="left">
                        <h3>Activities</h3>
                        <p>DPs Applied</p>
                    </span>
                    <span className="right">
                        <p className="week">Week</p>
                        <p className="month">Month</p>
                        <p className="year">Year</p>
                    </span>
                </span>
                <ResponsiveContainer width='100%' aspect={4 / 1}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" stroke="#2121FF"/>
                        <Line type='monotone' dataKey={dataKey} stroke='#2121FF'/>
                        <Tooltip/>
                        { grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/>}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
        </>
    );
}
 
export default Homepage;
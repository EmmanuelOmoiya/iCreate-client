import logo from '../Assets/realLogo.svg';
import dashboard from '../Assets/Dashboard.png';
import i4g from '../Assets/i14g.jpg';
import {Link} from 'react-router-dom';
import codeSandbox from '../Assets/codesandbox-logo-icon-png-svg 1codesandboxlogo.svg';
const Landingpage = () => {
    return (  
        <div className="landingpage">
            <div className="header">
                <img src={logo} alt="" className='landinglogo'/>
                <div className="text">
                    <p className="Home">Home</p>
                    <Link to="/projects" classname="button-link"> <p className="community">Community</p></Link>
                </div>
                <Link to="/signup" classname="button-link"><button className="landing-signup">Sign Up</button></Link>
            </div>
            <div className="landinghero">
                <div className="landing-hero-catch">
                    <h1 className="landing-hero-catch-title">We are made just for <span className="imptick">you</span> and your <span className="imptick">Audience</span></h1>
                    <p className="landing-hero-catch-text"> Lift up your brand with iCreate. Create your Display pictures for evente, campaigns and much more. </p>
                </div>
                <div className="landing-buttons">
                   <Link to="/demo" classname="button-link"><button className="demo">View Demo</button></Link>
                   <Link to="/login" classname="button-link"><button className="getstarted">Get Started</button></Link>
                </div>
                <img src={dashboard} alt="" className="cnter" />
                <div className="sponsors">
                    <img src={i4g} alt="" />
                    <img src={codeSandbox} alt="" />
                    <img src={logo } alt=""/>
                </div>
            </div>
            <div className="footer">
            <div className="footer-gist">
                <img src={logo} alt="" />
                <div className="table">
  <tr>
    <th>Navigation</th>
    <th>Legal</th>
  </tr>
  <tr>
    <td>Home</td>
    <td>Terms of Use</td>
  </tr>
  <tr>
    <td>Community</td>
    <td>Privacy Policy</td>
  </tr>
  <tr>
    <td>Pricing</td>
    <td>Cookies Policy</td>
  </tr>
  <tr>
    <td>Contact us</td>
  </tr>
  </div>
            </div>
            </div>
            <hr />
            <div className="under-hr"></div>
        </div>
    );
}
 
export default Landingpage;
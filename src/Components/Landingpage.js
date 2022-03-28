import logo from "../Assets/realLogo.svg";
import dashboard from "../Assets/Dashboard.png";
import i4g from "../Assets/i14g.jpg";
import { Link } from "react-router-dom";
import codeSandbox from "../Assets/codesandbox-logo-icon-png-svg 1codesandboxlogo.svg";
const Landingpage = () => {
  return (
    <div className="landingpage">
      <div className="header">
        <img src={logo} alt="" className="landinglogo" />
        <div className="text">
          <p className="Home">Home</p>
          <Link to="/projects" className="button-link">
            {" "}
            <p className="community">Community</p>
          </Link>
        </div>
        <Link to="/signup" className="button-link">
          <button className="landing-signup">Sign Up</button>
        </Link>
      </div>
      <div className="landinghero">
        <div className="landing-hero-catch">
          <h1 className="landing-hero-catch-title">
            We are made just for <span className="imptick">you</span> and your{" "}
            <span className="imptick">Audience</span>
          </h1>
          <p className="landing-hero-catch-text">
            {" "}
            Lift up your brand with iCreate. Create your Display pictures for
            events, campaigns and much more.{" "}
          </p>
        </div>
        <div className="landing-buttons">
          <Link to="/demo" className="button-link">
            <button className="demo">View Demo</button>
          </Link>
          <Link to="/login" className="button-link">
            <button className="getstarted">Get Started</button>
          </Link>
        </div>
        <img src={dashboard} alt="" className="cnter" />
        <div className="sponsors">
          <img src={i4g} alt="" />
          <img src={codeSandbox} alt="" />
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="footer">
        <div className="footer-gist">
          <img src={logo} alt="" className="logoes" />
          <div className="table">
            <div className="table1">
              <h3>Navigation</h3>
              <p>Community</p>
              <p>Pricing</p>
              <p>Contact us</p>
              <td>Cookies Policy</td>
            </div>
            <div className="table2">
              <h3>Legal</h3>
              <p>Home</p>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="under-hr"></div>
    </div>
  );
};

export default Landingpage;

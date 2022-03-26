import logo from '../Assets/realLogo.svg';
import {Link} from 'react-router-dom';
import dashboardLogo from '../Assets/element-3dashboard-icon.svg';
import createLogo from '../Assets/add-squarecreate-icon.svg';
import designLogo from '../Assets/pathdesign-icon.svg';
import projectLogo from '../Assets/layerprojects-icon.svg';
import settingsLogo from '../Assets/setting-2setting-icon.svg';
import logoutLogo from '../Assets/logoutlogout-icon.svg';

const SideDrawer = () => {
    const link = window.location.pathname.substring(1);
    console.log(link);
    let dadoard = "Dashboard";
    let create = "Create";
    let design = "Design";
    let project = "Projects";
    let settings = "Settings";

    return (  
        <div className="sidedrawer">
            <img src={logo} alt="Logo" className="side-logo"/>
            <ul className="side-pages">
                <li className={`side-links pr`}>
                    <img src={dashboardLogo} alt="Dashboard Logog" className='side-dash-logo' />
                    <Link to ="/dashboard" className="side-link">
                        <p>{dadoard}</p>
                    </Link>
                    <span className="side-lio"></span>
                </li>
                <li className={`side-links `}>
                    <img src={createLogo} alt="Create Logo" className='side-dash-logo'/>
                    <Link to ="/create" className="side-link">
                        <p>{create}</p>
                    </Link>
                </li>
                <li className={`side-links`}>
                    <img src={designLogo} alt="" className="side-dash-logo" />
                    <Link to ="/design" className="side-link">
                        <p>{design}</p>
                    </Link>
                </li>
                <li className={`side-links`}>
                    <img src={projectLogo} alt="" className="side-dash-logo" />
                    <Link to ="/projects" className="side-link">
                        <p>{project}</p>
                    </Link>
                </li>
                <li className={`side-links `}>
                    <img src={settingsLogo} alt="" className="side-dash-logo" />
                    <Link to ="/settings" className="side-link">
                        <p>{settings}</p>
                    </Link>
                </li>
                <li className="side-links" >
                    <img src={logoutLogo} alt="" className='side-dash-logo'/>
                    <p className='side-link' onClick={(e)=>{
                        localStorage.clear();
                        window.location.replace("/login");
                    }}>Logout</p>
                </li>
            </ul>
        </div>
    );
}
 
export default SideDrawer;
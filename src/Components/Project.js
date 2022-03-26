import SideDrawer from './SideDrawer';
import TopBar from './TopBar';
import axios from 'axios';
import { useParams } from "react-router";

const Project = () => {
    const {id} = useParams();
    const { data: project, isPending, error } = axios.get('http://localhost://4080/projects/' + id);
    return ( 
        <>
        <TopBar/>
        <SideDrawer/>
        <div className="project">
            <div className="project-main">
                
            </div>
        </div>
        </>
    );
}
 
export default Project;
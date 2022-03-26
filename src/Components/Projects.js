import arrowDown from '../Assets/arrow-downdrop-topbar-icon.svg';
import like from '../Assets/likebtn.svg';
import doc from '../Assets/document-textdoc-txt.svg';
import share from '../Assets/shareshare.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Projects = () => {
    const [isPending, setIsPending] = useState(true);
    const [show, setShow] = useState(true);
    const toggle = ()=>{
        setShow(!show);
    }
    const [projects, setProjects] = useState([]);
    const fetch = async() =>{
        const { data } =  await axios.get("http://localhost:4080/api/project");
        console.log(data);
        setProjects(data);
    }

    useEffect(() => {
        fetch();
        setIsPending(false);
    }, []);

    return (  
        <div className="projects">
            <div className="projects-main">
            <div className="projects-head">
                <h2 className="projects-head-title">Projects</h2>
                <p className="projects-head-filter">Filter <img src={arrowDown} alt="" /></p>
            </div>
            <div className="projects-box">
            {isPending ? <p className="projects-box-loading">Loading...</p> : projects.map((projects)=>{
                return(
            <div className="projectsbox" onClick={toggle}>
                    <div className="projects-projectsbox">
                        <div className="projects-projectbox-img">
                        <img src={projects.img} alt="" />
                    </div>
                    <div className="projects-projectbox-details">
                        <p className="projectbox-name">
                            {projects.projectName}
                        </p>
                        <div className="projectbox-hash">
                            <span className="projectbox-hashtag">{projects.hashTag}</span>
                        </div>
                        <div className="projectbox-goo">
                            <span className="projectbox-like">
                                <img src={like} alt="" />
                                <p className="like-num">{projects.likes}</p>
                            </span>
                            <span className="projectbox-like">
                                <img src={doc} alt="" />
                                <p className="like-num">{projects.doc}</p>
                            </span>
                            <span className="projectbox-like">
                                <img src={share} alt="" />
                                <p className="like-num">{projects.share}</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            )})}
            </div>
            <div className={ show ? "projectsbox-expanded-details" : "projectsbox-expanded-details live" }>
                <div className="left">
                    <div className="projectbox-img">
                        <img src={projects.img} alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="projectbox-details">
                        <p className="projectbox-name">
                            {projects.projectName}
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
 
export default Projects;
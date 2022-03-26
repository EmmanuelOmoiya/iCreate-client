import uploadIcon from '../Assets/document-uploadupload.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ImageEDitor from './ImageEditor';
const Create = () => {
    //let choose = document.getElementsByClassName('image-upload').click();
    const [projectName, setProjectName] = useState('');
    const [picture, setPicture] = useState("");
    const [description, setDescription] = useState('');
    const [hashTag, setHashTag] = useState('');
    const [basicInfo, setBasicInfo] = useState(true);
    const [ppLocation, setPpLocation] = useState(false);
    const [industry, setIndustry] = useState('Aerospace');
    const [isPending, setIsPending] =  useState(false);
    const [user, setUser] = useState('');
    const toggle1 = () =>{
        setBasicInfo(!basicInfo);
        setPpLocation(!ppLocation);
    }
    
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("userInfo");
        if(isLoggedIn){
            const foundUser = JSON.parse(isLoggedIn);
            setUser(foundUser);
        }
    }, []);
    let authorName = user.fullName;
    console.log(authorName);
    let authorImg = user.img;

    const uploadImage = async () => {
        const formData = new FormData();
        formData.append("Campaign-Image", picture);
        formData.append("upload_preset", "campaign-image");

        await axios.post("https://api.cloudinary.com/v1_1/dukwkk7ti/image/upload", formData)
        .then((res)=>{
            console.log(res, res.secure_url);
        })
        .catch((err)=>{
            console.log(err);
            alert(err);
        })
    };
    
    const uploadProject = async (e) =>{
        e.preventDefault();
        setIsPending(true);
        console.log('Posting');

        try{
            const { data } = await axios.post("http://localhost:4080/api/project", {projectName, description, industry, hashTag, authorName, authorImg});
                console.log(data);
                setIsPending(false);
                window.location.replace('/projects');
        } catch (error){
            console.log(error);
            if(error.response){
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            alert(error);
        }
    }

    return (  
        <>
        <div className="create">
            <h3 className="create-title">Create New DP Banner</h3>
            { basicInfo && <div className="create-main">
                <div className="create-head">
                    {/*<img src={progressBar} alt=""  className="progress"/>*/}
                </div>
                <div className="create-form">
                    <p className="create-form-title">Project Name</p>
                    <input type="text" className="create-form-input" placeholder='Project Name' value={projectName} required onChange={(e)=> setProjectName(e.target.value)}/>
                    <p className="create-form-title">Description</p>
                    <input type="text" className="create-form-input" placeholder='Description' value={description} required onChange={(e)=> setDescription(e.target.value)}/>
                    <p className="create-form-title">Industry</p>
                    <select name="" id="industry" className="create-form-option" value={industry} onChange={(e)=> setIndustry(e.target.value)}>
                        <option value="Aerospace" className="create-form-sct">Aerospace</option>
                        <option value="Aquatics">Aquatics</option>
                        <option value="Automobile">Automobile</option>
                    </select>
                    <p className="create-form-title">Hashtags</p>
                    <input type="text" className="create-form-input" placeholder='Hashtags e.g #CodeSandboxChallenge' value={hashTag} onChange={(e)=> setHashTag(e.target.value)} />
                    <p className="create-form-title">Campaign Image</p>
                    <div className="campaign-img">
                        <div className="campaign-img-top">
                            <img src={uploadIcon} alt="" className='designs-upload-icon campaign-uplic' />
                            <p className="uploadicon-tit" onClick="">Upload Image</p>
                            <input type="file" accept="image/*" name="image" id="" onChange={(e)=> setPicture(URL.createObjectURL(e.target.files[0]))} className="image-upload"/>
                        </div>
                        <p className="campaign-img-under">Maximum size of image should be 10MB</p>
                    </div>
                    <img src={picture && picture} alt="" className="picture-display"/>
                    <div className="buttons">
                        <button className="create-next" onClick={toggle1} >Next</button>
                    </div>
                </div>
            </div> }
            {ppLocation && 
                <div className="create-main imageedit">
                    <p className="create-title">Customise Dp</p>
                    <ImageEDitor  className="imEdit" picture={picture}/>
                    <button className="upload-image" onClick={uploadImage}>Upload Image</button>
                    <button className="upload-project" onClick={uploadProject}>
                        {isPending ? "Uploading Project..." : "Upload Project"}
                        </button>
                </div>
            }
        </div>
        <style jsx>{`
            .create{
                overflow: ${ppLocation ? 'hidden' : 'visible'};
            }
        `}</style>
        </>
    );
}
 
export default Create;
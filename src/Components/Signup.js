import logo from '../Assets/iCreateiCreate-logo.svg';
import { useState } from 'react';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [interchange, setInterChange] = useState(false);
    const info = [
        fullName,
        email,
        password
    ]

    const put = () =>{
        setInterChange(!interchange);
    }

    const Show = (content) =>{
        let x = document.getElementById("snackbar");
        x.innerHTML=`${content}`
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

    const submitForm = async (e) =>{
        e.preventDefault();
        console.log('Posting');
        if(!fullName || !email || !password ){
            Show("Please fil all the fields")
            return;
        }

        try{
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            alert(info)
            const { data } = await axios.post("http://localhost:4080/api/user", {fullName, email, password}, config)
                alert(data);
                localStorage.setItem("userInfo", JSON.stringify(data));
                window.location.replace('/dashboard');
        } catch (error){
            Show("An Error occured");
            console.log(error);
            alert(error);
        }
    }

    return (  
        <> 
        <div className="signup">
            <div className="left">
            </div>
            <div className="right">
                <img src={logo} alt="Yoo" className="logo"/>
                <form action="">
                    <h2 className="head-label">Sign Up</h2>
                    <label htmlFor="Fullname" className="name-label">
                        <p>Fullname</p>
                    </label>
                    <input className='signin-input' type="text" placeholder='Fullname' value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
                    <label htmlFor="Email" className="email-label">
                        <p>Email</p>
                    </label>
                    <input className='signin-input' type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="Password" className="password-label">
                        <p>Password</p>
                    </label>
                    <input className='signin-input' type={interchange ? 'text' : 'password'} placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <span className="icon-change"><FaRegEyeSlash onClick={put} className='iconst noeyes'/><IoEyeSharp onClick={put}  className='iconst eyes' /></span>
                    <p className="forgot">I agree to the <Link to='#' className='link'>Terms and Condition</Link> and <Link to="#" className='link'>Privacy Policy</Link></p>
                    <button className="submit" onClick={submitForm}>Sign Up</button>
                    <span className="under-btn">
                        <p className="dont">Have an account already?</p>
                        <Link to="/login" className='link'><p className="go-dont">Sign In</p></Link>
                    </span>
                </form>
            </div>
            <div className="snackbar">Hi</div>
        </div>
        <style jsx>{`
            .noeyes{
                display: ${interchange ? 'none' : 'block'}
            }
            .eyes{
                display: ${interchange ? 'block' : 'none'};
            }
    `   }</style>
    </>
    );
}
 
export default SignUp;
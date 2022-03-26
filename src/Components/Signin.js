import { Link } from 'react-router-dom';
import logo from '../Assets/iCreateiCreate-logo.svg';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [interchange, setInterChange] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const submitForm = async (e) =>{
        e.preventDefault();
        console.log('Posting');
        if(!email || !password ){
            Show("Please fil all the fields")
            return;
        }
        setIsPending(true);

        try{
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const { data } = await axios.post("https://icreate-server.herokuapp.com/api/user/login", {email, password} , config);
                localStorage.setItem("userInfo", JSON.stringify(data));
                setIsPending(false);
                window.location.replace('/dashboard');
        } catch (error){
            Show("An Error occured");
            console.log(error);
            if(error.response){
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            alert(error);
        }
    }

    function Show(content){
        var x = document.getElementById("snackbar");
        x.innerHTML=`${content}`
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

    const put = () =>{
        setInterChange(!interchange);
    }

    return ( 
        <> 
        <div className="signin">
            <div className="left">
            </div>
            <div className="right">
                <img src={logo} alt="Yoo" className="logo"/>
                <form action="">
                    <h2 className="head-label">Sign In</h2>
                    <label htmlFor="Email" className="email-label">
                        <p>Email</p>
                    </label>
                    <input className='signin-input' type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="Password" className="password-label">
                        <p>Password</p>
                    </label>
                    <input className='signin-input' type={interchange ? 'text' : 'password'} placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <span className="icon-change"><FaRegEyeSlash onClick={put} className='iconst noeyes'/><IoEyeSharp onClick={put}  className='iconst eyes' /></span>
                    <p className="forgot">Forgot password?</p>
                    { isPending ? <button className="submit" disabled>Signing In...</button> : <button className="submit"onClick={submitForm}>Sign In</button>}
                    <span className="under-btn">
                        <p className="dont">Don't have an account already?</p>
                        <Link to="/signup" className='link'><p className="go-dont">Sign Up</p></Link>
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
 
export default SignIn;
import React from "react";
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();

    const goToCreate = () => {
        navigate('/register');
    };

    const goToHome = () => {
        navigate('/landingpage');
    };

    return (
        <>
        <div className='circle'>
            <img src={'/assets/buslogo.png'} width={580} height={500}/>
        </div>
        <div className="Main"><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="LoginHeader">

            </div>
        <br/>
        <div className="inputs">
            <input className="username" placeholder="Username" style={{color: "black", marginLeft: '500px'}}/>
            <br/>
            <input className="password" placeholder="Password" type="password" style={{color: "black", marginLeft: '500px'}}/>
        </div>
        <br/>
        <div className="or">
            <button className="login" style={{marginLeft: '500px'}} onClick={goToHome}>LOG IN</button>
            <div className='or' style={{marginLeft: '500px', color: "black"}}>OR</div><br/>
            <button className="createnew" style={{marginLeft: '500px'}}onClick={goToCreate} >Create New Account</button>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    </div>
    </>
    );
}

export default Login;
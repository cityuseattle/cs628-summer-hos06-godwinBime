//import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Team(){
    // const [redirectToHome, setRedireectToHome] = useState(false);

    // const handleRedirectToHome = () =>{
    //     setRedireectToHome(true);
    // }

    // if(redirectToHome){
    //     return <Navigate to="/"/>
    // }
    let navigate = useNavigate();

    function redirectToHome(){
        navigate('/');
    }

    function goBack(){
        navigate(-1);
    }

    return(
        <div>
            <h2>This is a Team Component</h2>
            <div>
                <ul>
                     <li>
                        <Link to="/team/member/1">Member 1</Link>
                    </li>
                    <li>
                        <Link to="/team/member/2">Member 2</Link>
                    </li>
                    <li>
                        <Link to="/team/member/3">Member 3</Link>
                    </li>
                </ul>
                <button onClick={redirectToHome}>Redirect To Home</button>
                <br/>
                <button onClick={goBack}>Go Back</button>
            </div>
            <Outlet/>
        </div>
    );
}
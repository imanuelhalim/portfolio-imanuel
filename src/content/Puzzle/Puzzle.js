import React from "react";
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = process.env.REACT_APP_AUTH0_DOMAIN;  
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID; 

const Puzzle = () => {
    const displayMessage = function() {
        return console.log();
    }
    
    return(
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri="http://localhost:3000/puzzle/">
            <div className="wrapper-projects">
                <h1>Puzzle</h1>
                <div>This page is under construction</div>
                <LoginButton />
                <LogoutButton />
                {/* authernticantion
                firebase for databse
                */}
                <Profile />
                {displayMessage()}
            </div>
        </Auth0Provider>
    );
};

export default Puzzle;
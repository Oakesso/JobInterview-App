import React from "react";
import "../styles/Footer.css";

function Footer() {
    return (
        <div class="footer-container">
            <div >
                <ul class="ul-1" >
                    <li>
                        <h3>Get To Know Us:</h3>
                    </li>
                    <li>
                        <p>About</p>
                    </li>
                    <li>
                        <p>Blog</p>
                    </li>
                </ul>
            </div>
            <div class="ul-two">
                <ul class="ul-2">
                    <li>
                        <h3>Your Account:</h3>
                    </li>
                    <li>
                        <p>Profile</p>
                    </li>                
                </ul>
            </div>
            <div class="ul-three">
                <ul class="ul-3">
                    <li>
                        <h3>Contact Us:</h3>
                    </li>
                    <li>
                        <p>@Facebook Page</p>
                    </li>
                    <li>
                        <p>@Twitter</p>                     
                    </li> 
                    <li>
                        <p>@Instagram</p>                     
                    </li> 
                    <li>
                        <p>Support</p>                     
                    </li>                                              
                </ul>           
            </div>
        </div>
    )
}

export default Footer;
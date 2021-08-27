import React from "react";
import Footer from "./../components/Footer";
import NavMain from "./../components/NavMain";
import { NavLink } from "react-router-dom";
import "../styles/Home.css";

class Home extends React.Component {
  render() {    
    return (      
      <div class="home-global-container">

        <NavMain />

        <div class="home-main-container">

          <div class="home-main-container-1">

            <div class="home-main-container-a">

              <div>
                <h1 class="catch-phrase">Crack the web dev job interview.</h1>
              </div>      
              <div>
                <p class="explications">Get trained to web development technical interviews. We help you with your job interview training. Because job interviewing prep is a job itself.</p>
              </div>
              <div class="sign-up-btn">
                <NavLink to="/signup" >Sign Up</NavLink>              
              </div>
              <div class="sign-in-btn">
                <NavLink to="/signin" >Log in</NavLink>
              </div>
            </div>

            <div class="home-main-container-b">    
                <img src="https://drive.google.com/uc?id=1J3d2aK2aosbbcEpyyCvxnts_YRV5znTj#xxx.gif​" alt="home-img" class="home-img" />  
            </div>

          </div>
        
          <div class="home-main-container-2">

            <div class="home-main-container-c">
              <Footer />
            </div>

          </div>

        </div> 

      </div>
    );
  }
}

export default Home;

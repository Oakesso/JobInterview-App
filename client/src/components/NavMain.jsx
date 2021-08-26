import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";

import "../styles/NavMain.css";

const NavMain = (props) => {
  const { context } = props;

  // console.log("context: ", context.user);

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <nav className="NavMain">
      <NavLink exact to="/">
        {/* <h3 className="logo">App name</h3> */}
        <img class="img-logo" src="https://drive.google.com/uc?id=1psCzGvZ4tPr_zHbgl5A6Rj826jBMX_LD#xxx.png" alt="logo-img" />
        
      </NavLink>      
      <ul className="nav-list">
        {context.isLoggedIn && (
          <React.Fragment>
            {/* <li>
               {context.isLoggedIn && context.user.isAdmin === true && (
                <NavLink to="/create-questions">
                  {context.isLoggedIn} Admin
                </NavLink>            
                )}
            </li>  */}
            <li className="email-usr-display" >
              <NavLink to="/profile">
                {context.user && context.user.email}
              </NavLink>
            </li>
            <li>
              <p onClick={handleLogout}>Logout</p>
            </li>
                       
          </React.Fragment>
        )}
        {!context.isLoggedIn && (
          <React.Fragment>
            <li>
              <NavLink to="/signin">Log in</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Create account</NavLink>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default withUser(NavMain);

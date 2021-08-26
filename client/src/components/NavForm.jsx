import React from 'react';
import { NavLink } from 'react-router-dom';
import { withUser } from "../components/Auth/withUser";
import "./../styles/NavForm.css"

const NavForm = (props) => {
    const { context } = props;

    // console.log("context 1 : ", context.user);
    // console.log("isAdmin : ", context.user.isAdmin);

    if (context.user.isAdmin === false) {
        return (
            <nav className="NavForm">
                <ul className="nav-list">                    
                    <li>
                        <NavLink to="/read-questions">Read</NavLink>
                    </li>      
                </ul>
            </nav>            
            )
    } else if (context.user.isAdmin === true) {
        return (
            <nav className="NavForm">
                <ul className="nav-list">
                    <li>
                        <NavLink to="/create-questions">Create</NavLink>
                    </li>
                    <li>
                        <NavLink to="/read-questions">Read</NavLink>
                    </li>
                    <li>
                        <NavLink to="/update-questions">Update</NavLink>
                    </li>
                    <li>
                        <NavLink to="/delete-questions">Delete</NavLink>
                    </li>
      
                </ul>
            </nav>            
            )
    }
}

export default withUser(NavForm);


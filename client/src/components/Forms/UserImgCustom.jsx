import React from 'react';
import { withUser } from '../Auth/withUser';
import "../../styles/UserImgCustom.css"

const UserImgProfile = (props) => {
    const { context } = props;

    const uri = ["https://e-cdns-images.dzcdn.net/images/user/27b2da4789262e3b828a8ec6587dd8aa/264x264-000000-80-0-0.jpg"]
    
    return (
            <div class="div-profile">
                <img  className="img-profile" src={uri[0]}  alt="profile-img" />
                <h1 className="username-profile">{context.user.username}</h1>
            </div>
                     
        )
    };

export default withUser(UserImgProfile);    


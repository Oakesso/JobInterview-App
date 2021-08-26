import React from "react";
import NavMain from "./../components/NavMain";
import NavForm from "../components/NavForm";
import { withUser } from "../components/Auth/withUser";
import UserImgProfile from "../components/Forms/UserImgCustom"
import Footer from "../components/Footer";
import "../styles/Profile.css";

const Profile = (props) => {
  const { context } = props;

  console.log("context 1 : ", context.user);
  console.log("isAdmin : ", context.user.isAdmin);

  return (
    <div className="profile">
      <NavMain />
      <NavForm />
      <UserImgProfile />
      {/* <h1>{context.user.username}</h1> */}
      <div class="home-main-container-c">
        <Footer />
      </div>

    </div>
  );
};

export default withUser(Profile);

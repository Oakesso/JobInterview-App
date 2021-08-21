import React from "react";
import Footer from "./../components/Footer";

class Home extends React.Component {
  render() {    
    return (
      <div>        
          <h1>Home Page</h1>      
        <div>{ Footer() }</div>
      </div>
    );
  }
}

export default Home;

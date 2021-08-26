import React from 'react';
import Footer from "./../components/Footer";
import NavMain from "./../components/NavMain";
import NavForm from "./../components/NavForm";
import UpdateForm from './../components/Forms/UpdateForm';
import "../styles/UpdateQuestion.css"

class UpdateQuestion extends React.Component {
    render() {
        return ( 
            <div className="update-question">
                <NavMain />        
                <NavForm />
                <UpdateForm />
                <Footer />
            </div>
      )
    }
};

export default UpdateQuestion;
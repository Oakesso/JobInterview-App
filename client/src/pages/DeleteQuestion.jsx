import React from 'react';
import Footer from "./../components/Footer";
import NavMain from "./../components/NavMain";
import NavForm from "./../components/NavForm";
import DeleteForm from './../components/Forms/DeleteForm';
import "../styles/DeleteQuestion.css"

class DeleteQuestion extends React.Component {
    render() {
        return ( 
            <div className="delete-question">
                <NavMain />        
                <NavForm />
                <DeleteForm />            
                <Footer />
            </div>
      )
    }
};

export default DeleteQuestion;
import React from 'react';
import Footer from "./../components/Footer";
import NavMain from "./../components/NavMain";
import NavForm from "./../components/NavForm";
import CreateForm from '../components/Forms/CreateForm';
import "../styles/CreateQuestion.css"

class CreateQuestion extends React.Component {
    render() {
        return ( 
            <div className="create-question">
                <NavMain />        
                <NavForm />
                <div className="create-form">
                    <CreateForm />
                </div>
                <Footer />
            </div>
      )
    }
};

export default CreateQuestion;
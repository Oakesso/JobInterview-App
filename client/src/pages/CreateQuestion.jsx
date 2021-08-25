import React from 'react';
import Footer from "./../components/Footer";
import NavMain from "./../components/NavMain";
import NavForm from "./../components/NavForm";
import CreateForm from '../components/Forms/CreateForm';

class CreateQuestion extends React.Component {
    render() {
        return ( 
            <div>
                <NavMain />        
                <NavForm />
                <CreateForm />
                <Footer />
            </div>
      )
    }
};

export default CreateQuestion;
import React from 'react';
import Footer from "./../components/Footer";
import NavMain from "./../components/NavMain";
import NavForm from "./../components/NavForm";
import DeleteForm from './../components/Forms/DeleteForm';

class DeleteQuestion extends React.Component {
    render() {
        return ( 
            <div>
                <NavMain />        
                <NavForm />
                <DeleteForm />
                <Footer />
            </div>
      )
    }
};

export default DeleteQuestion;
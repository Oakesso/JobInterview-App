import React from 'react';
import Footer from "./../components/Footer";
import NavMain from "./../components/NavMain";
import NavForm from "./../components/NavForm";
import ReadForm from './../components/Forms/ReadForm';

class ReadQuestion extends React.Component {
    render() {
        return ( 
            <div>
                <NavMain />        
                <NavForm />
                <ReadForm />
                <Footer />
            </div>
      )
    }
};

export default ReadQuestion;

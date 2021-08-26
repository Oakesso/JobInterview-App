import React from 'react';
import Footer from "./../components/Footer";
import NavMain from "./../components/NavMain";
import NavForm from "./../components/NavForm";
import ReadForm from './../components/Forms/ReadForm';
import "../styles/ReadQuestion.css"

class ReadQuestion extends React.Component {
    render() {
        return ( 
            <div className="read-question">
                <NavMain />        
                <NavForm />
                <ReadForm />
                <Footer />
            </div>
      )
    }
};

export default ReadQuestion;

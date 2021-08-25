import React, { Component} from 'react';
import apiHandler from '../../api/apiHandler';


class ReadForm extends Component {

    state = {
        question: '',
        answer: '', 
        category: '',
        level: '',
    };       

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    // call of api handler see in "apiHandler.js".
    // api connect to mongo and create new data record.        
    handleSubmit = (event) => {
        event.preventDefault();
        // axios handler for api call.
        apiHandler   
        .postQA(this.state)
        .then((data) => {
            this.props.context.setUser(data);

            // set state to initial values.                
        }).catch((error) => {console.log(error)});                       
    }



    render() {
        return ( 
            <div>
                Update Page
            </div>
      )
    }
};

export default ReadForm;
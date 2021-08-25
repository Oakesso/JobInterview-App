import React, { Component } from "react";
import apiHandler from "../../api/apiHandler";

import "./../../styles/CreateForm.css";

class CreateForm extends Component {
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
                <form class="QAForm" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="question" >Type in your question here: 
                            <input type="text" id="question" name="question" class="qestion" value={this.state.question} onChange={(e) => {this.handleChange(e)}} placeholder="your question"/>
                        </label>
                    </div>

                    <div>
                        <label htmlFor="answer">Type in your answer here: 
                            <input type="text" id="answer" name="answer" class="answer" value={this.state.answer} onChange={(e) => this.handleChange(e)} placeholder="your answer"/>                                 
                        </label>
                    </div>

                    <div>
                        <label htmlFor="category">Category
                            <select 
                            name="category" 
                            id="category" 
                            class="category"
                            value={this.state.category} 
                            onChange={(e) => this.handleChange(e)}>
                                <option value=""></option>
                                <option value="HTML">html</option>
                                <option value="CSS">css</option>
                                <option value="Javascript">javascript</option>
                                <option value="React">reactjs</option>
                                <option value="NodeJS">nodejs</option>
                            </select>                           
                        </label>
                    </div>

                    <div>
                        <label htmlFor="level">Level
                            <select 
                                name="level" 
                                id="level" 
                                class="level"
                                value={this.state.level} 
                                onChange={(e) => this.handleChange(e)}>
                                <option value=""></option>
                                <option value="basic">basic</option>
                                <option value="medium">medium</option>
                                <option value="expert">expert</option>
                            </select>                            
                        </label>                            
                    </div>

                    <input type="submit" value="Send" />

                </form>           
            </div>        
        )}
}

export default CreateForm;    

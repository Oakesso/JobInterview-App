import React, { Component} from 'react';
import apiHandler from '../../api/apiHandler';
import axios from "axios";


class UpdateForm extends Component {
    // initial state of our data.
    state = {
        _id: '',
        question: '',
        answer: '', 
        category: '',
        level: '',
    }      

    handleChange = (event) => {            
        this.setState({
          [event.target.name]: event.target.value,
        });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();    
        console.log("this.state :", this.state)
        const newQuestion = {
            _id: this.state._id,
            question: this.state.question,
            answer: this.state.answer,
            category: this.state.category,
            level: this.state.level,
          };
        // const _id = this.state.match._id;
        apiHandler   
        .updateQA(this.state)
        .then((apiResponse) => { 
            console.log("apiResponse: ", apiResponse);
        })
        .catch((error) => {console.log(error)});
      };
    
      render() {
        return (
            <div>   
                <h1>Hello Edit</h1>
                <form onSubmit={this.handleSubmit}>            
                <div>
                    <label htmlFor="_id">_id</label>
                    <input
                    type="text"
                    id="_id"
                    name="_id"
                    value={this.state._id}
                    onChange={this.handleChange}/>
                </div>                          
                <div>
                    <label htmlFor="question">Question</label>
                    <input
                    type="text"
                    id="question"
                    name="question"
                    value={this.state.question}
                    onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="answer">Answer</label>
                    <input
                    type="text"
                    id="answer"
                    name="answer"
                    value={this.state.answer}
                    onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="category">Category</label>
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
                </div>
                <div>
                    <label htmlFor="level">Level</label>
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
                </div>            
              <button>Submit</button>
            </form>
          </div>
        );
      }
    }

export default UpdateForm;
import React, { Component } from 'react';
// import apiHandler from '../../api/apiHandler';
import { withRouter } from "react-router-dom";
import { withUser } from "../Auth/withUser";
import axios from 'axios';
// require("dotenv").config();

class UpdateForm extends Component {
  state = {
      allQuestions: [],
      };       

  // componentDidMount() {    
  //   axios
  //     .get( process.env.REACT_APP_BACKEND_URL + "/api/qa")
  //     .then((apiResponse) => {
  //       console.log("apiResponse 1 : ", apiResponse.data);
  //       this.setState({
  //         allQuestions: apiResponse.data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   };

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    });
}

  handleUpdate = (event) => {
    event.preventDefault();

    const newData = {
      question: this.state.question,
      answer: this.state.answer,
      category: this.state.category,
      level: this.state.level,
    };
    // const id = this.props.match.params.id;
    // console.log("id : ", this.state._id);
    // console.log("this.props.match.params.id :", this.props.match.params.id);
   
    // console.log("this.state : ", this.state);

    axios
    .patch(process.env.REACT_APP_BACKEND_URL + "/api/qa/" + this.state._id, newData)
    .then((apiResponse) => {
      // console.log("apiResponse : ", apiResponse.data);
    })
    .catch((error) => {
      // console.log(error);
    });
  };
          
  render() {
    return (
        <div>   
            <h1>Edit Question - Answer</h1>
            <form onSubmit={this.handleUpdate}>            
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
                onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="answer">Answer</label>
                <input
                type="text"
                id="answer"
                name="answer"
                value={this.state.answer}
                onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select 
                    name="category" 
                    id="category" 
                    class="category"
                    value={this.state.category}
                    onChange={this.handleChange}>
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
                    onChange={this.handleChange}>
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

export default withRouter(withUser(UpdateForm));
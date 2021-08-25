import React from 'react';
import apiHandler from '../../api/apiHandler';
// import { withRouter } from "react-router-dom";


class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    // initial state of our data.
    this.state = {
      // _id: '',
      question: '',
      answer: '', 
      category: '',
      level: '',
    }    
  }

  getData() {
    apiHandler   
      .updateQA(this.state)
      .then((apiResponse) => { 
          console.log("apiResponse: ", apiResponse);
          const id = this.props.match.params.id;
          if (this.props.action === "update") {
            console.log("this.props.action: ", this.props.action);
          // use of axios with apiHandler          
          };
      })
      .catch((error) => {console.log(error)});
  }
      
  componentDidMount() {
    this.getData();
    
  };

  handleChange = (event) => {            
      this.setState({
        [event.target.name]: event.target.value,
      });
    };
        
  handleSubmit = (event) => {
    event.preventDefault();    
    console.log("this.state :", this.state);
    console.log("this.props :", this.props);
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
                onChange={(e) => this.handleChange(e)}/>
            </div>                          
            <div>
                <label htmlFor="question">Question</label>
                <input
                type="text"
                id="question"
                name="question"
                value={this.state.question}
                onChange={(e) => this.handleChange(e)}
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
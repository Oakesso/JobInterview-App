import React, { Component } from "react";
import apiHandler from "../../api/apiHandler";
import NavMain from "../NavMain";
import "./../../styles/QAForm.css";

class QAForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: '', 
            category: '',
            level: '',
        };       
    }

    handleQuestionInput = (event) => {
        this.setState({
            question: event.target.value            
        })
    }

    handleAnswerInput = (event) => {
        this.setState({
            answer: event.target.value
        })
    }

    handleCategoryInput = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleLevelInput = (event) => {
        this.setState({
            level: event.target.value
        })
    }
    
    // handleSubmit = (event) => {
    //     event.preventDefault();
        
    //     apiHandler
    //     .postQA(this.state)
    //     .then((data) => {
    //         this.props.context.setUser(data);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // };

    render() {
        return (
            <div>                
                <NavMain />
                <h1>QAForm :</h1> {/* title in body */}
                <form class="QAForm" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="question" >Your Question Here</label>
                        <input type="text" id="question" name="question" class="qestion" value={this.state.question} onChange={(e) => {this.handleChange(e)}} placeholder="your question"/>
                    </div>

                    <div>
                        <label htmlFor="answer">Your Answer Here</label>
                        <input type="text" id="answer" name="answer" class="answer" value={this.state.answer} onChange={(e) => this.handleChange(e)} placeholder="your answer"/>                                 
                    </div>

                    <div>
                        <label htmlFor="category">Category</label>
                        <input type="text" id="category" name="category" class="category" value={this.state.category} onChange={(e) => this.handleChange(e)} placeholder="HTML, CSS, Javascript, React or NodeJS"/>
                            {/* <select type="text" id="typeQA" name="typeQA" class="typeQA">
                                <option value=""></option>
                                <option value={this.state.category} onChange={this.handleChange}>Html</option>
                                <option value={this.state.category} onChange={this.handleChange}>Css</option>
                                <option value={this.state.category} onChange={this.handleChange}>Javascript</option> 
                                <option value={this.state.category} onChange={this.handleChange}>React</option> 
                                <option value={this.state.category} onChange={this.handleChange}>Node</option> 
                            </select> */}
                    </div>

                    <div>
                        <label htmlFor="level">Level</label>
                        <input type="text" id="level" name="level" class="level" value={this.state.answer} onChange={(e) => this.handleChange(e)} placeholder="basic, medium, or expert"/>
                            {/* <select type="text" id="typeLevel" name="typeLevel" class="typeLevel">
                                <option value=""></option>
                                <option value="basic">Basic</option>
                                <option value="medium">Medium</option>
                                <option value="expert">Expert</option>
                            </select>                             */}
                    </div>

                    <button>Submit</button>   

                </form>           
            </div>        
        )}
}

export default QAForm;    

import React from 'react';
import apiHandler from "../../api/apiHandler";

// display questions element on screen.
class ReadForm extends React.Component {
    state = {
        allQuestions: [],
    }

    componentDidMount() {
        apiHandler   
        .getQA(this.state)
        .then((apiResponse) => { 
            console.log(apiResponse);
            this.setState({
                allQuestions: apiResponse,
            });
        })
        .catch((error) => {console.log(error)});    
    }
    render() {
        return (
            <ul>                         
            {this.state.allQuestions.map((question) =>{
                return (
                    <li>                    
                        <div>
                            - {question._id} // Your Questions Array size is : {this.state.allQuestions.length}
                        </div>
                        <br></br>
                        <div>
                            - {question.question}
                        </div>
                        <br></br>
                        <div>
                            - {question.answer}
                        </div>
                        <br></br>
                        <div>
                            - {question.category}
                        </div>
                        <br></br>
                        <div>
                            - {question.level}
                        </div>
                        <br></br>
                    </li>
                )
            })}
            </ul>
        )
    }
}
 
export default ReadForm;



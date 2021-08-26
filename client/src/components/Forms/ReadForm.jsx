import React from 'react';
import apiHandler from "../../api/apiHandler";
import "../../styles/ReadForm.css"

// display questions element on screen.
class ReadForm extends React.Component {
    state = {
        allQuestions: [],
        count: 0,
    }

    componentDidMount() {
        apiHandler   
        .getQA(this.state)
        .then((apiResponse) => { 
            // console.log("apiResponse", apiResponse);
            this.setState({
                allQuestions: apiResponse,
            });
            // console.log("this.state.allQuestions : ", this.state.allQuestions);
        })
        .catch((error) => {console.log(error)});    
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1,
        });
    };

    handleNothing = () => {
        console.log("Nothing here !", this.state.count)
    };
    
    render() {
        const { allQuestions } = this.state;
        // console.log("this.state A: ", this.state);
        // console.log("this.state.count : ", this.state.count);
        
        // at 1rst state.allQuestion is undefined.
        // we want defined values.
        if (this.state.count === -1 || this.state.count === this.state.allQuestions.length) {
            if (this.state.count <= -1) {
                console.log("this.state.count : ", this.state.count);
                this.state.count = -1; 
                return (
                    <div>  
                        <div>--- </div>
                        <button onClick= {this.handleNothing}>previous</button>
                        <button onClick= {this.handleIncrement}>next</button>
                        <p>---</p>
                    </div>
                );
            }
            if(this.state.count >= this.state.allQuestions.length) {
                this.state.count = this.state.allQuestions.length;
                return (
                    <div>  
                        <div>--- </div>
                        <button onClick= {this.handleDecrement}>previous</button>
                        <button onClick= {this.handleNothing}>next</button>
                        <p>---</p>
                    </div>
                );
            }            
        } else  if (this.state.allQuestions.length !== 0) {
            // console.log("this.state.allQuestions A: ", this.state.allQuestions);
            // console.log("this.state.allQuestions[1]._id A: ", this.state.allQuestions[1]._id);
            // console.log('this.state.count A: ', this.state.count)
            return (
                <div>  
                    <div>Q { this.state.count }  : { this.state.allQuestions[this.state.count].question }</div>
                    <button onClick= {this.handleDecrement}>previous</button>
                    <button onClick= {this.handleIncrement}>next</button>
                    <p>{ this.state.count } / { this.state.allQuestions.length - 1}</p>               
                </div>
            );            
        } 
    }
}
 
export default ReadForm;


{/* <ul className="ul-readform">                         
{this.state.allQuestions.map((question, count) =>{
    return (
        <li className="li-readform">                    
            <div className="id-bundle">
                - {question._id}  Your Questions Array size is : {this.state.allQuestions.length}
            </div>
            
            <div className="question-bundle">
                - {question[0]} 
            </div>
            
            <div className="answer-bundle">
                - {question.answer}
            </div>
            
            <div className="category-bundle">
                - {question.category}
            </div>
            
            <div className="level-bundle">
                - {question.level}
            </div>

            <button onClick= {this.handleDecrement}>previous</button>
            <button onClick= {this.handleIncrement}>next</button>
            <p>{this.state.count}</p>
            
            
        </li>                        
    )
})}
</ul> */}
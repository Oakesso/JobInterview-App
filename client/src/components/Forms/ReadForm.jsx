import React, { Component } from 'react';
import apiHandler from "../../api/apiHandler";
import axios from 'axios';
 
class ReadForm extends Component {
    state = {
        question: ""
    }
 
    // componentDidMount() {
    //     axios.get("localhost:5000/api/qa")
    //     .then(response => {
    //         // console.log("toto");
    //         this.setState({question: response.question});
    //     })
    // }

    // apiHandler   
    // .postQA(this.state)
    // .then((data) => {
    //     this.props.context.setUser(data);

    //     // set state to initial values.                
    // }).catch((error) => {console.log(error)}); 

 
    render() {
        return (
            <div>
                TOTO { this.state.question}
            </div>
        );
    };
}
 
export default ReadForm;



// import React, { Component} from 'react';
// import apiHandler from '../../api/apiHandler';

// const ReadForm = (props) => {
//     return (
//         <div>
//             <h2>{props.question}</h2>
//             {props.data.map((unit) => {
//                 return (
//                     <ul>
//                         <li>{unit.question}</li>
//                         <li>{unit.answer}</li>
//                         <li>{unit.category}</li>
//                         <li>{unit.level}</li>
//                     </ul>
//                 )
//             })}
//         </div>
//     )
// }

// class ReadForm extends Component {
//     state = {
//         question: '',
//         answer: '', 
//         category: '',
//         level: '',
//     };       
       
//     handleSubmit = (event) => {
//         apiHandler   
//         .getQA(this.state)
//         .then((response) => {            
//             this.props.setState({category: response.category})
//         // set state to initial values.                
//         }).catch((error) => {console.log(error)});                       
//     }

//     render() {
//         return (
//             <div>                                
//                   Toto {this.state.category} Tata
//             </div>        
//         )
//     }
// };

// export default ReadForm;
import React from 'react';
import axios from 'axios';

const url = "http://localhost:5000/api/qa/";

export default class PersonList extends React.Component {
    state = {
        history: []
    }
    componentDisMount() {
        axios.get(url).then((res) => {
            const history = res.data;
            this.setState({ persons });
        })
    }
    render() {
        return (
            <ul>
                { this.state.history.map(history => <li>{history}</li>)}
            </ul>
        )
    }
}

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'A', age: 1 },
            { name: 'B', age: 2 },
            { name: 'C', age: 3 },
        ],
    };

    clickMeHandler = () => {
        //console.log('I thought you wont click');
        this.setState({
            persons: [
                { name: 'Ais', age: 10 },
                { name: 'B', age: 20 },
                { name: 'C', age: 30 },
            ],
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, I am learning React</h1>
                <p>It works</p>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}>
                    I am the children prop
                </Person>

                <button onClick={this.clickMeHandler}>Click me</button>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                />
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
            </div>
        );
    }
}

export default App;

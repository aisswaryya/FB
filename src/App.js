import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 },
        ],
        otherState: 'some other value',
    };

    switchNameHandler = (newAge) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                { name: 'Max', age: newAge },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 26 },
            ],
        });
    };

    nameChangedHandler = (event) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                { name: event.target.value, age: 28 },
                { name: 'booba', age: 29 },
                { name: 'Stephanie', age: 26 },
            ],
        });
    };
    render() {
        const designStyle = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid green',
            padding: '8px',
            cursor: 'pointer',
        };
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={designStyle}
                    onClick={() => this.switchNameHandler('40')}>
                    Switch Name
                </button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    changed={this.nameChangedHandler}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Rakku')}>
                    My Hobbies: Racing
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;

{
}

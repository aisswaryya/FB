import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
    const [personState, setPersonState] = useState({
        persons: [
            { name: 'A', age: 1 },
            { name: 'B', age: 2 },
            { name: 'C', age: 3 },
        ],
    });

    const clickMeHandler = () => {
        setPersonState({
            persons: [
                { name: 'Ais', age: 10 },
                { name: 'B', age: 20 },
                { name: 'C', age: 40 },
            ],
        });
    };

    return (
        <div className="App">
            <h1>Hi, I am learning React</h1>
            <p>It works</p>
            <Person
                name={personState.persons[0].name}
                age={personState.persons[0].age}>
                I am the children prop
            </Person>

            <button onClick={clickMeHandler}>Click me</button>
            <Person
                name={personState.persons[1].name}
                age={personState.persons[1].age}
            />
            <Person
                name={personState.persons[2].name}
                age={personState.persons[2].age}
            />
        </div>
    );
};

export default app;

// class App extends Component {
//     state = {
//         persons: [
//             { name: 'A', age: 1 },
//             { name: 'B', age: 2 },
//             { name: 'C', age: 3 },
//         ],
//     };

//     clickMeHandler = () => {
//         console.log('I thought you wont click');
//         this.setState({
//             persons: [
//                 { name: 'Ais', age: 10 },
//                 { name: 'B', age: 20 },
//                 { name: 'C', age: 30 },
//             ],
//         });
//     };

//     render() {

//     }
// }

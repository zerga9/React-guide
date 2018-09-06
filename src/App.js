import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons: [
      { name: "Gadiza", age: 43 },
      { name: "Manu", age: 44 },
      { name: "Stephanie", age: 45 },
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // don't do this; this.state.persons[0].name = 'Gadiza Zerari'
    this.setState({persons: [
      { name: newName, age: 43 },
      { name: "Manu", age: 44 },
      { name: "Stephanie", age: 44 },
    ]
  })
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name: 'Gadiza', age: 43 },
      { name: event.target.value, age: 44 },
      { name: "Stephanie", age: 44 },
    ]
  })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

   let persons = null;

   if ( this.state.showPersons ) {
     persons = (
       <div>
       {this.state.persons.map(person => {
         return <Person
         name={person.name}
         age={person.age} />
       })}
     </div>
   );
   }

    return (
      <div className="App">
        <h1> Hi, Im a React App</h1>
        <p>This is really working</p>
        <button
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;

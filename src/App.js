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

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})

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
       {this.state.persons.map((person, index) => {
         return <Person
         click={() => this.deletePersonHandler(index)}
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

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Terza", age: 18 },
      { id: 2, name: "Manu", age: 19 },
      { id: 3, name: "Stephanie", age: 20 },
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();// with slice you simply copy the full array so you don't mutate the persons itself

    // don't update state with first changing state. You need to create a copy and change that and then update the state with setState
    // or with the spread operator; const persons = [...this.state.persons]
    persons.splice(personIndex, 1);//this simly removes one element from the array
    this.setState({persons: persons})

  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id //return true or false
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {persons: persons} );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
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
         key={person.id} //also components need key-property
         click={() => this.deletePersonHandler(index)}
         name={person.name}
         age={person.age}
         changed={(event) => this.nameChangedHandler(event, person.id)} />
       })}
     </div>
   );

   style.backgroundColor = 'red';
   }

   let classes = [];

   if (this.state.persons.length <= 2) {
     classes.push('red'); // classes = ['red']
   }
   if (this.state.persons.length <= 1) {
     classes.push('bold'); //classes = ['red', 'bold']
   }

    return (
      <div className="App">
        <h1> Hi, I am a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
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

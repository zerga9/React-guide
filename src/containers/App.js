import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons'


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
      return p.id === id; //return true or false
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

   let persons = null;

   if ( this.state.showPersons ) {
     persons = <Persons
           persons={this.state.persons}
           clicked={this.deletePersonHandler}
           changed={this.nameChangedHandler} />
     ;
   }


    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons: [
      { name: "Gadiza", age: 43 },
      { name: "Manu", age: 44 },
      { name: "Stephanie", age: 45 },
    ]
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

  render() {
    return (
      <div className="App">
        <h1> Hi, Im a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
        <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} />
        <Person
         name={this.state.persons[1].name}
         age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this, 'Max')} >My Hobbies: Racing</Person>
        <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;

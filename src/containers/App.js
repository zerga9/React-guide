import React, { PureComponent } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons'
// only use PureComponent if updates are not required!!

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: 1, name: "Terza", age: 18 },
        { id: 2, name: "Manu", age: 19 },
        { id: 3, name: "Stephanie", age: 20 },
      ],
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] inside componentDidMount()')
  }
// Don't need shouldComponentUpdate because you use PureComponent
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE App.js] inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  //   //when you return false it never updates the DOM!!!
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] inside componentWIllUpdate()', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE App.js] inside componentDidUpdate')
  }

  // state = {
  //   persons: [
  //     { id: 1, name: "Terza", age: 18 },
  //     { id: 2, name: "Manu", age: 19 },
  //     { id: 3, name: "Stephanie", age: 20 },
  //   ],
  //   showPersons: false
  // }

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
    console.log('[App.js] inside render()')

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
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
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

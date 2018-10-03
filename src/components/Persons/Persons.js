import React, { PureComponent } from 'react';
import Person from './Person/Person';

//PureComponent checks automatically the shouldComponentUpdate(), so you don't have to write it!!
class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[Persons.js] inside componentDidMount()')
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE Persons.js] inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons ||
  //       nextProps.changed !== this.props.changed ||
  //       nextProps.clicked !== this.props.clicked;
  //       // return true;
  //
  //   //when you return false it never updates the DOM!!!
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE Persons.js] inside componentWIllUpdate()', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE Persons.js] inside componentDidUpdate')
  }

  render () {
    console.log('[Persons.js] inside render()')
    return this.props.persons.map((person, index) => {
      // you can return an array of elements, not elements next to each other
      return <Person
      click={() => this.props.clicked( index )}
      position={index}
      name={person.name}
      age={person.age}
      key={person.id}
      changed={(event) => this.props.changed(event, person.id)} />

    } );
  }
}

  export default Persons

import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[Person.js] inside componentDidMount()')
  }

  componentWillReceiveProps(nextProps){
    console.log('[UPDATE Persons.js] inside componentWillReceiveProps', nextProps);
  }




  render(){
    console.log('[Person.js] inside render()')

  return (
    <Aux>
      <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!!</p>
      <p>{this.props.children}</p>
      <input type='text' onChange={this.props.changed} value={this.props.name}/>
  </Aux>)
};
}

export default withClass(Person, classes.Person);

import React, { Component } from 'react';
import classes from './Person.css';


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

  shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE Persons.js] inside shouldComponentUpdate()', nextProps, nextState);
    return nextProps.persons !== this.props.persons;
    //when you return false it never updates the DOM!!!
  }

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE Persons.js] inside componentWIllUpdate()', nextProps, nextState);
  }


  render(){
    console.log('[Person.js] inside render()')

  return (
    <div className={classes.Person}>
      <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!!</p>
      <p>{this.props.children}</p>
      <input type='text' onChange={this.props.changed} value={this.props.name}/>
  </div>)
};
}

export default Person;

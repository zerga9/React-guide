import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[Person.js] inside componentDidMount()')
    // this.inputElement.focus();//the element will be focused upon. Here it will be the last element because there is only one element that can be focussed upon at a time
  if (this.props.position === 0){
    this.inputElement.current.focus();//now you are refering to the first element of input
  }
  }
  //use reference only for focus or mediaplayback, not for styling!!

  componentWillReceiveProps(nextProps){
    console.log('[UPDATE Persons.js] inside componentWillReceiveProps', nextProps);
  }




  render(){
    console.log('[Person.js] inside render()')

  return (
    <Aux>
      <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!!</p>
      <p>{this.props.children}</p>
      <input
        ref={this.inputElement} //property of this class that gives access to this input. Only use reference in statefull components!!
        type='text'
        onChange={this.props.changed}
        value={this.props.name}/>
    </Aux>)
  };
}
// with PropTypes you can controll which property you can pass on
Person.propTypes = {
  click: PropTypes.func, //the value of the clickproperty has to be a function
  name: PropTypes.string, //the prop of name has to be a string
  age: PropTypes.number, //the prop for age has to be a number
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);

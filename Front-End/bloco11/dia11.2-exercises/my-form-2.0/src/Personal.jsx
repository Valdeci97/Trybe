import { Component } from "react";
import Name from './Components/Name';
import Email from "./Components/Email";
import CPF from './Components/CPF';
import Address from './Components/Address';
import City from './Components/City';
import State from './Components/State';
import Build from './Components/Build';

class Personal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      estado: '',
      realState: '',
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.lookingFor = this.lookingFor.bind(this);
    this.onBlurEvent  = this.onBlurEvent.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value
    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.lookingFor(value)

    this.setState({ [name]: value });
  }

  lookingFor(element) {
    return element.replace(/[^\w\s]/gi, '');
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formError: {
        ...state.formError,
        [name]: this.validateField(name, value)
      }
    }));
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }
    return '';
  }


  onBlurEvent({ target }) {
    let { name, value } = target;
    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  }

  render() {
    const { name, email, cpf, address, city, estado, realState } = this.state;

    return (
      <form>
        <Name name={ name } handleChange={ this.handleChange }/>
        <Email name={ email } handleChange={ this.handleChange }/>
        <CPF name={ cpf }  handleChange={ this.handleChange }/>
        <Address name={ address } handleChange={ this.handleChange } />
        <City name={ city } handleChange={ this.handleChange } onBlurEvent={ this.onBlurEvent } />
        <State name={ estado } handleChange={ this.handleChange }/>
        <Build name={ realState } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default Personal;
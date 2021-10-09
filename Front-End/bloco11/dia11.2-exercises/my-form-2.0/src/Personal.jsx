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
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({ [name]: value });
  }

  render() {
    const { name, email, cpf, address, city, estado, realState } = this.state;

    return (
      <form>
        <Name name={ name } handleChange={ this.handleChange }/>
        <Email name={ email } handleChange={ this.handleChange }/>
        <CPF name={ cpf }  handleChange={ this.handleChange }/>
        <Address name={ address } handleChange={ this.handleChange } />
        <City name={ city } handleChange={ this.handleChange } />
        <State />
        <Build />
      </form>
    );
  }
}

export default Personal;
import { Component } from 'react';

class CPF extends Component {
  render () {
    const { cpf, handleChange } = this.props;

    return (
      <label>
        CPF
        <input
        type="text"
        maxLength="11"
        placeholder="11122233344"
        name="cpf"
        value={ cpf }
        onChange={ handleChange }
        required></input>
      </label>      
    );
  }
}

export default CPF;
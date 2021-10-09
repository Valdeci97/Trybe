import { Component } from 'react';

class Nome extends Component {
  render() {
    const { name, handleChange } = this.props;

    return(
      <label>
        Nome
        <input
        type="text"
        maxLength="40"
        placeholder="Seu nome"
        name="name"
        value={ name }
        onChange={ handleChange }
        required></input>
      </label>
    )
  }
}

export default Nome;
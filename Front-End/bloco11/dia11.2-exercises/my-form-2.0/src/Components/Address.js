import { Component } from 'react';

class Address extends Component {
  render() {
    const { address, handleChange } = this.props;

    return (
      <label>
        Endereço
        <input
        type="text"
        maxLength="200"
        name='address'
        value={ address }
        onChange={ handleChange }
        required></input>
      </label>
    );
  }
}

export default Address;
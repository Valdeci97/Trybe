import { Component } from 'react';

class City extends Component {
  render() {
    const { city, handleChange } = this.props;

    return (
      <label>
        Cidade
        <input
        type="text"
        maxLength="28"
        name='city'
        value={ city }
        onChange={ handleChange }
        required></input>
      </label>
    );
  }
}

export default City;
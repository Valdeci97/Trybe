import { Component } from 'react';

class City extends Component {
  render() {
    const { city, handleChange, onBlurEvent } = this.props;

    return (
      <label>
        Cidade
        <input
        type="text"
        maxLength="28"
        name='city'
        placeholder="Rio de Janeiro"
        value={ city }
        onChange={ handleChange }
        onBlur= { onBlurEvent }
        required></input>
      </label>
    );
  }
}

export default City;
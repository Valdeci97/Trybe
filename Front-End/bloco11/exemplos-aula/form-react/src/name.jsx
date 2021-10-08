import React from 'react';

class Name extends React.Component {
  render() {
    const { handleChange, name } = this.props;

    let error = undefined;
    if(name.length > 40) error = 'Que nome grande. isso Tá certo?';

    return (
      <label htmlFor="name">
        Nome: <input
          id="name"
          type="text" 
          name="name" 
          placeholder="Seu nome aqui"
          onChange={ handleChange }
          value={ name }
          ></input>
          <span>{ error ? error : '' }</span>
      </label>
    );
  }
}

export default Name;

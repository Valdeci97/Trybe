import React from 'react';

class Email extends React.Component {
  render() {
    const { email, handleChange } = this.props;
    
    return (
      <label htmlFor="email">
        Email: <input
          id="email"
          type="text"
          name="email"
          placeholder="joao.marcilio23@gmail.com"
          onChange={ handleChange }
          value={ email }
          ></input>
      </label>
    );
  }
}

export default Email;

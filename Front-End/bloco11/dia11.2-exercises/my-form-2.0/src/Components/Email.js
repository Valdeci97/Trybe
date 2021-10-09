import { Component } from "react";

class Email extends Component {
  render() {
    const { email, handleChange } = this.props;

    return (
      <label>
        Email
        <input
        type="email"
        maxLength="50"
        name="email"
        placeholder="joao.marcilio18@gmail.com"
        value={ email }
        onChange={ handleChange }
        required></input>
      </label>
    );
  }
}

export default Email;
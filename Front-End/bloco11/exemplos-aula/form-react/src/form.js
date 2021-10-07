import React from 'react';

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      estado: '',
      aboutCity: '',
      terms: false,
    }
    
    this.handleChange = this.handleChange.bind(this);


    // this.handlChangeName = this.handlChangeName.bind(this);
    // this.handleChangeEmail = this.handleChangeEmail.bind(this);
    // this.handleChangeEstado = this.handleChangeEstado.bind(this);
    // this.textArea = this.textArea.bind(this);
    // Agora vamos elaborar uma função hanlde genérica.

  }

  // handlChangeName(event) {
  //   this.setState({
  //     name: event.target.value
  //   });
  // }

  // handleChangeEmail(event) {
  //   this.setState({
  //     email: event.target.value
  //   })
  // }

  // handleChangeEstado(event) {
  //   this.setState({
  //     estado: event.target.value
  //   })
  // }

  // textArea(event) {
  //   this.setState({
  //     aboutCity: event.target.value
  //   })
  // }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name, email, estado, aboutCity, terms } = this.state;    

    return (
      <section>
        <form>
          <fieldset>
            <label htmlFor="name">
              Nome: <input
                id="name"
                type="text" 
                name="name" 
                placeholder="Seu nome aqui"
                onChange={ this.handleChange }
                value={ name }
                ></input>
            </label>
            <label htmlFor="email">
              Email: <input
                id="email"
                type="text"
                name="email"
                placeholder="joao.marcilio23@gmail.com"
                onChange={ this.handleChange }
                value={ email }
                ></input>
            </label>
          </fieldset>
          Estado: 
          <select name="estado" onChange={ this.handleChange } value={ estado }>
            <option value="sp">São Paulo</option>
            <option value="rj">Rio de Janeiro</option>
            <option value="mg">Minas Gerais</option>
            <option value="es">Espirito Santo</option>
          </select>
          Conte sobre as coisas preferidas que há em seu estado: <textarea name="aboutCity" onChange={ this.handleChange } value={ aboutCity }></textarea>
          <input name="terms" type="checkbox" onChange={ this.handleChange } value={ terms }></input>
          <input type="file"></input>
        </form>
      </section>
    )
  }
}

export default Form;

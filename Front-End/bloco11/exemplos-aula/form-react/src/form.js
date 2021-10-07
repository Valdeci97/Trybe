import React from 'react';

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      estado: '',
      aboutCity: '',
    }

    this.handlChangeName = this.handlChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeEstado = this.handleChangeEstado.bind(this);
    this.textArea = this.textArea.bind(this);
  }

  handlChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  handleChangeEstado(event) {
    this.setState({
      estado: event.target.value
    })
  }

  textArea(event) {
    this.setState({
      aboutCity: event.target.value
    })
  }

  render() {
    const { name, email, estado, aboutCity } = this.state;    

    return (
      <section>
        <form>
          <label htmlFor="name">
            Nome: <input
              id="name"
              type="text" 
              name="nome" 
              placeholder="Seu nome aqui" 
              onChange={ this.handlChangeName }
              value={ name }
              ></input>
          </label>
          <label htmlFor="email">
            Email: <input
              id="email"
              type="text"
              email="email"
              placeholder="joao.marcilio23@gmail.com"
              onChange={ this.handleChangeEmail }
              value={ email }
              ></input>
          </label>
          Estado: 
          <select onChange={ this.handleChangeEstado } value={ estado }>
            <option value="sp">São Paulo</option>
            <option value="rj">Rio de Janeiro</option>
            <option value="mg">Minas Gerais</option>
            <option value="es">Espirito Santo</option>
          </select>
          Conte sobre as coisas preferidas que há em seu estado: <textarea onChange={ this.textArea } value={ aboutCity }></textarea>
        </form>
      </section>
    )
  }
}

export default Form;

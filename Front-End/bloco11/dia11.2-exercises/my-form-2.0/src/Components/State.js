import { Component } from 'react';

const estados = [
  { id: 'Acre', uf: 'AC' },
  { id: 'Alagoas', uf: 'AL'},
  { id: 'Amapá', uf: 'AP' },
  { id: 'Amazonas', uf: 'AM' },
  { id: 'Bahia', uf: 'BA' },
  { id: 'Ceará', uf: 'CE' },
  { id: 'Distrito Federal', uf: 'DF' },
  { id: 'Espírito Santo', uf: 'ES' },
  { id: 'Goiás', uf: 'GO' },
  { id: 'Maranhão', uf: 'MA' },
  { id: 'Mato Grosso', uf: 'MT' },
  { id: 'Mato Grosso do Sul', uf: 'MS' },
  { id: 'Minas Gerais', uf: 'MG' },
  { id: 'Pará', uf: 'PA' },
  { id: 'Paraíba', uf: 'PB' },
  { id: 'Paraná', uf: 'PR' },
  { id: 'Pernambuco', uf: 'PE' },
  { id: 'Piauí', uf: 'PI' },
  { id: 'Rio de Janeiro', uf: 'RJ' },
  { id: 'Rio Grande do Norte', uf: 'RN' },
  { id: 'Rio Grande do Sul', uf: 'RS' },
  { id: 'Rondônia', uf: 'RO' },
  { id: 'Roraima', uf: 'RR' },
  { id: 'Santa Catarina', uf: 'SC' },
  { id: 'São Paulo', uf: 'SP' },
  { id: 'Sergipe', uf: 'SE' },
  { id: 'Tocantis', uf: 'TO' },
];

class State extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <select
      name="estado"
      onChange={ handleChange }
      required>
        Estado:
        {
          estados.map((element) => {
            return (
              <option
              key={ element.uf }>{ element.id }</option>
            )
          })
        }
      </select>
    );
  }
}

export default State;
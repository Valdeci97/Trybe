import React from 'react';

const Task = (value) => {
  return (<li key="value">{value}</li>);
};

const tarefas = ['Lavar a louça', 'Estudar react', 'Conferir conteúdo de soft skills', 'Ler algumas documentações'];

class TaskList extends React.Component {
  render() {
    return <ul>{ tarefas.map((element) => Task(element)) }</ul>
  }
}

export default TaskList;

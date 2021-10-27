import React, { Component } from 'react';
import ListaDeNotas from './componentes/ListaDeNotas/';
import FormularioCadastro from './componentes/FormularioCadastro/';
import './assets/App.css';
import './assets/index.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      notas:[]
    };
  }

criarNota(titulo, texto) {
  const novaNota = {titulo, texto};
  const novoArrayNotas = [...this.state.notas, novaNota] 
  const novoEstado = {
    notas:novoArrayNotas
  }
  this.setState(novoEstado);
}

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota = {this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
      
      );
    }
}

export default App;

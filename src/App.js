import React, { Component } from 'react';
import ListaDeNotas from './componentes/ListaDeNotas/';
import FormularioCadastro from './componentes/FormularioCadastro/';
import ListaDeCategorias from './componentes/ListaDeCategorias';
import './assets/App.css';
import './assets/index.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      notas:[],
      categorias:["Games", "Música"],
    };
  }

criarNota(titulo, texto, categoria) {
  const novaNota = {titulo, texto, categoria};
  const novoArrayNotas = [...this.state.notas, novaNota] 
  const novoEstado = {
    notas:novoArrayNotas
  }
  this.setState(novoEstado);
}

deletarNota(index){
  let arrayDeNotas = this.state.notas;
  arrayDeNotas.splice(index,1);
  this.setState({notas:arrayDeNotas})
}

adicionarCategoria(nomeCategoria){
  const novoArrayCategorias =[...this.state.categorias, nomeCategoria];
  const novoEstado = {...this.state, categorias: novoArrayCategorias};
  this.setState(novoEstado)
}

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.state.categorias} 
          criarNota = {this.criarNota.bind(this)}/>

        <main className="conteudo-principal"> 

          <ListaDeCategorias
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias}
          />

          <ListaDeNotas 
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}/>          
        </main>
       
      </section>
      
      );
    }
}

export default App;

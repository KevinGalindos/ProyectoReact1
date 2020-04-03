import React, { Component } from 'react';
import './App.css';
import tareas from './sample/tareas.json';
import Tareas from './components/Tareas';
import FormTareas from'./components/FormTareas'


class App extends Component {

  state = {
    tareas: tareas
  }

  AgregarTarea =(titulo,descripcion) => {
    const nuevaTarea ={
      titulo: titulo,
      descripcion:descripcion,
      id: this.state.tareas.length

    }
    this.setState({
      tareas:[...this.state.tareas,nuevaTarea]
    })
  }

  render() {
    return <div>
      <FormTareas AgregarTarea={this.AgregarTarea}/>
      <Tareas tareas={this.state.tareas}/>
    </div>
  }
}


export default App;

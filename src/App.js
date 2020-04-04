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

  BorrarTarea = (id) =>{
    const NuevasT = this.state.tareas.filter(tarea=>tarea.id!==id);
    this.setState({tareas:NuevasT})
  }

  CambiarEstado = id =>{
    const NuevasT = this.state.tareas.map(tarea=>{
      if(tarea.id ===id){
      tarea.cumplido =!tarea.cumplido
      }
      return tarea;
    });
    this.setState({tareas : NuevasT})
  }

  render() {
    return <div>
      <FormTareas AgregarTarea={this.AgregarTarea}/>
      <Tareas tareas={this.state.tareas}
       BorrarTarea={this.BorrarTarea}
       CambiarEstado={this.CambiarEstado}
      />
    </div>
  }
}


export default App;

import React, { Component } from 'react';
import './App.css';
import tareas from './sample/tareas.json';
import Tareas from './components/Tareas';
import FormTareas from'./components/FormTareas'


class App extends Component {

  state = {
    tareas: tareas
  }

  render() {
    return <div>
      <FormTareas/>
      <Tareas tareas={this.state.tareas}/>
    </div>
  }
}


export default App;

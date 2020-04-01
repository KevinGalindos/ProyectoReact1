import React,{Component} from 'react';
import './App.css';
import tareas from './sample/tareas.json';


class App extends Component{

state = {
  tareas:tareas
}

    render(){
      return <div>
        {this.state.tareas.map(e=><p key={e.id}>
        <h1>Titulo: {e.titulo}</h1> 
        <h2>ID: {e.id}</h2> 
        <h3>Descripcion: {e.descripcion}</h3> 

        </p>)}
      </div>
    }
} 


export default App;

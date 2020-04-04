import React, { Component } from 'react';



class Tarea extends Component {

    EstiloCompleto(){
        return{
            fontSize:'20px',
            color:this.props.tarea.cumplido ? 'gray':'black',
            textDecoration: this.props.tarea.cumplido ? 'line-through':'none'
        }
    }

    render() {

        const {tarea} = this.props;

        return <div style={this.EstiloCompleto()}> 
            <h1>Titulo: {tarea.titulo}</h1>
            <h2>ID: {tarea.id}</h2>
            <h3>Descripcion: {tarea.descripcion}</h3>
            <input type="checkbox" onChange ={this.props.CambiarEstado.bind(this,tarea.id)}/>
            <button style={BtnBorrar}
            onClick={this.props.BorrarTarea.bind(this,tarea.id)}>
                x
            </button>

        </div>
    }
  

}

const BtnBorrar = {
    fontSize: '18px',
    background:'#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius:'50%',
    cursor:'pointer'
}

export default Tarea;
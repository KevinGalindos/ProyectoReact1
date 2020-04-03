import React, { Component } from 'react';

export default class FormTareas extends Component {

    state= {
        titulo:"",
        descripcion:""

    }

    onSubmit = e => {
        
        e.preventDefault()
    }

    onChange = e =>{
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="titulo"
                    placeholder="Escriba una tarea"
                    onChange={this.onChange}
                />

                <br />
                <br />

                <textarea
                    name="descripcion"
                    placeholder="Descripcion"
                    onChange={this.onChange}
                />

                <input type="submit" />
            </form>
        )

    }
}
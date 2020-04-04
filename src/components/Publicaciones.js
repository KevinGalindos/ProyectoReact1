import React, { Component } from 'react'

export default class Publicaciones extends Component {

    state ={
        publicaciones:[]
    }

    async componentDidMount(){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        this.setState({publicaciones:data})
    }

    render() {
        return (
            <div>
                <h1>Publicaciones </h1>

                {
                    this.state.publicaciones.map(publicacion=>{
                        return <div key={publicacion.id}>
                            <h1>{publicacion.title}</h1>
                            <p>{publicacion.body}</p>

                        </div>
                    })
                }
            </div>
        )
    }
}



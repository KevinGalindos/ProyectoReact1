import React from 'react';
import './App.css';

// function Hello(props) {
//   return (
//     <div id="hello"><h1>{props.text}</h1>
//       <h3>{props.subtext}</h3>
//     </div>
//   )
// }



class Hello extends React.Component {

  state = {
    show: true
  }

  cambio = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h1>{this.props.text}</h1>
          <h3>{this.props.subtext}</h3>
          <button onClick={this.cambio}>Cambiar</button>
        </div>)
    } else {
      return (<div>
        <h1>No hay elementos</h1>
        <button onClick={this.cambio}>Regresar</button>
      </div>
      )

    }
  }
}


function App() {
  return (
    <div > Componente
      <Hello text="Hola" subtext="snegra"></Hello>
      <Hello text="aHello" subtext="black"></Hello>
      <Hello text="Buenas" subtext="perrohp"></Hello>
    </div>
  );
}

export default App;

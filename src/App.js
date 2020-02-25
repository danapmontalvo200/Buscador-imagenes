import React, { Component } from 'react';
import "bootswatch/dist/minty/bootstrap.min.css";
import Buscador from './components/Buscador';
import Resultado from './components/Resultado'
class App extends Component {

state = {
    termino : '',
    imagenes : [],
    paguina : '',
};

pagAnterior = () => {
  //console.log('Anterior...');
   //leer el state de la pag actual
let paguina = this.state.paguina;
//leer si la paguina es 1 no retroceder
if(paguina === 1) return null;
//sumar una a la paguna actual
paguina -= 1;
//agregar el cambio al state
this.setState({
  paguina
})

};
pagSiguiente = () => {
 // console.log('Siguiente...')
 //leer el state de la pag actual
let paguina = this.state.paguina;
 //sumar una a la paguna actual
paguina += 1;
 //agregar el cambio al state
 this.setState({
   paguina
 })

 console.log(paguina)
};

consultarApi = () => {

  const termino = this.state.termino;
  const url = `https://pixabay.com/api/?key=15380340-c0f2721d438f3d326df81a841&q=${termino}`;

  //console.log(url);
fetch(url)
.then(respuesta => respuesta.json())
.then (resultado => this.setState({ imagenes : resultado.hits}))

}

datosBusqueda = (termino) => {
  this.setState({
    termino : termino,
    paguina : 1
  }, () => {this.consultarApi();

  });
}

render () {
  return (
    <div className="App container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imagenes</p>
          <Buscador 
         datosBusqueda={this.datosBusqueda}
          />
        </div>     
          <div className="row justify-content-center">
            <Resultado 
           imagenes={this.state.imagenes}
           pagAnterior={this.pagAnterior}
           pagSiguiente={this.pagSiguiente}
           />
         </div>
    </div>
    );
  }
}


export default App;

import React, { Component } from 'react';
import "bootswatch/dist/minty/bootstrap.min.css";
import Buscador from './components/Buscador';
import Resultado from './components/Resultado'
class App extends Component {

state = {
    termino : '',
    imagenes : [],
    pagina : '',
};

scroll = () => {
  const elememto = document.querySelector('.jumbotron');
  elememto.scrollIntoView('smooth','start');
}

pagAnterior = () => {
  //console.log('Anterior...');
   //leer el state de la pag actual
let pagina = this.state.pagina;
//leer si la paguina es 1 no retroceder
if(pagina === 1) return null;
//sumar una a la paguna actual
pagina -= 1;
//agregar el cambio al state
this.setState({
  pagina
}, () => {

  this.consultarApi();
  this.scroll();
 })

};
pagSiguiente = () => {
 // console.log('Siguiente...')
 //leer el state de la pag actual
let pagina = this.state.pagina;
 //sumar una a la paguna actual
pagina += 1;
 //agregar el cambio al state
 this.setState({
   pagina
 }, () => {

  this.consultarApi();
  this.scroll();
 });

 console.log(pagina)
};

consultarApi = () => {

  const termino = this.state.termino;
  const pagina = this.state.pagina
  const url = `https://pixabay.com/api/?key=15380340-c0f2721d438f3d326df81a841&q=${termino}&per_page=20&page=${pagina}`;

  console.log(url);
fetch(url)
.then(respuesta => respuesta.json())
.then (resultado => this.setState({ imagenes : resultado.hits}))

}

datosBusqueda = (termino) => {
  this.setState({
    termino : termino,
    pagina : 1
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

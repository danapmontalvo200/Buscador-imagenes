import React, { Component } from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';

class Resultado extends Component {
  
    monstrarImagenes = () => {

        const imagenes = this.props.imagenes;

        if(imagenes.length === 0) return null;

        //console.log(imagenes);

            return (
                <React.Fragment>
                    <div className="col-12 p-5 row">
                        {imagenes.map(imagen => (
                            <Imagen
                            key={imagen.id}
                            imagen={imagen}
                            />
                        ))}
                    </div>
                    <Paginacion
                      pagAnterior={this.props.pagAnterior}
                      pagSiguiente={this.props.pagSiguiente}
                    />
                </React.Fragment>
            )



    }
    render() {
        return(
            <React.Fragment>
                 {this.monstrarImagenes()}
            </React.Fragment>
        )
    }
}

export default Resultado;
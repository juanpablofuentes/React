import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Cabecera extends Component {
    render() {

        return (
                <tr><th>Alumno</th><th>Nota</th></tr>
                );
    }
}
;
class Fila extends Component {
    render() {
        return (
                <tr ><td>{this.props.nombre}</td><td>{this.props.nota}</td></tr>
                );
    }
}
;
class Tabla extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alumnos: this.props.alumnos,
            cont: 0
        };
        this.tic=this.tic.bind(this);
    }
    tic() {
        this.setState({cont: this.state.cont + 1});
    }
    componentDidMount() {
        setInterval(this.tic, 1000);
    }
    render() {

        const filas = this.state.alumnos.map((fila, index) => {
            return (<Fila key={index} nombre={fila.nombre} nota={fila.nota}/>);
        }
        );
        return (
                <div>
                    <h1>Contador: {this.state.cont}</h1>
                    <table>
                        <thead>
                        <Cabecera/></thead>
                        <tbody>
                            {filas}
                        </tbody>
                    </table>
                </div>
                );
    }
}
;
class App extends Component


{
    render() {
        const alumnos = [{nombre: "Ana", nota: 6}, {nombre: "Pep", nota: 4}];
        return (
                <Tabla alumnos={alumnos}/>
                );
    }
}



;
export default App;

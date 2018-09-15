import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MySecondComponent from './components/mySecondComponent';



class App extends Component {


  constructor (props){
    super(props);
  
    this.state ={
      nombre: "NOMBRE",
      edad:"EDAD",
      trabajo:"TRABAJO",
     
    }
  }
  boton_nombre= (evento1) =>{
    evento1.preventDefault();
    this.setState({
      nombre:"ESTEBAN FABIAN VASQUEZ CASTELLANOS"
    })
  }
  boton_edad= (evento2) =>{
    evento2.preventDefault();
    this.setState({
      edad:"26"
    })
  }
  boton_trabajo= (evento3) =>{
    evento3.preventDefault();
    this.setState({
      trabajo:"DESEMPLEADO"
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img height="100px" width="100px" src="https://scontent.fgdl4-1.fna.fbcdn.net/v/t1.0-9/19990177_10155605570863910_7730276667780705394_n.jpg?_nc_cat=0&oh=8e13151aaf671f0c952c20de6bbd8bff&oe=5BB556E7 "/>
          <h1 className="App-title">BLOCK FABIAN</h1>
        </header>
        <MySecondComponent text={this.state.nombre}mostrarCambio={this.boton_nombre}/>
        <MySecondComponent text={this.state.edad}mostrarCambio={this.boton_edad}/>
        <MySecondComponent text={this.state.trabajo}mostrarCambio={this.boton_trabajo}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import AppBar from "./components/AppBar";
import Card from "./components/Card";
// import imagePrincipito from "./images/principito.jpg"
// import imageFinanzas from "./images/finanzas.jpeg"

import Search from "./components/Search"
import axios from 'axios';





class App extends Component {
  state = {
    filtro: "",
    libros:[]
  };

  filtro = event => {
    this.setState({ filtro:event.target.value });
  };


componentDidMount(){
  axios.get('http://localhost:3050/book')
    .then(resp=>{
      //let libros = resp.data;
      this.setState({libros:resp.data});
    }).catch(err=>{
      console.log(err);
    })
}

  render() {
    


    const { filtro,libros } = this.state;

    const otroLibro = libros.filter(libro =>{
        if(filtro.length===0){
          return true;
        }
        else if(libro.title.indexOf(filtro)>=0){
          return true;
        } else {
          return false;
        }
    });


    return (
      <div className="App">
      <AppBar title="Libreria Devf"/>
      <Search value={this.filtro}/>
      <div className="flex">
        {otroLibro.map(libro=>(
        <Card
          key={libro._id}
          title={libro.title}
          description={libro.description}
          image={libro.image} 
        />
      ))}
        
        </div>  
      </div>  
        /*<Card 
      title="Principito"
      description="Li bro del Principito escrito"
      image={imagePrincipito}
      />
      <Card 
      title="Finanzas personales"
      description="Libro de finanzas personales"
      image={imageFinanzas}
      /> */
     
    );
  }
}

export default App;


// const libros =[
//   {
//     id: 1, 
//     title: "Principito",
//     description: "Libro del Principito",
//     image: imagePrincipito,
//   },
//   {
//     id: 2,
//     title: "Finanzas",
//     description:"Libro de Finanzas",
//     image: imageFinanzas,
//   },
// ];
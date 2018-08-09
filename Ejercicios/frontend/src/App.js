import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './components/myFirstComponent.js';
import axios from 'axios';

class App extends Component {

constructor (props){
  super(props);

  this.state ={
   images:[
     {
       url:'wwww.google.com',
       id: 1
     }
   ]
 
  }
}
//handleClick es solo por comvencion pero se pudiera llamar de cualquier forma
handleClick = (event) =>{
  //preventDefault nos sirve para que lo que iba a hacer el boton no lo haga
 event.preventDefault();
 //this.setState es que vamos a cambiar el estado
 this.setState({
   message: "Soy el estado al ser clickeado",
   
 })
}
handleClick1= (event1) =>{
  event1.preventDefault();
  this.setState({
    holi:"Hola ya me cambie ahora saludo a Mario"
  })
}
handleClick2= (event2) =>{
  event2.preventDefault();
  this.setState({
    todos:"holi solo a los de arriba"
  })
}
handleClick3= (event3) =>{
  event3.preventDefault();
  this.setState({
    Alemania:"Hola arriba mexico"
  })
}
componentDidMount(){
  axios.get('http://localhost:5000/images').then((response)=>{
    this.setState({
      images:response.data
    })
    console.log("La respuesta:",response.data[0]);

  }).catch((error)=>{
    console.log("El error:",error);
  })

}
  render() {
    return (
      <div className="App">
     
      {
        this.state.images.map((image)=>{
         return <p key={image.id}>{image.url} </p>
        })
      }
       
     
      </div>
    );
  }
}

export default App;

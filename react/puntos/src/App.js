import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import socketIOClient from 'socket.io-client';

class App extends Component {

    color='#000';

    componentDidMount(){
      this.socket=socketIOClient('http://localhost:4000');

      this.socket.on('point_added', (res)=>{
        //console.log('el server dijo:', res);
        this.renderPixel(res.x, res.y,res.color);
      });
      //this.socket.emit('add_point',{valor:"algo random"});
      this.refs.elCanvas.width=window.innerWidth;
      this.refs.elCanvas.height=window.innerHeight;
      this.color='#'+(Math.random()*0xFFFFFF<<0).toString(16);
    }
  
    renderPixel = (x,y,color)=>{
      let contexto=this.refs.elCanvas.getContext('2d');
      contexto.fillStyle=color;
      contexto.fillRect(x,y,10,10);

    }
  
  
    elMouse = (evt)=>{
    console.log(evt);
    console.log(evt.clientX,evt.clientY);
    //this.renderPixel(evt.clientX, evt.clientY);
    this.socket.emit('add_point',{x: evt.clientX, y: evt.clientY,color:this.color});
  }  

  render() {
    return (
     <canvas ref="elCanvas" onClick={(evt)=>this.elMouse(evt)}/>

     
    );
  }
}

export default App;

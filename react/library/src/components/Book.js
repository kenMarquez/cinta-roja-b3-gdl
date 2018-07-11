import React from 'react';
import axios from  'axios';

import logo from '../logo.svg';

//export default function Book(){
    class Book extends React.Component {
        state = {
            info: '', 
        }

        componentWillMount() {
          setTimeout(() => {

          
            axios.get('http://localhost:3050/book/' + this.props.match.params.bookId)
                .then(res => {
                    this.setState({ info:res.data });
                }).catch(err => {
                    console.log(err);
                })
            }, 5000)
            }
        emptyState(info) {
            if(info === '') {
                return (<img src={logo} className="App-logo" />);
            } else {
                return (<div>
                    <h4>{info.title}</h4>
                    <p>{info.desc}</p>
                </div>);
            }
        
        }

    render() {
    //console.log(props);
    const { info } = this.state;
    return(
        <div>
            {this.emptyState(info)}
            {/* <h4>{info.title}</h4>
            <p>{info.desc}</p> */}
            {/* <h4>{this.props.match.params.bookId}</h4> */}
        </div>
    );
    }

}
export default Book;
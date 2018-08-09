import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
class MyFirstComponent extends Component{
    render(){
        return(
            <div>
                <Card > 
                    <p>{this.props.image.url}</p>

        <CardMedia
      
    
        />
        <CardContent>
        <p>{this.props.image.url}</p>
        </CardContent>
        </Card>
          
                
                
     
            </div>
          
        );
       
            

        }
    }


export default MyFirstComponent;
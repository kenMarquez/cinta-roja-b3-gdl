import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';


class MySecondComponent extends Component{
    
    render(){
        return( 
            <div>
             <Grid container spacing={3} sm={10} md={10}>
          
             <Grid item xs={4}>
             <FormLabel>
             <Card>
                <Button  
                color="secondary" onClick={this.props.mostrarCambio}>
                <h3>{this.props.text}</h3>
                </Button>
              
                
               </Card>
               </FormLabel>
               </Grid>
              
               </Grid>

            </div>
        )
        
    }
   
}
export default MySecondComponent;
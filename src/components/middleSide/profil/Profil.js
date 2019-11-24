import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import photo_profil from "../../../static/photo_profil.JPG";

import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import './css/Profil.css';




class Profil extends Component{
    constructor(props){
        super(props);
        this.isDisplayed=this.isDisplayed.bind(this);
    }

    isDisplayed(titleParam){
        
        let display;
        if(titleParam==undefined){
            return;
        }
        if (titleParam=='Profil'){

            display=<div>
                <Grid 
                    container
                    justify="center"
                    alignItems="center"
                    spacing={2}
                >
                    
                    <Grid item xs={10} sm={5}>
                        <Container fixed >
                            <Paper className='paper'>
                                
                                <div className='title' >
                                    Rahiti Perodeau
                                
                                </div>
                                <div className='sub_title'>
                                    5e année d'école d'ingénieur à CPE Lyon
                                </div>
                                <br/>
                                <div>
                                Né le 9 Août 1996 (23ans)
                                </div>
                                <div>
                                    4 Rue Richelieu, 69100 Villeurbanne
                                </div>
                                <div>
                                    Email: rahiti.perodeau@cpe.fr
                                </div>
                                <div>
                                    Mobile: 07 66 17 23 78
                                </div>
                            </Paper>  
                        </Container>
                    </Grid>
                    <Grid item xs={10} sm={5}>
                        <img src={photo_profil}/>
                    </Grid>
                    
                </Grid>
                
                            
                        
            </div>
            
            ;
            return display;
        }
          
    }

    render(){
        const display=this.isDisplayed(this.props.title);
        return(
            <div>
                {display}
            </div>
        )
        
       
    }
}
const mapStateToProps = (state,ownProps)=>{
    return{
        title: state.pageReducer
    }
};

export default connect(mapStateToProps)(Profil);
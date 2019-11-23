import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import photo_profil from "../../../static/photo_profil.JPG";

import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import {profileStyle,profile} from '../../../style';

const classes = profileStyle;

const profileS=profile;

class Profil extends Component{
    constructor(props){
        super(props);
        this.isDisplayed=this.isDisplayed.bind(this);
    }

    isDisplayed(titleParam){
        
        let display;
        if(titleParam==undefined){
            //alert('titleParam undefined')
            return;
        }
        if (titleParam=='Profil'){
            //alert('titleParam profil')

            display=<div>
                <Grid 
                    container 
                    //direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                >
                    
                    <Grid item xs={10} sm={5}>
                        <Container fixed className={classes.container}>
                            <Paper>
                                
                                <Typography variant="h3" component="h6" gutterBottom>
                                    Rahiti Perodeau
                                
                                </Typography>
                                <Typography variant="h6">
                                    5e année d'école d'ingénieur à CPE Lyon
                                </Typography>
                                <br/>
                                <Typography>
                                Né le 9 Août 1996 (23ans)
                                </Typography>
                                <Typography>
                                    4 Rue Richelieu, 69100 Villeurbanne
                                </Typography>
                                <Typography>
                                    Email: rahiti.perodeau@cpe.fr
                                </Typography>
                                <Typography>
                                    Mobile: 07 66 17 23 78
                                </Typography>
                            </Paper>  
                        </Container>
                    </Grid>
                    <Grid item xs={10} sm={5}>
                        <img src={photo_profil} style={profileS.avatar}/>
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
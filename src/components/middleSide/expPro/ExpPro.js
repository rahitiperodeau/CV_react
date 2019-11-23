import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {expProStyle} from '../../../style';

const classes = expProStyle;

class ExpPro extends Component{
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
        if (titleParam=='Expérience Professionnelle'){
            //alert('titleParam exp pro')
            display=
            <div>
                <Grid 
                container 
                justify="center"
                alignItems="center"     
                spacing={2}   
            >
                <Grid item xs={10} sm={5}>
                    <Container fixed className={classes.container}>
                        <Paper >
                            <Typography variant="h4">
                                Projet de développement web sémantique
                            </Typography>
                            <br/>
                            <Typography variant="h5">
                                 Fraunhofer IPK - Berlin
                            </Typography>
                            <Typography variant="h6">
                            01/09/2018 –01/03/2019;
                            </Typography>
                            <br/>
                            <Typography display="block">
                            Développementd‘une application web utilisant les technologies
                            classiques  du  développement  Web, i.e du Java JEE côté serveur,
                            AJAX JS/HTML/CSS côté  client,  le  tout  communiquant  avec  
                            des  Web-Services.
                            </Typography>
                            <br/>
                            <Typography>
                            Développement   d’un   système   d’assistance intelligent  basé
                            sur  la  liaison  sémantique  des données  pour  soutenir  
                            l’assemblage  de  petites séries  de  dispositifs  mécaniques  (turbines)
                            pour une entreprise aéronautique.
                            </Typography>
                        </Paper>
                    </Container>
                </Grid>
                
            </Grid>
            <Grid 
            container 
            justify="center"
            alignItems="center"     
            spacing={2}   
            >
                <Grid item xs={10} sm={5}>
                    <Container fixed className={classes.container}>
                        <Paper >
                            <Typography variant="h4">
                            Stage d’exécution
                            </Typography>
                            <br/>
                            <Typography variant="h5">
                            EDT Engie - Polynésie française
                            </Typography>
                            <Typography variant="h6">
                            07/10/2017 –08/11/2017
                            </Typography>
                            <br/>
                            <Typography display="block">
                            Réalisation d’un projet informatique sur un serveur de production industriel.
                            Configuration d’une supervision réseau à l’aide d’un logiciel de monitoring.
                            </Typography>
                        </Paper>
                    </Container>
                </Grid>
                
            </Grid>
            </div>;
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

export default connect(mapStateToProps)(ExpPro);
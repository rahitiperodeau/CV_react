import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import './css/ExpPro.css'




class ExpPro extends Component{
    constructor(props){
        super(props);
        this.isDisplayed=this.isDisplayed.bind(this);
    }

    isDisplayed(titleParam){
        let display;
        if(titleParam==undefined){
            return;
        }
        if (titleParam=='Expérience Professionnelle'){
            display=
            <div>
                <Grid 
                container
                justify="center"
                alignItems="center"     
                spacing={2}   
            >
                <Grid item  xs={10} sm={5} >
                    <Container >
                        <Paper className='paper'>
                            <div className='title'>
                                Projet de développement web sémantique
                            </div>
                            
                            <div className='place'>
                            Fraunhofer IPK - Berlin
                            </div>
                            <div className='date'>
                            01/09/2018-01/03/2019
                            </div>
                            
                            <div className='para' >
                                <div>
                                Développementd‘une application web utilisant les technologies
                                Back-end et Front-End, i.e Java/SringBoot côté serveur,
                                AJAX JS/HTML/CSS côté  client,  le  tout  communiquant  avec  
                                des  Web-Services.
                                </div>
                                
                                <div>
                                Développement   d’un   système   d’assistance intelligent  basé
                                sur  la  liaison  sémantique  des données  pour  soutenir  
                                l’assemblage  de  petites séries  de  dispositifs  mécaniques  (turbines)
                                pour une entreprise aéronautique.
                                </div>
                            </div>
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
                    <Container>
                        <Paper className='paper'>
                            <div className='title'>
                            Stage d’exécution
                            </div>
                        
                            <div className='place'>
                            EDT Engie - Polynésie française
                            </div>
                            <div className='date'>
                            07/10/2017-08/11/2017
                            </div>
                            <div className='para'> 
                                
                                Réalisation d’un projet informatique sur un serveur de production industriel.
                                Configuration d’une supervision réseau à l’aide d’un logiciel de monitoring.
                                
                            </div>
                           
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
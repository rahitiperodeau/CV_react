import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import './css/Parcours.css'


class Parcours extends Component{
    constructor(props){
        super(props);
        this.isDisplayed=this.isDisplayed.bind(this);
    }

    isDisplayed(titleParam){
        
        let display;
        if(titleParam==undefined){
            return;
        }
        if (titleParam=='Parcours'){
            display=
                    <Grid 
                        container                     
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item xs={10} sm={5}>
                            <Container fixed>
                                <Paper className='paper'>
                                    <div className='date' >
                                        2019-2020
                                    </div>
                                    <div className='text'>
                                    5e année à CPE Lyon,
                                    majeure Conception logicielle et Big Data
                                    </div>

                                    
                                    <div className='date'>
                                        2018-2019
                                    </div>
                                    <div className='text'>
                                    Année de césure; 
                                    Stage de 6 mois à l’étranger
                                    </div>

                                    
                                    <div className='date'>
                                        2016-2018
                                    </div>
                                    <div className='text'>
                                    CPE Lyon, majeure Conception logicielle et Big Data
                                    </div>

                                    
                                    <div className='date'>
                                        2014-2016
                                    </div>
                                    <div className='text'>
                                    Classes préparatoires à CPE Lyon en Maths Physique
                                    </div>

                                    
                                    <div className='date'>
                                        2014
                                    </div>
                                    <div className='text'>
                                    Baccalauréat série S mention “Très Bien”, Lycée Paul Gauguin, Tahiti(Polynésie Française)
                                    </div>
                                </Paper>
                            </Container>
                        </Grid>
                    </Grid>;
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

export default connect(mapStateToProps)(Parcours);
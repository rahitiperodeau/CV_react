import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {parcoursStyle} from '../../../style';

const classes = parcoursStyle;

class Parcours extends Component{
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
        if (titleParam=='Parcours'){
            //alert('titleParam Parcours')
            display=
                    <Grid 
                        container                     
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item xs={10} sm={5}>
                            <Container fixed>
                                <Paper>
                                    <Typography variant="h6">
                                        2019-2020
                                    </Typography>
                                    <Typography>
                                    5e année à CPE Lyon,
                                    majeure Conception logicielle et Big Data
                                    </Typography>

                                    <br/>
                                    <Typography variant="h6">
                                        2018-2019
                                    </Typography>
                                    <Typography>
                                    Année de césure; 
                                    Stage de 6 mois à l’étranger
                                    </Typography>

                                    <br/>
                                    <Typography variant="h6">
                                        2016-2018
                                    </Typography>
                                    <Typography>
                                    CPE Lyon, majeure Conception logicielle et Big Data
                                    </Typography>

                                    <br/>
                                    <Typography variant="h6">
                                        2014-2016
                                    </Typography>
                                    <Typography>
                                    Classes préparatoires à CPE Lyon en Maths Physique
                                    </Typography>

                                    <br/>
                                    <Typography variant="h6">
                                        2014
                                    </Typography>
                                    <Typography>
                                    Baccalauréat série S mention “Très Bien”, Lycée Paul Gauguin, Tahiti(Polynésie Française)
                                    </Typography>
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
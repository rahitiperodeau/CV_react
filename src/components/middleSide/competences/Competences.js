import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Rating from '@material-ui/lab/Rating';
import { connect } from 'react-redux';
import {competencesStyle} from '../../../style';

const classes = competencesStyle;

class Competences extends Component{
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
        if (titleParam=='Compétences'){
            //alert('titleParam competences')
            display=
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
                            <Typography>Dev Mobile Android</Typography>
                            <Rating value={6} max={10} readOnly />
                            <br/>
                            <Typography>Java</Typography>
                            <Rating value={8} max={10} readOnly />
                            <br/>
                            <Typography>React/Redux</Typography>
                            <Rating value={7} max={10} readOnly />
                            <br/>
                            <Typography>JavaScript/HTML/CSS</Typography>
                            <Rating value={7} max={10} readOnly />
                            <br/>
                            <Typography>NodeJS</Typography>
                            <Rating value={6} max={10} readOnly />
                            <br/>
                            <Typography>Python</Typography>
                            <Rating value={7} max={10} readOnly />
                            <br/>
                            <Typography>Sécurité Informatique</Typography>
                            <Rating value={5} max={10} readOnly />
                            <br/>
                            <Typography>Machine Learning</Typography>
                            <Rating value={6} max={10} readOnly />
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

export default connect(mapStateToProps)(Competences);
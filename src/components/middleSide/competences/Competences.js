import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Rating from '@material-ui/lab/Rating';
import { connect } from 'react-redux';
import './css/Competences.css';



class Competences extends Component{
    constructor(props){
        super(props);
        this.isDisplayed=this.isDisplayed.bind(this);
    }

    isDisplayed(titleParam){
        
        let display;
        if(titleParam==undefined){
            return;
        }
        if (titleParam=='Compétences'){
            display=
            <Grid 
                container 
                justify="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item xs={10} sm={5}>
                    <Container fixed>
                        <Paper className='cmpt'>
                            <div>Dev Mobile Android</div>
                            <Rating value={6} max={10} readOnly />
                            <br/>
                            <div>Java</div>
                            <Rating value={8} max={10} readOnly />
                            <br/>
                            <div>React/Redux</div>
                            <Rating value={7} max={10} readOnly />
                            <br/>
                            <div>JavaScript/HTML/CSS</div>
                            <Rating value={7} max={10} readOnly />
                            <br/>
                            <div>NodeJS</div>
                            <Rating value={6} max={10} readOnly />
                            <br/>
                            <div>Python</div>
                            <Rating value={7} max={10} readOnly />
                            <br/>
                            <div>Sécurité Informatique</div>
                            <Rating value={5} max={10} readOnly />
                            <br/>
                            <div>Machine Learning</div>
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
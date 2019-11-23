import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {setSelectPage} from '../../actions';


class Menu extends Component{
    constructor(props){
        super(props);
        this.handleOnClick=this.handleOnClick.bind(this);
    }

    handleOnClick(title){
        this.props.dispatch(setSelectPage(title));
    }

    render(){
        return(
            <ListItem button  onClick={()=>{this.handleOnClick(this.props.titleName)}}>
                <ListItemText primary={this.props.titleName} >
                </ListItemText>
            </ListItem>
        )
    }
}
export default connect()(Menu);
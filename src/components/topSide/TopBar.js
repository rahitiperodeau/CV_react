import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CssBaseline from '@material-ui/core/CssBaseline';

import Drawer from '@material-ui/core/Drawer';
import ListItemText from '@material-ui/core/ListItemText';
import {useTheme } from '@material-ui/core/styles';

import { Divider } from '@material-ui/core';
import Menu from '../leftSide/Menu';
import {useStyles} from '../../style';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import LinksRedirect from './LinksRedirect';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { connect } from 'react-redux';


const TopBar=()=>{
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    
    
    return(
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="static"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
                })}
            >
                <Toolbar >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                
                >
                    <MenuIcon />
                </IconButton>
                
                <Typography className={classes.title} variant="h6">
                    Curriculum vitæ
                </Typography>

                
            
                <LinksRedirect/>
                </Toolbar>

            </AppBar>
            
                   
               
            <Drawer
                className={classes.drawer}
                variant="persistent"
                open={open}
                classes={{
                    paper:classes.drawerPaper,
                }}
                anchor="left"
            >
                
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    {['Profil','Parcours','Expérience Professionnelle','Compétences'].map((text)=>(
                       <Menu titleName={text}/>
                    ))}
                    
                </List>
                <Divider />
                
                    </Drawer>
        </div>
    )

}
export default connect()(TopBar);
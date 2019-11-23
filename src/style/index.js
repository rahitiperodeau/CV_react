import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 250;

export const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    avatar:{
      width: 100,
      height: 100,
    },
    title: {
      flexGrow: 1,
      
    },
  }));

  export const profileStyle = makeStyles(theme=>({
    container:{
      width: `calc(100% - ${drawerWidth}px)`,
      
      
    },
    title:{

    },
    avatar_container:{
      
    },
  }));

  export const profile={
    avatar:{
      borderRadius:'25%'
    }
  };

  export const competencesStyle = makeStyles(theme=>({
    grid:{
      width: `calc(100% - ${drawerWidth}px)`,
    
      
    },
    title:{
      
    }
  }));

  export const parcoursStyle = makeStyles(theme=>({
    grid:{
      width: `calc(100% - ${drawerWidth}px)`,
      
      
    },
    title:{
      
    }
  }));

 
  export const expProStyle = makeStyles(theme=>({
    container:{
      width: `calc(100% - ${drawerWidth}px)`,      
    },
    paper:{
      padding: theme.spacing(3, 2),
    },

  })); 
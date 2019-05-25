import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Assignment_Ind from '@material-ui/icons/AssignmentInd';
import CreditCard from '@material-ui/icons/CreditCard';
import CardTravel from '@material-ui/icons/CardTravel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
   root: {
       flexGrow: 1,
     },
     paper: {
       padding: '${theme.spacing.unit * 3}px',
       textAlign: 'center',
       color: theme.palette.text.secondary,
       bottom :0,
       position:'absolute',
       width: '100%'
     },
})

class Home extends Component {
   render() {
       return (
           <div className={this.props.classes.root}>
               <Grid container spacing={8}>
                   <Grid item xs={12}>
                       <Paper className={this.props.classes.paper}>
                           <BottomNavigation showLabels
                               className={this.props.classes.root}>                              
                               <BottomNavigationAction component={Link} to="bank" label="Bank" icon={<CreditCard />} />
                               <BottomNavigationAction component={Link} to="government" label="Government" icon={<CardTravel />} /> 
                           </BottomNavigation>
                       </Paper>
                   </Grid>
               </Grid>
           </div>

       )
   }
}

Home.props = {
   classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home);
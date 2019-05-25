import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import HomePage from '../homepage';
const styles = {
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: 'white',
      },
}

class GovernmentCointainer extends Component {
   render() {
       return (           
           <div>
               <HomePage />
               <List className={this.props.classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="TIN"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="PhilHealth"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="HDMF"/>
      </ListItem>
    
    </List>
           </div>
       )
   }
}

GovernmentCointainer.props = {
   classes: PropTypes.object.isRequired
}

export default withStyles(styles)(GovernmentCointainer);
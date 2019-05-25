import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: 'white'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      dense: {
        marginTop: 16,  
      },
      menu: {
        width: 200,
      },
      button: {
        margin: theme.spacing(1),
      },
      input: {
        display: 'none',
      },
      marginRight :{
          marginRight : 20,
      }
})

class AddBank extends Component {
    state = {
        bankname :'',
        bankaccount : ''
}

insertBank =() =>{
    var forInsert = {
        bankname: this.state.bankname,
        bankaccount :this.state.bankaccount,
    }

    let db = indexedDB.open("MyDataRichard");
    db.onsuccess = (event) => {
    let tx = event.target.result.transaction(['bank'], "readwrite");
    let store = tx.objectStore('bank');
    store.put(forInsert);
    tx.oncomplete = (event) => {
      this.props.history.push('/bank')
    }
    tx.onerror = (event) => {
     
    }
  }

}
handleChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  }
   render() {
       return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <form className={this.props.classes.container} noValidate autoComplete="off">
      <TextField
        id="filled-name"
        label="Bank name"
        className={this.props.classes.textField}
        onChange={this.handleChange.bind(this,'bankname')}
        margin="normal"
        variant="filled"
      />
       <TextField
        id="filled-name"
        label="Bank number"
        onChange={this.handleChange.bind(this,'bankaccount')}
        className={this.props.classes.textField}
        margin="normal"
        variant="filled"
      />
      <Button className ={this.props.classes.marginRight} onClick ={this.insertBank.bind(this)} variant="contained" color="primary" >
        Add Bank
      </Button>

      <Button variant="contained" color="secondary">
        Cancel
      </Button>
      </form>
      </Container>
    </React.Fragment>
       )
   }
}

AddBank.props = {
   classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AddBank);
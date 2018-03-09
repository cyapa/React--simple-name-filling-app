import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import { grey200, grey50, grey600, grey300, green100, white, green600 } from 'material-ui/styles/colors';


class App extends Component {
  constructor(){
    super();

    this.state={
      fname: '',
      mName: '',
      lName: '',
      midNameDisability:true
    }
  }
  autoFillClicked = ()=>{

    this.setState(
      {
        fname:'Chathura',
        mName:'Wijebandara',
        lName:'Yapa',
        midNameDisability: this.state.midNameDisability

      }
    );
  }

  setMnameAvailability = ()=>{
    let avail = !this.state.midNameDisability
    this.setState(
      {
        midNameDisability: avail
      }
    );
  }


  fNameChanged = (event,input)=>{

    this.setState(
      {
        fname:input
      }
    );
  }

  mNameChanged = (event,input)=>{

    this.setState(
      {
        mName:input
      }
    );
  }

  lNameChanged = (event,input)=>{

    this.setState(
      {
        lName:input
      }
    );
  }

  render() {
    return (
        <MuiThemeProvider>
          <Paper style={{width:600,height:350,backgroundColor:green100}}>
            <div style={{float:'left', width:'100%'}}>
            First Name: <TextField id='f-name-txt' style={{backgroundColor:white}} defaultValue='h' value={this.state.fname} onChange={(e,v) =>{this.fNameChanged(v)}}/>
            </div>
            <div style={{float:'left', width:'100%'}}>
            Middle Name: <TextField id='m-name-txt' style={{backgroundColor:white}} value={this.state.mName} onChange={(e,v) =>{this.mNameChanged(v)}} disabled={this.state.midNameDisability}/>
            </div>
            <div style={{float:'left', width:'100%'}}>
            Last Name: <TextField id='l-name-txt' style={{backgroundColor:white}} value={this.state.lName} onChange={(e,v) =>{this.lNameChanged(v)}}/>
            </div>
            <div style={{float:'left', width:'100%'}}>
              Middle Name: <Checkbox id='m-name-ckbx' onClick={(e,v)=>{this.setMnameAvailability()}}/> 
            </div>
            <RaisedButton id='autofill-btn' label='Autofill' style={{float:'center', width:'100%',fontWeight:'bold',backgroundColor:grey600}} onClick={(e)=>{this.autoFillClicked();}}/>
          </Paper>
        </MuiThemeProvider>
    );
  }
}

export default App;

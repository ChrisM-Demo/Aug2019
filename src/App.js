import React, { useState } from 'react';
import ReactDom from 'react-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import logo from './logo.svg';
import './App.css';

function FTextInput({initialValue})
{
//alert( JSON.stringify( initialValue))
  const[id,setId] = useState(initialValue.id);
  const[fname,setfName] = useState(initialValue.name );
  const[fdataType,setfDtaType] = useState(initialValue.dataType);
  

  return (
    <div>
      <TextField name={fname} label={fname}  type={fdataType}></TextField>
      </div>
  )
  
 /* 
  return (
  )*/
}


function App() {
  return (
    <div >
      <header>      
        <TextField name="THETXT" label="TheLabel"></TextField>   
        <TextField name="THEDate" label="Birthday"  type="date"></TextField>
        <FTextInput initialValue = {  { "name":"FirstName", "id":"idFirstName" , "dataType":"text" , "count":123}}></FTextInput> 
        <FTextInput initialValue = {  { "name":"DateOfBirth", "id":"idDateOfBirth" , "dataType":"date", "count":555123}}></FTextInput> 
           </header>
    </div>

    );
}

export default App;

// flexsign demo

import React, { useState } from 'react';
import ReactDom from 'react-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import logo from './logo.svg';
import './App.css';
import { Dialog } from '@material-ui/core';

var allFields;

function FlexInput({initialValue})
{ 
  const[label,setLabel] = useState(initialValue.label); 
  const[fieldId,setFieldId] = useState(initialValue.fieldId); 
  const[dataType,setDataType] = useState(QQ(initialValue.dataType , "text"));
  const[options,setOptions] = useState(initialValue.options);
  const[selectList,setSelectList] = useState("");
  const [value,setValue]= useState("");
  
  function getId() { return fieldId;}
  return ( 
    <div>
     {options==null ?
      ( 
        <div>
      <label>{label}</label>
      <p>.</p>
      <TextField name={fieldId} type={dataType}></TextField>
        </div>
    )
    :
    (
      <div>
      <label>{label}</label>
        <Select  fullWidth="true"  name={fieldId}>
        { options.map(function (o, i) {return (<option key={i} value={o}>{o}</option>) } ) }
          </Select>
    </div>      
    )
    }
      </div>
  )
}

function FlexTextField(id,label)
{
  const iv =  {initialValue : {
  "fieldId" : id,
  "label": label,
  "dataType": "Text"
  }}

  const Field  = new FlexInput(iv)
  return Field;
}

function FlexSelectField(id,label,options)
 {
   const iv =  {initialValue : {
   "fieldId" : id,
   "label": label,
   "options": options
   }}
   return(new FlexInput(iv));
  }

function FlexDateField(id,label)
{
  const iv =  {initialValue : {
  "fieldId" : id,
  "label": label,
  "dataType": "date"
  }}
  return(new FlexInput(iv));
 }

 function FlexFileField(id,label)
{
  const iv =  {initialValue : {
  "fieldId" : id,
  "label": label,
  "dataType": "file"
  }}
  return(new FlexInput(iv));
 }

function setupFields()
{
  const fields = []
  fields.push(new FlexTextField("FirstName", "First name"));
  fields.push(new FlexTextField("Surname","Surname"));
  fields.push(new FlexTextField("Tel","Phone number"));
  fields.push(new FlexTextField("Email","Email"));
  fields.push(new FlexDateField("DateOfBirth","Date of birth")); 
  fields.push(new FlexSelectField("Based","Where are you based?", ["London","Cambridge","Manchester"]));
  fields.push(new FlexSelectField("HowHear","How did you hear about F-LEX", ["Web search","Recommended by colleague","Other"])); 
  fields.push(new FlexTextField("RefBy","If you were referred to F-LEX by a friend, employer, university, or at an event please provide their details below"));
  fields.push(new FlexDateField("AvalStart","Date available to start"));
  fields.push(new FlexSelectField("Lawyer","Are you a qualified lawyer?",["UK qualified","Foreign qualified","No"]));
  fields.push(new FlexSelectField("WorkType","What sort of work are you lookin for?",["Full time","Part time"]));
  fields.push(new FlexTextField("Languages","List the languages you know"));
  fields.push(new FlexSelectField("ParaTrain","If you are a paralegal, have you secured or completed a training contract?",["Yes","No","N/A"]));
  fields.push(new FlexTextField("ParaFirm","Training contract firm"));
  fields.push(new FlexDateField("ParaTrainStart","Training contract start date")); 
  fields.push(new FlexFileField("CV", "Upload your CV (please include grades where relevant)"));
 allFields = fields;
}

function QQ(x,y) {    //QuestionQuestion like c# ??
  if (x==null) return y;
  return x;
}

function ValidateData()
{
  // todo - validation
  // return error message if fails 
       return "";
}


function GetData()  /// not working,   How can I see names/values in allFields?
{
//  var ret = {};
//  return( allFields.map(function(field){ret[field.fieldId]=field.value})     
return {}
}


async function SaveData(cvRef)
{
  var x = GetData();
  x.CVRef =  cvRef;
  localStorage.setItem("LastSignup",x)
  return true;
}

async function UploadCV()
{
// post to service and get reference
//return reference
return "XYZ123"
}

function PostData()
{
  if (!ValidateData()!="") 
  {
    alert("It went wrong")
    return;
  }
  UploadCV().then(cvRef =>  SaveData(cvRef)).then(ok=> alert("Signup Successful"));  // should be react material Dialog
}

function App() {
  setupFields();
  return (
    <div >
      <body> 
        <button onClick={PostData}>Post data</button>
        {allFields.map((o, index) => {return (<div>{o}</div>)})}  
      </body>
    </div>
    );
}

export default App;

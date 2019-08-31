import React, { useState } from 'react';
import ReactDom from 'react-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import logo from './logo.svg';
import './App.css';

var allFields;

function FlexInput({initialValue})
{ 
  const[fieldKey,setFieldKey] = useState(initialValue.fieldKey); 
  const[dataType,setDataType] = useState(QQ(initialValue.dataType , "text"));
  const[options,setOptions] = useState(initialValue.options);
  const[selectList,setSelectList] = useState("");
  

  return ( 
    <div>
     {options==null ?
      ( 
        <div>
      <label>{fieldKey[1]}</label>
      <p>.</p>
      <TextField name={fieldKey[0]} type={dataType}></TextField>
        </div>
    )
    :
    (
      <div>
      <label>{fieldKey[1]}</label>
      <p>.</p>
        <Select name={fieldKey[0]}>
        {
          options.map(function (o, i) {
         return (<option
            key={i}
            value={o}>
            {o}
            </option>
          )
          }
          )
        }
          </Select>
    </div>      
    )
    }
      </div>
  )
}

// function DateInput({initialValue})
// { 
//   const[flexInput, setFlexInput] = useState(FlexInput( { "fieldKey":initialValue.fieldKey  , "dataType":"date"}  )) 
//   return flexInput;
// }


function Field({initialValue})
{
  const [valuex,setValuex] = useState("");
 //  const [valuey,setValuey] = y;
  return (<div></div>);
 }

function setupFields()
{
  var fields = []; 
  fields.push(new Field("S","F"));
  fields.push(new Field("A","B"));

  allFields = fields;
}


const firstName = ["FN", "First name"];
const surname = ["SN","Surname"];
const phoneNumber = ["TEL","Phone number"]
const email = ["EM","Email"]
const dateOfBirth = ["DOB","Date of birth"]
const whereAreYouBased = ["BASE","Where are you based?"]
const howDidYouHear = ["HOWH","How did you hear about F-LEX"];
const whoRecommendedYou = ["REF","If you were referred to F-LEX by a friend, employer, university, or at an event please provide their details below"]
const availableStartDate = ["AVSTRT","Date available to start"]
const areYouALawyer = ["LYR","Are you a qualified lawyer?"]
const whatSortOfWork = ["WSW","What sort of work are you lookin for?"]
const languages = ["LANG","List the languages you know"]
const paralegalTraining = ["PTR","If you are a paralegal, have you secured or completed a training contract?"]
const paralegalFirm = ["PFIRM","Training contract firm"]
const paralegalStartDate = ["PARSTRT","Training contract start date"]
const selectCV = ["CV", "Upload your CV (please include grades where relevant)"]


function QQ(x,y) {    //QuestionQuestion
  if (x==null) return y;
  return x;
}



function App() {
  setupFields();
  return (
    <div >
      <body>      
        {allFields.map((o, index) => {
          return (
              <p>
                  {o} 
              </p>
            )
          }
          )
        }
        <FlexInput initialValue = {  { "fieldKey":firstName  }}></FlexInput> 
        <FlexInput initialValue = {  { "fieldKey":surname  }}></FlexInput> 
        <FlexInput initialValue = {  { "fieldKey":phoneNumber   }}></FlexInput> 
        <FlexInput initialValue = {  { "fieldKey":email   }}></FlexInput> 
        <FlexInput initialValue = {  { "fieldKey":dateOfBirth  , "dataType":"date"}}></FlexInput> 
        <FlexInput initialValue = {  { "fieldKey":whereAreYouBased , options: ["London","Cambridge","Manchester"]} }></FlexInput> 
        <FlexInput initialValue = {  { "fieldKey":areYouALawyer }}></FlexInput> 
        <FlexInput initialValue = {  { "fieldKey":paralegalTraining }}></FlexInput> 
        <FlexInput initialValue = {  { "fieldKey":paralegalFirm }}></FlexInput> 
        <FlexInput initialValue = {  { "fieldKey":whereAreYouBased }}></FlexInput> 
        <FlexInput initialValue = {  { "fieldKey":whoRecommendedYou }}></FlexInput> 
        <FlexInput initialValue = {  { "fieldKey":paralegalStartDate }}></FlexInput> 
        <FlexInput initialValue = {  { "fieldKey":availableStartDate }}></FlexInput> 
      </body>
    </div>
    );
}

export default App;

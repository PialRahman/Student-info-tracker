import React, { useState } from 'react';
import { useContext } from 'react';
import { StudentContext } from './StudentContext';
import {Link} from 'react-router-dom';
import {Button,Form} from 'react-bootstrap';

function CreateStudent() {
    const [student,setStudent]=useContext(StudentContext); 
    const [id,setId] =useState("");
    const [name,setName] =useState("");
    const [program,setProgram] =useState("");
    const [depertment,setDepertment] =useState("");
    const [messege,setMessege]= useState("");
    const addmessage=()=>{
    if(id!="" && name!="" && program!="" && depertment!=""){
       setMessege("new student has been added!")
    }
    }
    const addId=(e)=>{
      setId(e.target.value)
    }
    const addName=(e)=>{
      setName(e.target.value)
      
    }
    const addProgram=(e)=>{
      setProgram(e.target.value)
    }
    const addDepertment=(e)=>{
      setDepertment(e.target.value)
    }
    const addStudentInformation=(e)=>{
         e.preventDefault();
         if(id!="" && name!="" && program!="" && depertment!=""){
         setStudent([...student,{id:id,name:name,program:program,depertment:depertment}]);  
    }  
    }

  return (
    <div>
        <h2>Create New Student</h2>
        <Form onSubmit={addStudentInformation}>
        <div className="form-group">
    <label for="id">ID: </label>
    <input type="text" id="id" value={id} onChange={addId} placeholder="Enter Name" required></input><br></br><br></br>
    
  </div>
  <div class="form-group">
    <label for="name">Name:  </label>
    <input type="text" id="name" value={name} onChange={addName} placeholder="Enter Name" required></input><br></br><br></br>
    
  </div>
  
  <div class="form-group">
    <label for="program">Program: </label>
    <input type="text" id="InputProgram" value={program} onChange={addProgram} placeholder="Program" required></input><br></br><br></br>
  </div>
  <div class="form-group">
    <label for="depertment">Depertment: </label>
    <input type="text" id="depertment" value={depertment} onChange={addDepertment} placeholder="Depertment" required></input><br></br><br></br>
  </div>
  <br></br>
  <Button onClick={addmessage} type="submit" class="btn btn-primary">Create</Button>
  <Link to="/"><Button className="btndsns btn btn-primary">Back to Home</Button></Link><br></br><br></br>
  {messege}
</Form>
    </div>
  )
}

export default CreateStudent
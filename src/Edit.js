import React, { useState } from 'react';
import { StudentContext } from './StudentContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Button,Form} from 'react-bootstrap';

function Edit() {
    const [student,setStudent]=useContext(StudentContext);
    const {id} =useParams();
    const [name,setName] =useState(student[id-1].name);
    const [program,setProgram] =useState(student[id-1].program);
    const [depertment,setDepertment] =useState(student[id-1].depertment);
    const [messege,setMessege]= useState("");
    const addmessage=()=>{
        setMessege("Student Information has been updated")
    };

    const editName=(e)=>{
        
         setName(e.target.value);
         const newname=name;
         student[id-1].name=newname;
    };
    const editProgram=(e)=>{
       
        setProgram(e.target.value);
        const newprogram=program;
        student[id-1].program=newprogram;
   };
   const editDepertment=(e)=>{
   
    setDepertment(e.target.value);
    const newdepertment=depertment;
    student[id-1].depertment=newdepertment;
};
const editStudentinformation=(e)=>{
    e.preventDefault();
    setStudent([...student]);


};
  return (
    <div>
        <h1>Edit Page</h1>
        <Form onSubmit={editStudentinformation}>
        <div className="form-group">
   
    <h4>ID: {student[id-1].id}</h4>   
    
  </div>
  <div className="form-group">
    <label for="name">Name: </label>
    <input type="text" id="name" value={name} onChange={editName} required></input><br></br><br></br>
  </div>
  <div className="form-group">
    <label for="program">Program: </label>
    <input type="text" id="program" value={program} onChange={editProgram} required></input><br></br><br></br>
  </div>
  <div className="form-group">
    <label for="depertment">Depertment: </label>
    <input type="text" id="depertment" value={depertment} onChange={editDepertment} required></input><br></br><br></br>
  </div>
  <br></br>
  <Button  type="submit" onClick={addmessage} className="btn btn-warning">Update</Button><br></br><br></br>
  {messege}
  <Link to="/"><Button  className="btndsns btn btn-primary">Back to Home</Button></Link><br></br><br></br>

</Form>
    </div>
  )
};


export default Edit
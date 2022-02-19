import React, { useContext } from 'react';
import {Button,Table} from 'react-bootstrap';
import { StudentContext } from './StudentContext';
import './App.css';
import {Link, useParams} from 'react-router-dom';

const Homepage=()=> {
  const [student,setStudent]=useContext(StudentContext);
  const {id}= useParams();
 
  return (
    
    <div>
     <h1>Student information tracker </h1>
      <Table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Program</th>
      <th scope="col">Depertment</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
  { 
       student.map(studentinfo=>
    <tr>
      <th scope="row">{studentinfo.id}</th>
      <td>{studentinfo.name}</td>
      <td>{studentinfo.program}</td>
      <td>{studentinfo.depertment}</td>
      <td>
        <Link to={"/read/"+studentinfo.id}><Button className="btndsns btn btn-success">Read</Button></Link>
        <Link to={"/edit/"+studentinfo.id}> <Button className="btndsns btn btn-warning">Edit</Button></Link>
        <Link to={"/delete/"+studentinfo.id}><Button className="btndsns btn btn-danger">Delete</Button></Link>
      </td>
    </tr>
    )
   }
  </tbody>
</Table>
<Link to="/create"><Button className="">Add Student</Button></Link>
      </div>
  )
}

export default Homepage
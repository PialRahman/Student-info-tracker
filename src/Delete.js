import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { StudentContext } from './StudentContext';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function Delete() {
    const [student,setStudent]=useContext(StudentContext);
    const {id}=useParams();
    const deleteStudentinformation=(id)=>{
        const studentinfo=student.filter((studentinfo)=>studentinfo.id!=id);
        setStudent(studentinfo);
     }
  return (
    <div>
        <h1>Are you sure to delete "{student[id-1].name}"?</h1>
        <Link to={"/"}><Button className="btndsns btn btn-danger" onClick={()=>deleteStudentinformation(id)}>Delete</Button></Link>
        <Link to={"/"}><Button className="btndsns btn btn-warning">Not Now</Button></Link>
    </div>
  )
}

export default Delete
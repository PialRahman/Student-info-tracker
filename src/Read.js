import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {Button,Table} from 'react-bootstrap';
import { StudentContext } from './StudentContext';
import {Link} from 'react-router-dom';

function Read() {
    const [student,setStudent]= useContext(StudentContext);
    const {id}= useParams();
   
    
  return (
    <div>
        <h2>Read</h2>
        <Table>
          <thead>
            <tr>
              <th><h2>ID</h2></th>
              <th><h2>Name</h2></th>
              <th><h2>Program</h2></th>
              <th><h2>Depertment</h2></th>

            </tr>
          </thead>
          <tbody><tr>
              <td><h4>{student[id-1].id}</h4></td>
              <td><h4>{student[id-1].name}</h4> </td>
              <td><h4>{student[id-1].program}</h4> </td>
              <td><h4>{student[id-1].depertment}</h4> </td>
               </tr></tbody>
         </Table>
               <Link to="/"><Button className="btndsns btn btn-primary">Back to Home</Button></Link>
            
    </div>
  )
}

export default Read
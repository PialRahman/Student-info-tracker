import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import  Homepage  from './Homepage';
import {Button} from 'react-bootstrap';
import { Studentprovideinformation } from './StudentContext';
import {Link} from 'react-router-dom';
import Delete from './Delete';
import Read from './Read';
import CreateStudent from './CreateStudent';
import Edit from './Edit';

function App() {
  return (
    <div className="App">
      
      <div>
      <Studentprovideinformation>
     
      <Router>
        
        <Routes>
        
          <Route path="/" element={<Homepage/>}/>
          <Route path="/delete/:id" element={<Delete/>}/>
          <Route path="/read/:id" element={<Read/>}/>
          <Route path="/create" element={<CreateStudent/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
          
  
     </Routes>
     
     </Router>  
 
     
    
   </Studentprovideinformation>
   </div>
    </div>
  );
}

export default App;

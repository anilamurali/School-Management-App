import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Component/Home';
import Addstudent from './Component/Addstudent';
import Studentsearch from './Component/Studentsearch';
import Addfacutly from './Component/Addfacutly';
import Viewfaculty from './Component/Viewfaculty';
import Viewstudent from './Component/Viewstudent';
import Header from './Component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Facultysearch from './Component/Facultysearch';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/' exact element={<Home/>}/>
     <Route path='/studentview' exact element={<Viewstudent/>}/>
     <Route path='/addstudent' exact element={<Addstudent/>}/>
     <Route path='/searchstudent' exact element={<Studentsearch/>}/>
     <Route path='/viewfaculty' exact element={<Viewfaculty/>}/>
     <Route path='/addfaculty' exact element={<Addfacutly/>} />
     <Route path='/Searchfaculty' exact element={<Facultysearch/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;

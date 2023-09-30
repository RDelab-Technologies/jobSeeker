import React from 'react';
import Home from './Home';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Contact from  './Contact';
import Service from './Services'
import None from './404';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Login from './loginpage';
import SignUp from './singup';
import Companies from './companies';
import Company from './Company';
import UserProfile from '../section/jobseekrProfile/UserProfile';
import UserProfileDetails from '../section/jobseekrProfile/UserProfileDetails';



const App = () =>{
     return (
          <>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/service' element={<Service/>} />
             <Route path='/Company' element={<Company />} />
              <Route path='/contact' element={<Contact/>} /> 
              <Route path='/Companies' element={<Companies/>} /> 
              <Route path='/Companies' element={<Companies/>} />
               <Route path='/login' element={<Login/>} /> 
              <Route path='/signup' element={<SignUp/>} /> 
              <Route path='/Userprofile' element={<UserProfile/>}/>
               <Route path='/UserProfileDetails' element={<UserProfileDetails/>}/>
              
              <Route path='*' element={<None/>} /> 
          </Routes>
          <Footer/>
          </>
     )
}

export default App;
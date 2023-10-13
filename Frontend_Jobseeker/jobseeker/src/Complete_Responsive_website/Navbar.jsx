import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'
// import Button from '@mui/material/Button';

const Navbar = () => {
     return (
          <>
               <div className='container-fluid nav_bg'>
                    <div className='row navall'>
                         <div className='col-10 mx-auto'>
                              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                                   <div className="container-fluid">
                                        <NavLink className="navbar-brand" to="/">JobSeeker</NavLink>
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                             <span className="navbar-toggler-icon"></span>
                                        </button>

                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                             <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                                  <li className="nav-item" style={{ marginRight: 5 }}>
                                                       <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                                  </li>
                                                  <li className="nav-item " style={{ marginRight: 5 }}>
                                                       <NavLink activeClassName="menu_active" className="nav-link" to="/Jobs">jobs</NavLink>
                                                  </li>
                                                  {/* <li className="nav-item" style={{ marginRight: 5 }}>
                                                       <NavLink activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
                                                  </li>
                                                  <li className="nav-item " style={{ marginRight: 5 }}>
                                                       <NavLink activeClassName="menu_active" className="nav-link" to="/Companies">Companies</NavLink>
                                                  </li> */}

                                                  <li className="nav-item " style={{ marginRight: 5 }}>
                                                       <NavLink activeClassName="menu_active" className="nav-link" to="/Cover">Recruiter Profile</NavLink>
                                                  </li> 
                                           
                                                  <li className="nav-item" style={{ marginRight: 5 }}>
                                                       <NavLink activeClassName="menu_active" className="nav-link" to="/UserProfileDetails">Jobseeker Profile</NavLink>
                                                  </li>
                                                  <li className="nav-item" style={{ marginRight: 5 }}>
                                                       <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                                                  </li>
                                                  <li className="nav-item" style={{ marginRight: 5 }}>
                                                       <div class="btn-group">
                                                            <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                 login
                                                            </button>
                                                            <ul class="dropdown-menu">
                                                                 <li><NavLink class="dropdown-item" to="/login"><span className='loin'>JobSeeker</span> </NavLink></li>
                                                                 <li><NavLink class="dropdown-item" to="/login"><span className='loin'>Recruiter</span> </NavLink></li>
                                                            </ul>
                                                       </div>
                                                  </li>
                                             </ul>

                                        </div>
                                   </div>
                              </nav>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Navbar;
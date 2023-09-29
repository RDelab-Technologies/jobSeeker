import React from 'react';
import { NavLink } from 'react-router-dom';
//const web = 'https://thumbs.dreamstime.com/z/grow-your-business-words-office-table-computer-coffee-notepad-smartphone-digital-tablet-66818060.jpg'



const CompanyCards = (props) => {
     return (
          <>
               <div className='col-md-4 col-10 mx-auto'>
                    <div className="cardds" >
                    <img src={props.imgsrc} className="card-img-top" alt={props.title}   /> 
                         <div class="card-body">
                              <h1 className="card-title">{props.title}</h1>
                              <h4 className="card-Post">{props.Post}</h4>
                              <p className="card-date">{props.date}</p>
                              <h6 className="card-Types">{props.Types}</h6>
                              <h2 className="card-Salary">{props.Salary}</h2>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <h5 className="card-Location">{props.Location}</h5>
                              <NavLink to="" className="btn btn-primary">Apply now</NavLink>
                    
                         </div>
                       </div>
                    </div>
          </>
     )
}

export default CompanyCards;
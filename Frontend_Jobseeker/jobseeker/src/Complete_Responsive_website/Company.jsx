import React from 'react';
import CompanyCards from './CompanyCards';
import CompanyData from './CompanyData';
const Company = () => {
     return (
          <>
                   <div className='my-5'>
                    <h1 className='text-center'>Companies</h1>
               </div>
               <div className='container-fluid mb-5' >
                    <div className='row '>
                         <div className='col-10 mx-auto'>
                              <div className='row gy-4'>
                    {
                         CompanyData.map((val,ind)=>{
                              return (
                                   <CompanyCards key={ind} imgsrc={val.imgsrc} title={val.title}/>
                              )
                         })
                    }
                              </div>

                         </div>
                    </div>
               </div>
        
          </>
     )
}

export default Company;
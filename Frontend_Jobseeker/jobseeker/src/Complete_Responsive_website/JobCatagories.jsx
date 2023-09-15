import React from 'react';
import './JobCatagories.css';
import Jobcard from './JobCard';
import Jobpart from './ApiCatagories';

const JobCatagories = () => {
    return (
        <>
            <section className='category-section-two position-relative pt-150 lg-pt-100 pb-140 lg-pb-80'>
                <div className='container'>
                    <div className='row justify-content-between'>

                        <div className='col-md-6 col-sm-8'>
                            <div className='title-one text-center text-sm-start wow fadeInUp' data-wow-delay='0.3s'>
                                <h2 className='fw-600'>Most demanding job categories.</h2>
                            </div>
                        </div>
                        <div className='col-md-5 col-sm-4'>
                            <div className='d-none d-sm-flex justify-content-sm-end mt-25'>
                                <a className='btn-six border-0' href='...'>{' All Categories >' }</a>
                            </div>

                        </div>

                    </div>
                    <div className='card-wrapper row mt-80 lg-mt-40'>
                      {/* card added */}
             { 

                   Jobpart.map((val,ind)=>{
                         return (
                            <Jobcard key={ind} imgr={val.imgr} title={val.title} setitle={val.setitle} post={val.post} />
                         )
                   })}
                          


                  

                   </div>

                </div> 
    
            </section>
        
        </>


    );
}

export default JobCatagories;
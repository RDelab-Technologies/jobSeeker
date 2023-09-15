import React from 'react';

const Jobcard = (props) => {
    return (
        <>
            
                <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
                    <div className='card-style-four undefined tran3s w-100 mt-30 wow fadeInUp'>
                        <a className='d-block' href='..'>
                            <div className='icon tran3s d-flex align-items-center justify-content-center'>

                                <img src={props.imgr} loading='lazy' width={30} height={30} decoding='async' alt={props.title} />
                            </div>
                            <div className='title tran3s fw-500 text-lg'>
                              {props.title} <br/>
                               {props.setitle}
                            </div>
                            <div className='total-job'>
                               {props.post  } 
                                 vacancy
                            </div>
                        </a>
                    </div>
                </div>

        </>
    );

}

export default Jobcard;
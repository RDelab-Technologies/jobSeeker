import React from 'react';
import Jobicons from './Jobiconsmid';
import Searchbar from './Search';
import './Jobiconsmid.css';
// import Sliderr from './Siliber';
import Companies from './companies';
import HoDasbord from './HoDasbord';
import SSlider from './SSlider';
import JobCatagories from './JobCatagories';
const Home = () => {
     return (
          <>
               <div className='homemid'>
                    <div className='middpart'>
                         {/* search */}
                         <Searchbar />
                         {/* end */}
                         {/* job details */}
                         <Jobicons />
                         {/* company collaboration */}

                         <JobCatagories/>
                         <Companies/>
                         {/* end */}   

                         <div  className='compinfo'>
                              <img src="images/compinfo.png" alt='compinfo'/>
                         </div>

                         <HoDasbord/>
                    </div>
                    {/* job details end */}
                    {/* // slider <Slider /> start */}
                    <SSlider />
                    {/* # slider line end */}
               </div>

          </>
     )
}

export default Home;
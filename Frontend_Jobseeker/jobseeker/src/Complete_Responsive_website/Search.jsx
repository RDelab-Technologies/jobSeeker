import React from 'react';
const Searchbar = () => {
    return (
        <>
            <div className='box1' style={{ outline: 'none', border: 'none'}}>
                <div>
                    <h1 >Find the <span className='theme'> Dream </span>Job. <span className='theme'> Right </span> Now.</h1>
                    <h4>5 lakh+ jobs for you to explore</h4>
                    <div class="boxin input-group mb-0 " >
                        <img src="https://static.naukimg.com/s/7/103/i/search.57b43584.svg" alt="..." />
                        <input  id='searchid' type="search" class="form-control" placeholder="Find Job/Intership" aria-label="Username" />

                        <img src="images/location.png" alt="..." />
                        <input type="text" class="form-control" placeholder="Location" aria-label="Server" />
                        <button  className='butt' type="button" class="btn btn-primary">Search</button>
                    </div>
                </div>
            </div>          
            
        </>
    )
}

export default Searchbar;
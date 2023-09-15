import React from 'react';
const Sliderr = () => {
     return (
          <>
             <div className='slider'>
                         <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                              <div class="carousel-inner h-10">
                                   <div class="carousel-item active">
                                        <img src="images/s1.jpg" class="d-block w-100 " alt="..." />
                                   </div>
                                   <div class="carousel-item">
                                        <img src="images/s2.jpg" class="d-block w-100 " alt="..." />
                                   </div>
                                   <div class="carousel-item">
                                        <img src="images/s2.jpg" class="d-block w-100 " alt="..." />
                                   </div>
                              </div>
                              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                   <span class="visually-hidden">Previous</span>
                              </button>
                              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                   <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                   <span class="visually-hidden">Next</span>
                              </button>
                         </div>
                    </div>
          </>
     )
}

export default Sliderr;
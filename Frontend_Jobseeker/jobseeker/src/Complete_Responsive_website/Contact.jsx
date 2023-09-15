import React from 'react';
import './contact.css'

const Contact = () => {
  
  return (
    <>
  
  <div className='contact'>
     <div>.</div>
      <div className='my-3'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='contbox'>
        <div className='contimg'>
        <img src="images/contact-1.png" class="d-block w-100 " alt="..."/>
        </div>
        <div className='contform'>
        <div className='container contact_div'>
    
       <div className='row row-form'>
      <div className='col-md-10 col-10 mx-auto'>

        <form >
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name"
            name='fullname'
           />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Phone</label>
            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Mobile Number"
            name='phone'
           />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
              name='email'
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter your message'
            name='message'
          ></textarea>
          </div>
          <div className='col-12 button'>
            <button className='btn btn-outline-primary' type='submit'>Submit</button>
          </div>
        </form>


      </div>
    </div>
</div>
        </div>
      </div>
      </div>

    </>
  )
}

export default Contact;
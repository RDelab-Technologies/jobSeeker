  
import React from "react";
import "./footer.css";


function Footer() {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
       <div className="sb_footer-links">
        <div className="sb_footer-links_div" > 
             <h4>For Bussiness</h4>
                <a href="/employer">
                     <p>Employer</p>
                     </a>
                <a href="/employer">
                     <p>Working</p>
                     </a>
                <a href="/employer">
                     <p>Individual</p>
                     </a>
           
         </div>

         <div className="sb_footer-links_div" > 
             <h4> Resources</h4>
                <a href="/employer">
                     <p>Carrer Advice</p>
                     </a>
                <a href="/employer">
                    <p>Help Center</p>
                    </a>
                <a href="/employer">
                   <p>About us</p>
                   </a>
         </div> 

         <div className="sb_footer-links_div" > 
             <h4> Our Partners</h4>
                <a href="/employer">
                  <p>Swwigy</p> </a>
                  <a href="/employer">
                  <p>Zomato</p> </a>
                  <a href="/employer">
                  <p>Tata</p> </a>
                  <a href="/employer">
                  <p>Star</p> </a>
         </div>


         <div className="sb_footer-links_div" > 
             <h4>Company</h4>
                <a href="/employer">
                  <p>Browse Companies </p></a>
                  <a href="/employer">
                  <p>Carrer</p></a>
                <a href="/employer">
                  <p>Advertise with us</p></a>
                  <a href="/employer">
                  <p>Report Issue</p></a>
           </div>

           <div className="sb_footer-links_div"> 
             <h4> Our Social Account</h4>
                <div className="socialmedia">
                    <p> <img width="180" height="180" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook-new"/></p>
                    <p><img width="180" height="180" src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png" alt="instagram-new--v1"/></p>
                    <p><img width="180" height="180" src="https://img.icons8.com/ios-filled/50/twitter.png" alt="twitter"/></p>
                    <p><img width="180" height="180" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/></p>
                </div>
         </div>
      </div>

      <hr></hr>

      <div className="sb_footer-below">
         <div className="sb_footer-copyright">
            <p> 
            @{new Date().getFullYear()}jobkeer. All right reserved. 
            </p>
         </div>
         <div className = "sb_footer-below-links">
         <a href ="/terms"><div><p> Terms & Conditions </p></div></a>
         <a href ="/Privacy"><div><p> Privacy </p></div></a>
         <a href ="/Security"><div><p> Security </p></div></a>
         <a href ="/Cookie Declaration"><div><p> Cookie Declaration </p></div></a>
         
         </div>
       </div>
      </div>
    </div>
  );
}

export default Footer;

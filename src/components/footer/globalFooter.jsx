import { useState } from "react";

const globalFooter = () => {
  

  return (
    <>
 <div className="footerMini">
      <div className="container">
        <div className="row align-items-center"> 
          <div className="col-lg-6 col-md-6 col-12 mb-2 mt-2"> 

            <div className="copyright"> Copyright © 2023 All Rights Reserved | Add Powered by <a href="#">PCT</a>      </div>
           </div>

           <div className="col-lg-3 col-md-3 col-4 mb-2 mt-2">
             <div className="partnered">  <img className="img-fluid" src="/imgs/our-partners.png" alt="our partners"/></div>
             
           </div>

           <div className="col-lg-3 col-md-3 col-8 mb-2 mt-2">

              <img src="/imgs/we-accept-cards.svg" alt="we accept cards"/>

           </div>


 

        </div>



      </div>
    
    </div>


    </>
  );
};

export default globalFooter;

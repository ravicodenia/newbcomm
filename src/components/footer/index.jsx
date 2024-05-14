import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faTimes } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  

  return (
    <>
      <div className="need-help-container"> 
  <div className="container">
    <div className="row">
        <div className="col-lg-4 col-md-4 col-12">

      <div className="row">

        <div className="col-12"> 
          <div className="title">Need any help?</div>
        </div>

        <div className="col-12 mt-3"> 

          <div> <small> Call 24/7 for any help</small></div>
          <div className="text-primary1"> <h5>+1 123 456 7890</h5></div>
        </div>

        <div className="col-12 mt-2"> 
          <div> <small>Mail to our support team</small></div>
          <div className="text-primary1"> <h5>support@bcommerce.com</h5></div>
        </div>

        <div className="col-12 mt-3 mb-3">
          <div> <small>Follow us on</small></div>
          <div className="social_media"> 
      <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
    </div>
        
        </div>


      </div>

</div>
       
       <div className="col-lg-8 col-md-8 col-12">

<div className="foolinks">

  <div className="row">
    <div className="col-md-3">
      <div className="title">Company</div>
        <ul>      
            <li><a href="#">About Us</a> </li>
            <li><a href="#">Careers</a> </li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Collections</a></li>
            <li><a href="#">For Business</a></li>
            <li><a href="#">Gift Cards</a></li>
        </ul>
    </div>
    <div className="col-md-3">
      <div className="title">Support</div>
        <ul>
    
            <li><a href="#">Account </a> </li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Contract</a> </li>
            <li><a href="#">Affiliate Program</a></li>
            <li><a href="#">Privacy Policy</a></li>
        </ul>
    </div>
    <div className="col-md-3">
      <div className="title">Other Services</div>
      
        <ul>
 
            <li><a href="#">Community Program</a> </li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Rewards Program</a></li>
            <li><a href="#">Points PLUS</a> </li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">List My Hotels</a></li>

        </ul>
    </div>
    <div className="col-md-3">
   <div className="title">Top Cities</div>
        <ul>
         
            <li><a href="#">Chicago</a> </li>
            <li><a href="#">New York</a> </li>
            <li><a href="#">San Francisco</a></li>
            <li><a href="#">Califonia</a></li>
            <li><a href="#">Ohio</a></li>
            <li><a href="#">Alaska</a></li>
        </ul>
    </div>
</div>

</div>

      
        </div>
    </div>

</div>
</div>


    </>
  );
};

export default Footer;

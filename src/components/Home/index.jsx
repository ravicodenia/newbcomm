import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flights from './Flights';
import RecentSearches from "./Flights/recentSearches";
import BannerSection from "./Flights/bannersSection";
import LatestBooking from "./Flights/latestBooking";
import * as apiService from "../../services";
 
const HomePage = () => {
  const [homeScreenproducts, setHomeScreenproducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.homeScreenShowHide({ value: 1 });
        console.log(data.homeScreenShowHide);
        setHomeScreenproducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

    document.addEventListener('DOMContentLoaded', function () {
      var navLinks = document.querySelectorAll('.nav-link');
  
      navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent default anchor behavior
          var tabId = this.getAttribute('href');
  
          // Remove 'active' class from all nav links
          navLinks.forEach(function (navLink) {
            navLink.classList.remove('active');
          });
  
          // Remove 'show' and 'active' classes from all tab panes
          var tabPanes = document.querySelectorAll('.tab-pane');
          tabPanes.forEach(function (tabPane) {
            tabPane.classList.remove('show', 'active');
          });
  
          // Add 'active' class to the clicked nav link
          this.classList.add('active');
  
          // Add 'show' and 'active' classes to the corresponding tab pane
          document.querySelector(tabId).classList.add('show', 'active');
        });
      });
    }); 

   
  return (
    <>
        <section className="home-sec">
        <ul className="nav nav-tabs d-flex justify-content-center border-0" role="tablist">
                    <li className="nav-item">
                      <a href="#flights" className="nav-link active" role="tab" aria-selected="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"/></svg>

                      Flights
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#hotels" className="nav-link" role="tab" aria-selected="false">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z"/></svg>
                        Hotels
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                        </span>
                        </a>
                    </li>

                  

                    
                  </ul>

                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="flights" role="tabpanel">
                     <Flights/>
                     
                    </div>
                    <div className="tab-pane fade" id="hotels" role="tabpanel">
                     Hotels
                    </div>

                    <div className="tab-pane fade" id="paymentgateway" role="tabpanel">
                    Payment Gateway
                    </div>

                   {/* <div className="tab-pane fade" id="cruise" role="tabpanel">
                    Cruise
                    </div>*/}
                  </div>
                  </section>

    </>
  );
};

export default HomePage;

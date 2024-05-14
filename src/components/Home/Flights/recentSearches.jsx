
import React,{ useState,useEffect,useRef } from "react";
import * as apiService from "../../../services";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function RecentSearch() {
  const sliderRef = useRef(null);

   const [homeScreenShowHide, setHomeScreenShowHide] = useState([]);

    const fetchData = async (e) => {
    const data = await apiService.homeScreenShowHide({ value: 1 });
    console.log(data.homeScreenShowHide);
    setHomeScreenShowHide(data.homeScreenShowHide);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goPrevious = () => {
    sliderRef.current.slickPrev();
  };

  // Array of objects representing each slide's data
  // const slidesData = [
  //   { destination1: 'DAR ',destination2:'ZNZ', date: '6 Oct - 19 Oct (1 Adult)' },
  //   { destination1: 'DAR ',destination2:'ZNZ', date: '6 Oct - 19 Oct (1 Child)' },
  //   { destination1: 'DAR ',destination2:'ZNZ', date: '6 Oct - 19 Oct (1 Adult)' },
  //   { destination1: 'DAR ',destination2:'ZNZ', date: '6 Oct - 19 Oct (1 Child)' },
  //   { destination1: 'DAR ',destination2:'ZNZ', date: '6 Oct - 19 Oct (1 Adult)' },
  //   { destination1: 'DAR ',destination2:'ZNZ', date: '6 Oct - 19 Oct (1 Child)' },
  //   { destination1: 'DAR ',destination2:'ZNZ', date: '6 Oct - 19 Oct (1 Adult)' },
  //   { destination1: 'DAR ',destination2:'ZNZ', date: '6 Oct - 19 Oct (1 Child)' },



  // ];

  const [slidesData, setSlidesData] = useState([]);

  useEffect(() => {
  const accessToken = localStorage.getItem("accessToken");
    // Fetch data from API
    fetch('https://bcom-services.pierofcloudtech.com/api/Home/GetRecentSearchesByAgentId?agentId=1',
    {
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  }
    )
      .then(response => response.json())
      .then(data => {
        // Transform API response to the desired format
        const transformedData = data.map(entry => {
          const adultString = `${entry.adult} Adult`;
          const childString = entry.child > 0 ? `${entry.child} Child` : '';
          const passengerString = [adultString, childString].filter(Boolean).join(' - ');

          return {
            destination1: entry.flyingFrom,
            destination2: entry.flyingTo,
            date: `${entry.departure} - ${entry.return} (${passengerString})`,
            searchDate: entry.searchDate
          };
        });
        // Set the transformed data to state
        setSlidesData(transformedData);
      })
      .catch(error => {
        console.error('Error fetching API data:', error);
      });
  }, []); // Run this effect only once, on component mount

  return (
    <div>
      {homeScreenShowHide.find(item => item.text === "SHOW_RECENT_SEARCH" && item.show) && (
    <section className="recent-search"> 
      <div className="container">   
        <div className="row align-items-center mt-2">
          <div className="col-lg-6"><h6 className="text-dark mt-3 fw-bold">RECENT SEARCHES</h6></div>
          <div className="col-lg-6 text-end"> 
            <span className="me-2 text-primary last-btn" onClick={goPrevious}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
              </svg>
            </span>   
            <span className="me-2 text-primary next-btn" onClick={goToNext}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
              </svg>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <section id="recentsearch">
              <div className="row justify-content-center">
                <div className="col-sm-12 my-2">
                  <Slider ref={sliderRef} {...settings}>
                    {/* Map over the slidesData array and render each slide dynamically */}
                    {slidesData.map((slide, index) => (
                      <div key={index}>
                        <div className="card border-primary">
                          <div className="card-body">
                            <ul>
                              <li>
                                <h4>
                                  <div className="text d-flex align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    <path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"/>
                                  </svg>
                                  <span className="ms-1">{slide.destination1}                                  </span>

                                  
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"/></svg>
                                  <span className="ms-1">{slide.destination2}

                                  </span>
                                  </div>
                                </h4>
                                <p>{slide.date}</p>
                                <p>{slide.searchDate}</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
    )}
    </div>
  );
}

export default RecentSearch;
import React,{ useState,useEffect } from "react";
import * as apiService from "../../../services";
import Grid from '@material-ui/core/Grid';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function BannerSection() {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 3000,
};


  return (
    <div>
      {homeScreenShowHide.find(item => item.text === "SHOW_BANNERS" && item.show) && (
    <section className="banner-sec py-3"> 
        <div className='container'>

            <Grid container>
                <Grid item xs={6} className='padding-right'>
                    <Grid container>
                        <Grid xs={12}>
                        {/* <img src="/imgs/promo-img.png" alt="imgs" srcset="" className='border-1' /> */}
                        
                        <Slider {...settings} className="first-slider">
                          <div>
                              <img src="/imgs/promo-img.png" alt="imgs"  className='border-1' />
                          </div>
                          <div>
                              <img src="/imgs/promo-img.png" alt="imgs" className='border-1' />
                          </div>

                          <div>
                              <img src="/imgs/promo-img.png" alt="imgs" className='border-1' />
                          </div>
                        </Slider>
                        </Grid>
                     
                    </Grid>
                </Grid>
                <Grid item xs={6} className='padding-left'>
                    <Grid container>
                            <Grid xs={12} className='mb-3 px-3'>
                            {/* <img src="/imgs/flights-promo-img.png" alt="imgs" srcset=""className='border-1'  /> */}
                            <Slider {...settings} className="sec-slider">
                              <div>
                              <img src="/imgs/flights-promo-img.png" alt="imgs" srcset=""className='border-1'  />
                              </div>
                              <div>
                                  <img src="/imgs/flights-promo-img.png" alt="imgs" className='border-1' />
                              </div>

                              <div>
                                  <img src="/imgs/flights-promo-img.png" alt="imgs" className='border-1' />
                              </div>
                            </Slider>
                            </Grid>
                            <Grid xs={6} className='px-3' >
                            {/* <img src="/imgs/dubai.png" alt="imgs" srcset="" className='border-1' /> */}
                            <Slider {...settings} className="third-slider">
                              
                              <div className="position-relative">
                                  <img src="/imgs/dubai.png" alt="imgs" className='border-1' />
                                  <h3>DISCOVER DUBAI</h3>
                              </div>
                              <div>
                              <img src="/imgs/dubai.png" alt="imgs" srcset=""className='border-1'  />
                              </div>
                              <div>
                                  <img src="/imgs/dubai.png" alt="imgs" className='border-1' />
                              </div>
                            </Slider>
                            </Grid>
                            <Grid xs={6} className='px-3'>
                            {/* <img src="/imgs/cairo.png" alt="imgs" srcset="" className='border-1' /> */}
                           <Slider {...settings} className="fourth-slider">
                           <div className="position-relative">
                                  <img src="/imgs/cairo.png" alt="imgs" className='border-1' />
                                  <h3>CITY BREAK CAIRO</h3>

                              </div>
                              <div>
                                  <img src="/imgs/cairo.png" alt="imgs" className='border-1' />
                              </div>
                              <div>
                              <img src="/imgs/cairo.png" alt="imgs" srcset=""className='border-1'  />
                              </div>
                             
                            </Slider>
                            </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </div>
    </section>
    )}
    </div>

  );
}

export default BannerSection;

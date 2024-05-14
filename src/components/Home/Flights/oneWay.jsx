import React, { useEffect, useState } from 'react';
import * as apiService from "../../../services";
import $ from 'jquery';
import Select2Cdn from './select2cdn';

import {RangeDatePicker} from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";

const ReturnWay = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const handleIncrement = (type) => {
    switch (type) {
      case 'adults':
        setAdults(adults + 1);
        break;
      case 'children':
        setChildren(children + 1);
        break;
      case 'infants':
        setInfants(infants + 1);
        break;
      default:
        break;
    }
  };

  const handleDecrement = (type) => {
    switch (type) {
      case 'adults':
        setAdults(adults > 0 ? adults - 1 : 0);
        break;
      case 'children':
        setChildren(children > 0 ? children - 1 : 0);
        break;
      case 'infants':
        setInfants(infants > 0 ? infants - 1 : 0);
        break;
      default:
        break;
    }
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var minDate = tomorrow.toISOString().split('T')[0];
 
  var radioButtons = document.querySelectorAll('input[type="radio"]');

  // Add click event listener to each radio button
  radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('click', function() {
          document.querySelectorAll('label').forEach(function(label) {
              label.classList.remove('default-radio');
          });
          if (this.checked) {
              this.nextElementSibling.classList.add('default-radio');
          }
      });
  });
      const [selectedOption, setSelectedOption] = useState('economy'); // 'economy' is the default checked option
    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

  return (
  
            <div className="row justify-content-between oneway-sec" style={{display:'none'}}>
            <div id="section_oneway_return" className="row align-items-center">
            <div className="col-lg-5" id="div_onway_return_des">
            <div className="row">
            <div className="col-lg-6" style={{ position: "relative" }}>
            <a className="switch_destination" href="javascript:void(0);">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"/></svg>
              </a>
            <div className="row">
              <div className="col-12">
                <table className="flightheadertbl">
                  <thead>
                    <tr>
                      {/* <td>Flying from:</td> */}
                      <td className="text-end smlChkbox">
                        <input type="checkbox" value="" id="flyingfrom" />
                        <label htmlFor="flyingfrom">Nearby Airports</label>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="srchCon">
              <div className="srchRow">
              <div className="srchCol">
              <div className="mb-1"><span className="srchsml">From</span></div>
                <div ><span className="srchTitle">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"/></svg> */}
                  {/* {selectedValue ? selectedValue : "Kuala Lumpur"} */}
                  </span></div>
                <div><span className="srchsml textTrim"></span></div>
                <Select2Cdn className="select2" data={[{text: 'Option 1'}, {text: 'Option 2'}, {text: 'Option 3'}]} />
              </div>
              </div>
            </div>

            </div>
            <div className="col-lg-6">
            <div className="row">
              <div className="col-12">
                <table className="flightheadertbl">
                  <thead>
                    <tr>
                      {/* <td>Flying to:</td> */}
                      <td className="text-end">
                        <input type="checkbox" value="" id="flyingto" />
                        <label htmlFor="flyingto">Nearby Airports</label>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="srchCon">
              <div className="srchRow">
                <div className="srchCol">
                <div className="mb-1"><span className="srchsml">To</span></div>

                <div><span className="srchTitle">
                  
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M.3 166.9L0 68C0 57.7 9.5 50.1 19.5 52.3l35.6 7.9c10.6 2.3 19.2 9.9 23 20L96 128l127.3 37.6L181.8 20.4C178.9 10.2 186.6 0 197.2 0h40.1c11.6 0 22.2 6.2 27.9 16.3l109 193.8 107.2 31.7c15.9 4.7 30.8 12.5 43.7 22.8l34.4 27.6c24 19.2 18.1 57.3-10.7 68.2c-41.2 15.6-86.2 18.1-128.8 7L121.7 289.8c-11.1-2.9-21.2-8.7-29.3-16.9L9.5 189.4c-5.9-6-9.3-14.1-9.3-22.5zM32 448H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm96-80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128-16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg> */}
                  {/* {selectedValue ? selectedValue : "New  Delhi"} */}
                
                </span></div>
                <div><span className="srchsml textTrim"></span></div>
                <Select2Cdn className="select2" data={[{text: 'Option 1'}, {text: 'Option 2'}, {text: 'Option 3'}]} />
              </div>
              </div>
            </div>
            </div>
            </div>
            </div>

            <div className="col-lg-3" id="div_calendar_oneway_return">
            <div className="row">
                            <div className="col-lg-6">
                              <div className="row">
                                <div className="col-12">
                                  <table className="flightheadertbl">
                                    <thead>
                                      <tr>
                                        {/* <td>Dep. <i className="fa-solid fa-caret-down"></i></td> */}
                                        <td className="text-end">
                                          <select name="pickdeparture">
                                            <option selected="">Any Time</option>
                                            <option value="Spanish">Morning</option>
                                          </select>
                                        </td>
                                      </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                             
                            </div>
                            <div className="col-lg-6" id="div_flight_returncal">
                              <div className="row">
                                <div className="col-12">
                                  <table className="flightheadertbl">
                                    <thead>
                                      <tr>
                                        <td className="text-end">
                                          <select name="pickdeparture">
                                            <option selected="">Any Time</option>
                                            <option value="Spanish">Morning</option>
                                          </select>
                                        </td>
                                      </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                             

                                 
                            </div>
                          </div>
            
              
            <div className="row material-calendar p-0">
                            <div className=" d-flex justify-content-between ">
                           <span className="srchsml">Departure <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></span>
                           <span className="srchsml">Return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></span>

                           </div>



                            <RangeDatePicker
                                    startDate={new Date(2024, 5, 15)}
                                    endDate={new Date(2024, 6, 1)}
                                  />
                          </div>
           
            </div>

            <div className="col-lg-2">
            <div className="frwrapper position-relative">

            <div className="row">
            <div className="col-12">
                <table className="flightheadertbl">
                <thead>
                    <tr>
                    <td>Travellers & Class <i className="fa-solid fa-caret-down"></i></td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
                </table>
            </div>
            </div>

            <div  className="srchCon ">
            <div className="srchRow selectflightpax">
                <div className="srchCol">
                  <div class="mb-1"><span class="srchsml">Travellers &amp; Class <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></span></div>
                <div>
                    <span className="srchTitle d-inline p-0">
                    <input className="inpflightpax" type="text" id="totalpaxflightinp" name="totalpaxflightinp" value="1" disabled="" />
                    </span> <span className="srchLabel">Travellers</span>
                    </div>
                <div><span id="getcabinval" className="srchsml textTrim">Economy/Premium Economy</span> </div>
                </div>
            </div>
            <div id="div_flightPax" className="travelersFlight">
            <div className="row align-items-center mb-1">
                <div className="col-6">Adults (12+)</div>
                <div className="col-6">
                  <div className="input-group">
                    <button className="input-group-text" onClick={() => handleDecrement('adults')} disabled={adults === 0}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                    </button>
                    <input type="text" className="form-control text-center" value={adults} disabled />
                    <button className="input-group-text" onClick={() => handleIncrement('adults')} >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                    </button>
                  </div>
                </div>
              </div>

            <div className="row align-items-center mb-1">
              <div className="col-6">Children (2 - 11) </div>
              <div className="col-6">
                <div className="input-group">
                  <button className="input-group-text" onClick={() => handleDecrement('children')} disabled={children === 0}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                  </button>
                  <input type="text" className="form-control text-center" value={children} disabled />
                  <button className="input-group-text" onClick={() => handleIncrement('children')}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                  </button>
                </div>
              </div>
            </div>


            <div className="row align-items-center mb-1">
              <div className="col-6">Infants(0-2) </div>
              <div className="col-6">
                <div className="input-group">
                  <button className="input-group-text" onClick={() => handleDecrement('infants')} disabled={infants === 0}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                  </button>
                  <input type="text" className="form-control text-center" value={infants} disabled />
                  <button className="input-group-text" onClick={() => handleIncrement('infants')}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="row mt-3">
                <div className="col-lg-12">
                <label htmlFor="selcabin"><strong>Travel Class</strong></label>
                <div className="travel-class">
                                    <span>
                                          <input
                                              type="radio"
                                              name="travelClass"
                                              id="any"
                                              value="any"
                                              checked={selectedOption === "any"}
                                              onChange={handleRadioChange}
                                          />
                                          <label htmlFor="any">Any</label>
                                      </span>

                                      <span>
                                          <input
                                              type="radio"
                                              name="travelClass"
                                              id="economy"
                                              value="economy"
                                              checked={selectedOption === "economy"}
                                              onChange={handleRadioChange}
                                          />
                                          <label htmlFor="economy" className={selectedOption === "economy" ? 'default-radio' : ''}>Economy</label>
                                      </span>

                                      <span>
                                          <input
                                              type="radio"
                                              name="travelClass"
                                              id="firstClass"
                                              value="firstClass"
                                              checked={selectedOption === "firstClass"}
                                              onChange={handleRadioChange}
                                          />
                                          <label htmlFor="firstClass" className={selectedOption === "firstClass" ? 'default-radio' : ''}>First Class</label>
                                      </span>

                                      <span>
                                          <input
                                              type="radio"
                                              name="travelClass"
                                              id="premiumEconomy"
                                              value="premiumEconomy"
                                              checked={selectedOption === "premiumEconomy"}
                                              onChange={handleRadioChange}
                                          />
                                          <label htmlFor="premiumEconomy" className={selectedOption === "premiumEconomy" ? 'default-radio' : ''}>Premium Economy</label>
                                      </span>

                                      <span>
                                          <input
                                              type="radio"
                                              name="travelClass"
                                              id="business"
                                              value="business"
                                              checked={selectedOption === "business"}
                                              onChange={handleRadioChange}
                                          />
                                          <label htmlFor="business" className={selectedOption === "business" ? 'default-radio' : ''}>Business</label>
                                      </span>

                                    </div>

                </div>
            </div>

            <div className="row mt-3 mb-2">
                <div className="col-lg-12">
                <button className="btn btn-primary close_div_flightPax">Done </button>
                </div>
            </div>
            </div>
            </div>



            </div>
            </div>

            <div className="col-lg-2">
            <button type="button"  className="btn btn-primary w-100 modifySearch mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
              <span>SEARCH</span> </button>
            </div>
            </div>
            </div>

              
  );
};

export default ReturnWay;
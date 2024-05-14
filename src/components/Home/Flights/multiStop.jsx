import React, { useEffect, useState } from 'react';
import $ from 'jquery';

const Flights = () => {

  useEffect(() => {
    $(".multistopflight").click(function(){
      $(".multistop-sec").show();
      $(".oneway-sec").hide();
      $(".returnway-sec").hide();
      $(".onewayflight, .returnflight").removeClass("active-radio");
      $(this).addClass("active-radio");
  });
  
  $(".onewayflight").click(function(){
      $(".oneway-sec").show();
      $(".multistop-sec").hide();
      $(".returnway-sec").hide();
      $(".multistopflight, .returnflight").removeClass("active-radio");
      $(this).addClass("active-radio");
  });
  
  $(".returnflight").click(function(){
      $(".returnway-sec").show();
      $(".multistop-sec").hide();
      $(".oneway-sec").hide();
      $(".multistopflight, .onewayflight").removeClass("active-radio");
      $(this).addClass("active-radio");
  });
  

    }, []);
  

  const [rows, setRows] = useState([1]); // Initial state with one row

  const addRow = () => {
    setRows([...rows, rows.length + 1]); // Add a new row to the rows state
  };

  const deleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index); // Remove the row at the specified index
    setRows(updatedRows);
  };
  return (
            <div className="row justify-content-between multistop-sec" style={{display:'none'}}>
                <div className="row my-3">
                <div className="col-lg-6" id="div_onway_return_des">
            <div className="row">
           
              <div className="col-lg-6" style={{ position: "relative" }}>
                  <a className="switch_destination" href="javascript:void(0);">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"/></svg>
                  </a>
                <div className="srchCon">
                  <div className="srchRow">
                    <div className="srchCol">
                    <div className="mb-1"><span className="srchsml">From</span></div>
                      <div><span className="srchTitle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"/></svg> Kuala Lumpur</span></div>
                      <div className=''><span className="srchsml textTrim">DXB, Dubai International</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-12">
                    
                  </div>
                </div>
                <div className="srchCon">
                  <div className="srchRow">
                    <div className="srchCol">
                    <div className="mb-1"><span className="srchsml">To</span></div>
                      <div><span className="srchTitle">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M.3 166.9L0 68C0 57.7 9.5 50.1 19.5 52.3l35.6 7.9c10.6 2.3 19.2 9.9 23 20L96 128l127.3 37.6L181.8 20.4C178.9 10.2 186.6 0 197.2 0h40.1c11.6 0 22.2 6.2 27.9 16.3l109 193.8 107.2 31.7c15.9 4.7 30.8 12.5 43.7 22.8l34.4 27.6c24 19.2 18.1 57.3-10.7 68.2c-41.2 15.6-86.2 18.1-128.8 7L121.7 289.8c-11.1-2.9-21.2-8.7-29.3-16.9L9.5 189.4c-5.9-6-9.3-14.1-9.3-22.5zM32 448H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm96-80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128-16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg> New Delhi</span></div>
                      <div className=''><span className="srchsml textTrim">DEL, Indira Gandhi International...</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="col-lg-2" id="div_calendar_oneway_return">
          
              <div id="pickCalOneWay" className="srchCon">
                <input id="datepicker" type="hidden" className="hasDatepicker" />
                <div className="srchRow">
                  <div className="srchCol">
                  <div className="mb-1"><span className="srchsml">Departure <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></span></div>
                    <div style={{display:'flex', alignItems:'center',gap:'3px', flexWrap:'wrap'}}>  
                        <span className="srchTitle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg> 19 </span><span className="srchLabel">Apr'24</span> </div>
                    <div className=''><span className="srchsml textTrim">Friday</span> </div>
                  </div>
                </div>
              </div>
            
        </div>

            <div className="col-lg-2">
            <div className="frwrapper position-relative">
                <div className="srchCon">
                <div className="srchRow">
                    <div className="srchCol">
                    <div class="mb-1"><span class="srchsml">Travellers &amp; Class <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></span></div>

                    <div style={{display:'flex', alignItems:'center',gap:'3px', flexWrap:'wrap'}}>
                        <span className="srchTitle">
                        <input className="inpflightpax" type="text" id="totalpaxflightinp" name="totalpaxflightinp" value="1" disabled="" />
                        </span> <span className="srchLabel">Travellers</span>
                       
                    </div>
                    <div className=''><span id="getcabinval" className="srchsml textTrim">Economy/Premium Economy</span> </div>
                    </div>
                </div>
                </div>

           

            </div>
            </div>

            <div className="col-lg-2">
              <button type="button"  class="btn btn-primary w-100 modifySearch mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                  <span>SEARCH</span> </button>
            </div>
          </div>

          <div className="row align-items-center">
                <div className="col-lg-6" id="div_onway_return_des">
                  
            <div className="row">
              <div className="col-lg-6" style={{ position: "relative" }}>
              <a className="switch_destination" href="javascript:void(0);">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"/></svg>
              </a>
                <div className="srchCon">
                  <div className="srchRow">
                    <div className="srchCol">
                    <div className="mb-1"><span className="srchsml">From</span></div>

                      <div><span className="srchTitle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"/></svg> Kuala Lumpur</span></div>
                      <div className=''><span className="srchsml textTrim">DXB, Dubai International</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-12">
                    
                  </div>
                </div>
                <div className="srchCon">
                  <div className="srchRow">
                    <div className="srchCol">
                    <div className="mb-1"><span className="srchsml">To</span></div>
                      <div><span className="srchTitle">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M.3 166.9L0 68C0 57.7 9.5 50.1 19.5 52.3l35.6 7.9c10.6 2.3 19.2 9.9 23 20L96 128l127.3 37.6L181.8 20.4C178.9 10.2 186.6 0 197.2 0h40.1c11.6 0 22.2 6.2 27.9 16.3l109 193.8 107.2 31.7c15.9 4.7 30.8 12.5 43.7 22.8l34.4 27.6c24 19.2 18.1 57.3-10.7 68.2c-41.2 15.6-86.2 18.1-128.8 7L121.7 289.8c-11.1-2.9-21.2-8.7-29.3-16.9L9.5 189.4c-5.9-6-9.3-14.1-9.3-22.5zM32 448H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm96-80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128-16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg> New Delhi</span></div>
                      <div className=''><span className="srchsml textTrim">DEL, Indira Gandhi International...</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="col-lg-2" id="div_calendar_oneway_return">
          
              <div id="pickCalOneWay" className="srchCon">
                <input id="datepicker" type="hidden" className="hasDatepicker" />
                <div className="srchRow">
                  <div className="srchCol">
                  <div className="mb-1"><span className="srchsml">Departure <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></span></div>
                <div style={{display:'flex', alignItems:'center',gap:'3px', flexWrap:'wrap'}}><span className="srchTitle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg> 19 </span><span className="srchLabel">Apr'24</span> </div>
                    <div className=''><span className="srchsml textTrim">Friday</span> </div>
                  </div>
                </div>
              </div>
            
        </div>

         
          </div>
                {rows.map((row, index) => (
                  <div key={index} name={`multicity${row}`} className="row my-3 align-items-center">
                      <div className="col-lg-6">
                        <div className="row">
                          <div className="col-lg-6 position-relative">
                          <a className="switch_destination" href="javascript:void(0);">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"/></svg>
              </a>
                            <div className="srchCon"> 
                              <div className="srchRow">
                                <div className="srchCol"> 
                                <div className="mb-1"><span className="srchsml">From</span></div>
                                  <div><span className="srchTitle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"></path></svg> Kuala Lumpur</span></div>
                                  <div><span className="srchsml textTrim">DXB, Dubai International</span></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6"> 
                            <div className="srchCon"> 
                              <div className="srchRow">
                                <div className="srchCol"> 
                                <div className="mb-1"><span className="srchsml">To</span></div>
                                  <div><span className="srchTitle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M.3 166.9L0 68C0 57.7 9.5 50.1 19.5 52.3l35.6 7.9c10.6 2.3 19.2 9.9 23 20L96 128l127.3 37.6L181.8 20.4C178.9 10.2 186.6 0 197.2 0h40.1c11.6 0 22.2 6.2 27.9 16.3l109 193.8 107.2 31.7c15.9 4.7 30.8 12.5 43.7 22.8l34.4 27.6c24 19.2 18.1 57.3-10.7 68.2c-41.2 15.6-86.2 18.1-128.8 7L121.7 289.8c-11.1-2.9-21.2-8.7-29.3-16.9L9.5 189.4c-5.9-6-9.3-14.1-9.3-22.5zM32 448H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm96-80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128-16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg> New Delhi</span></div>
                                  <div><span className="srchsml textTrim">DEL, Indira Gandhi International...</span></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="srchCon"> 
                          <input id="datepicker" type="hidden" />
                          <div className="srchRow">
                            <div className="srchCol"> 
                            <div className="mb-1"><span className="srchsml">Departure <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></span></div>
                              <div style={{display:'flex', alignItems:'center',gap:'3px', flexWrap:'wrap'}}>
                              <span className="srchTitle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path></svg> 19 </span><span className="srchLabel">Apr'24</span></div>
                              <div><span className="srchsml textTrim">Friday</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2"> 
                        {index === rows.length - 1 && ( // Show "Add Another City" link only for the last row
                          <a href="javascript:void(0);" className="addMulticityRow" onClick={addRow}>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>Add Another City
                          </a>
                        )}
                      </div>
                      {index > 0 && ( // Show delete button for rows after the first one
                        <div className="col-lg-2">
                          <a href="javascript:void(0);" className="deleteMulticityRow" onClick={() => deleteRow(index)}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                          </a>
                        </div>
                      )}
                  </div>
                ))}




                          </div>
                                
                         
              
  );
};

export default Flights;

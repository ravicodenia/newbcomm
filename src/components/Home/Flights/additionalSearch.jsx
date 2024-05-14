import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import AdditionSelect from './additionalSelect';
import $ from 'jquery';
import * as apiService from "../../../services";


function FlightSearchForm() {
  const [preferredAirline, setPreferredAirline] = useState('');
  const [selectedFareTypes, setSelectedFareTypes] = useState([]);
  const [markup, setMarkup] = useState('');
  const [selectedSupplier, setSelectedSupplier] = useState('');
  const [directFlights, setDirectFlights] = useState(false);
  const [refundableFaresOnly, setRefundableFaresOnly] = useState(false);


  const [MastercardCredit, setMastercardCredit] = useState(false);
  const [VisaCredit, setVisaCredit] = useState(false);
  const [VisaDebit, setVisaDebit] = useState(false);
  const [NetBanking, setNetBanking] = useState(false);
  const [UPI, setUPI] = useState(false);
  const [BankTransfer, setBankTransfer] = useState(false);

  const fareTypeOptions = [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' }
  ];

  const handleFareTypeChange = (selectedOptions) => {
    setSelectedFareTypes(selectedOptions);
  };

  useEffect(() => {
    // jQuery code to handle the click event
    $('.supplier').click(function() {
      $('#selectSuppliers').slideToggle();
  });
    }, []);


   const [homeselectSuppliers, setselectSuppliers] = useState([]);

    const fetchData = async (e) => {
    const data = await apiService.homeScreenShowHide({ value: 1 });
    console.log(data.suppliers);
    setselectSuppliers(data.suppliers);
  };
  useEffect(() => {
    fetchData();
  }, []);


  const checkboxes = homeselectSuppliers.map(supplier => (
  <span key={supplier.id}>
    <input
      className="form-check-input"
      type="checkbox"
      id={supplier.code}
      value={supplier.code}
    />
    <label className="form-check-label" htmlFor={supplier.code}>
      {supplier.text}
    </label>
  </span>
));


  return (
    <div id="div_additional_flight_search">
      <div className="row">
        <div className="col-lg-3">
          <div className="mb-3 position-relative">
            <label htmlFor="preferred-airline" className="form-label">Preferred Airline</label>
            <input 
              type="text" 
              className="form-control d-none" 
              id="preferred-airline" 
              placeholder="Any Airline" 
              value={preferredAirline} 
              onChange={(e) => setPreferredAirline(e.target.value)}
              
            />

            <AdditionSelect/>
          </div>
        </div>

        <div className="col-lg-3">
          <label htmlFor="faretypelist" className="form-label">Select Fare Type</label>
          <Select
            isMulti
            options={fareTypeOptions}
            value={selectedFareTypes}
            onChange={handleFareTypeChange}
          />
        </div>

        <div className="col-lg-3">
          <div className="mb-3">
            <label htmlFor="markupin" className="form-label">Markup in %</label>
            <input 
              type="number" 
              className="form-control" 
              id="markupin" 
              placeholder="Markup in %" 
              value={markup} 
              onChange={(e) => setMarkup(e.target.value)}
            />
          </div>
        </div>

        <div className="col-lg-3">
          <div className="mb-3">
            <label htmlFor="supplierslist" className="form-label">Select Suppliers</label>
            {/* <select 
              className="form-select" 
              id="supplierslist" 
              value={selectedSupplier} 
              onChange={(e) => setSelectedSupplier(e.target.value)}
            >
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select> */}
             <div className="selectsuppliers position-relative">
              <div className="supplier">
                One
              </div>

              <div id="selectSuppliers">
                <p className='py-2'>By Selecting One Or More (Max 10) Payment Types, Prices On Wego Will Include Applicable Minimum Payment Fee. Please Note That Not All Providers Support All Payment Types.</p>
                
                 {checkboxes}
              </div>

            </div>
          </div>
        </div>

        <div className="col-lg-3">     
          <div className="form-check mb-3">
            <input 
              className="form-check-input" 
              type="checkbox" 
              value={directFlights} 
              id="direct-flights" 
              onChange={() => setDirectFlights(!directFlights)}
            />
            <label className="form-check-label" htmlFor="direct-flights">
              Direct Flights
            </label>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="form-check mb-3">
            <input 
              className="form-check-input" 
              type="checkbox" 
              value={refundableFaresOnly} 
              id="refundable-fares-only" 
              onChange={() => setRefundableFaresOnly(!refundableFaresOnly)}
            />
            <label className="form-check-label" htmlFor="refundable-fares-only">
              Refundable fares only
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightSearchForm;

import React, { useEffect } from 'react';
import HotelDatepicker from 'hotel-datepicker';
import 'hotel-datepicker/dist/css/hotel-datepicker.css';

const MyComponent = () => {
  useEffect(() => {
    // Initialize the datepicker when the component mounts
    const input = document.getElementById('input-id');
    const datepicker = new HotelDatepicker(input, {
      inline: true,
      clearButton: true,
      submitButton: true,
      topbarPosition: 'bottom',
      submitButtonName: 'name_of_submit_button'
    });

    // Clean up the datepicker when the component unmounts
    return () => {
      datepicker.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once, like componentDidMount

  return (
    <div>
      <input id="input-id" type="text" />
    </div>
  );
};

export default MyComponent;

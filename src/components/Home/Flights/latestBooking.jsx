import React,{ useState,useEffect } from "react";
import * as apiService from "../../../services";
import Grid from '@material-ui/core/Grid';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import OnHoldingBookings from './onHoldingBookings';

// const columns: GridColDef[] = [
//   { field: 'bookingRef', headerName: 'Booking Ref', renderCell: (params) => <a href="#">{params.value}</a> },
//   { field: 'firstName', headerName: 'Lead Pax' },
//   { field: 'date', headerName: 'Travel Date'},
//   { field: 'stage', headerName: 'Booking Stage', renderCell: (params) => <span style={{ backgroundColor: params.row.bgColor, color: params.row.color, padding: '10px 6px', minWidth:"98px" }}>{params.value}</span> },
//   { field: 'module', headerName: 'Module'},
// ];

// const rows = [
//   { id: 1, bookingRef: 'TWX169661197899', firstName: 'Jon Snow', date: '2024-05-07', stage: 'Completed', module: 'Flight', bgColor: '#d1f4e8', color:'#05a56d' },
//   { id: 2, bookingRef: 'TWX169661197899', firstName: 'Cersei Lannister', date: '2024-05-08', stage: 'Pending', module: 'Flight', bgColor: '#e5f0fe', color:'#2a5ee6' },
//   { id: 3, bookingRef: 'TWX169661197899', firstName: 'Mary Snow', date: '2024-05-07', stage: 'Completed', module: 'Flight', bgColor: '#d1f4e8', color:'#05a56d' },
//   { id: 4, bookingRef: 'TWX169661197899', firstName: 'Post Malon', date: '2024-05-08', stage: 'Cancelled', module: 'Flight', bgColor: '#ffe1e6', color:'#d65b70' },
//   { id: 5, bookingRef: 'TWX169661197899', firstName: 'Julie Snow', date: '2024-05-07', stage: 'Completed', module: 'Flight', bgColor: '#d1f4e8', color:'#05a56d' },
//   { id: 6, bookingRef: 'TWX169661197899', firstName: 'Mary Lannister', date: '2024-05-08', stage: 'Pending', module: 'Flight', bgColor: '#e5f0fe', color:'#2a5ee6' },
// ];

const getColorAndBgColor = bookingType => {
    switch (bookingType) {
        case "Cancelled":
            return { bgColor: '#ffe1e6', color: '#d65b70' };
        case "Completed":
            return { bgColor: '#d1f4e8', color: '#05a56d' };
        case "Pending":
            return { bgColor: '#e5f0fe', color: '#2a5ee6' };
        default:
            return { bgColor: '#ffffff', color: '#000000' }; // Default values if booking type doesn't match
    }
};

const columns: GridColDef[] = [
  { field: 'bookingRef', headerName: 'Booking Ref', renderCell: (params) => <a href="#">{params.value}</a> },
  { field: 'leadPax', headerName: 'Lead Pax' },
  { field: 'travelDate', headerName: 'Travel Date' },
  { field: 'bookingStage', headerName: 'Booking Stage', renderCell: (params) => <span style={{ backgroundColor: params.row.bgColor, color: params.row.color, padding: '10px 6px', minWidth: "98px" }}>{params.value}</span> },
  { field: 'module', headerName: 'Module' },
];


function LatestBooking() {
     const [homeScreenShowHide, setHomeScreenShowHide] = useState([]);
     const [rows, setRows] = useState([]);

    const fetchData = async (e) => {
    const data = await apiService.homeScreenShowHide({ value: 1 });
    console.log(data.homeScreenShowHide);
    setHomeScreenShowHide(data.homeScreenShowHide);   
  };

  const fetchDataHomeBooking = async () => {
    const data = await apiService.homeBooking({ value: 1 });
    // Filter rows where bookingType is "Hold"
    const holdBookings = data.filter(row => row.bookingType === "Complete");
    // Assign unique IDs to each row and add color and background color properties
    const rowsWithIdsAndColors = holdBookings.map((row, index) => ({
        ...row,
        id: index,
        ...getColorAndBgColor(row.bookingStage) // Add color and background color based on booking stage
    }));
    setRows(rowsWithIdsAndColors);
};

  useEffect(() => {
    fetchData();
    fetchDataHomeBooking();
  }, []);

  return (
    <div>
    {homeScreenShowHide.find(item => item.text === "SHOW_MY_BOOKINGS" && item.show) && (
    <section className="latest-booking py-3 pb-5"> 
      <div className='container'>
        <Grid container>
          <Grid xs={6} className='padding-right' >
            <div style={{ width: '100%'}} className='border-1'>
              <div className="table-header border-bottom d-flex justify-content-between align-items-center py-3 px-2">
                <h6 className='m-0'>MY LATEST BOOKINGS</h6>
                <div className="input-grp">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Bookings Reference"  />
                    <span className="input-group-text" id="basic-addon1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                    </span>
                  </div>
                </div>
                <a href="#">View All</a>
              </div>
              <DataGrid style={{border:"0"}}
                rows={rows}
                columns={columns}
              />
            </div>
          </Grid>
          <Grid xs={6} className='padding-left'>
            <OnHoldingBookings/>
          </Grid>
        </Grid>
      </div>
    </section>
    )}
    </div>
  );
}

export default LatestBooking;

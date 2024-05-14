import React, { useState, useEffect } from "react";
import * as apiService from "../../../services";
import Grid from '@material-ui/core/Grid';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'bookingRef', headerName: 'Booking Ref', renderCell: (params) => <a href="#">{params.value}</a> },
    { field: 'leadPax', headerName: 'Lead Pax' },
    { field: 'travelDate', headerName: 'Travel Date' },
    { field: 'bookingStage', headerName: 'Booking Stage', renderCell: (params) => <span style={{ backgroundColor: params.row.bgColor, color: params.row.color, padding: '10px 6px', minWidth: "98px" }}>{params.value}</span> },
    { field: 'module', headerName: 'Module' },
];

function OnHoldingBookings() {

    const [homeScreenShowHide, setHomeScreenShowHide] = useState([]);
    const [rows, setRows] = useState([]);

    const fetchData = async () => {
        const data = await apiService.homeScreenShowHide({ value: 1 });
        setHomeScreenShowHide(data.homeScreenShowHide);
    };

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

const fetchDataHomeBooking = async () => {
    const data = await apiService.homeBooking({ value: 1 });
    // Filter rows where bookingType is "Hold"
    const holdBookings = data.filter(row => row.bookingType === "Hold");
    // Assign unique IDs to each row and add color and background color properties
    const rowsWithIdsAndColors = holdBookings.map((row, index) => ({
        ...row,
        id: index,
        ...getColorAndBgColor(row.bookingStage) // Add color and background color based on booking stage
    }));
    setRows(rowsWithIdsAndColors);
};

  //   const fetchDataHomeBooking = async () => {
  //     const data = await apiService.homeBooking({ value: 1 });
  //     // Filter rows where bookingType is "Hold"
  //     const holdBookings = data.filter(row => row.bookingType === "Hold");
  //     // Assign unique IDs to each row
  //     const rowsWithIds = holdBookings.map((row, index) => ({ ...row, id: index }));
  //     setRows(rowsWithIds);
  // };

    useEffect(() => {
        fetchData();
        fetchDataHomeBooking();
    }, []);

    return (
        <div>
            {homeScreenShowHide.find(item => item.text === "SHOW_ONHOLD_BOOKINGS" && item.show) && (
                <div style={{ width: '100%' }} className='border-1'>
                    <div className="table-header border-bottom d-flex justify-content-between align-items-center py-3 px-2">
                        <h6 className='m-0'>ON HOLD BOOKINGS</h6>
                        <div className="input-grp">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Bookings Reference" />
                                <span className="input-group-text" id="basic-addon1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                                </span>
                            </div>
                        </div>
                        <a href="#">View All</a>
                    </div>
                    <DataGrid style={{ border: "0" }}
                        rows={rows}
                        columns={columns}
                    />
                </div>
            )}
        </div>
    );
}

export default OnHoldingBookings;

import React,{ useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faBell  } from '@fortawesome/free-solid-svg-icons';
import TopHeader from './topheader';
import * as apiService from "../../services";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ChangePassword from './changePassword';
import ViewProfile from './viewProfile';


const Header = () => {

    const [homeScreenShowHide, setHomeScreenShowHide] = useState([]);
    const [dropDownmenuItems, setDropDownMenuItems] = useState([]);
    const [matchedParentIds, setMatchedParentIds] = useState([]);

    const [homeagentProfile, setHomeagentProfile] = useState('');
    const [homelogo, setHomelogo] = useState('');

    

  //   const fetchData = async (e) => {
  //   const data = await apiService.homeScreenShowHide({ value: 1 });
  //   console.log(data.homeScreenShowHide);
  //   setHomeScreenShowHide(data.homeScreenShowHide);

  //   const desiredNames = ['SETTINGS', 'OPS', 'User Management', 'FIN'];
  //   const filteredData = data.menuItems.filter(item => desiredNames.includes(item.name));

  //   // Get the IDs of the filtered data
  //   const filteredIds = filteredData.map(item => item.id);

  //   // Filter again based on matching parentId with filteredIds
  //   const finalFilteredData = data.menuItems.filter(item => {
  //   return desiredNames.includes(item.name) || filteredIds.includes(item.parentId);
  //   });

  //   console.log('filteredData',finalFilteredData);
  //   setDropDownMenuItems(filteredData);
  // };

  const fetchData = async (e) => {
    const data = await apiService.homeScreenShowHide({ value: 1 });
    // console.log(data.homeScreenShowHide);
    setHomeScreenShowHide(data.homeScreenShowHide);
    setHomeagentProfile(data.agentProfile.currentBalance);
    setHomelogo(data.agentProfile.logoPath);

    const desiredNames = ['SETTINGS', 'OPS', 'User Management', 'FIN'];

    // Filter items where name matches desiredNames
    const matchedNames = data.menuItems.filter(item => desiredNames.includes(item.name));

    // Get the IDs of the filtered data
    const filteredIds = matchedNames.map(item => item.id);

    // Filter again based on matching parentId with filteredIds
    const matchedParentIds = data.menuItems.filter(item => filteredIds.includes(item.parentId));

    // console.log('matchedNames', matchedNames);
    // console.log('matchedParentIds', matchedParentIds);

    setDropDownMenuItems(matchedNames);
    setMatchedParentIds(matchedParentIds);
    // set another state for matchedParentIds if needed
};


  useEffect(() => {
    fetchData();
    // console.log(dropDownmenuItems);
  }, []);


   const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 

    return (
        <>
            <header>
              <TopHeader/>
             

                <div className="headerMain">
                <div className="navbar_lg">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-6 col-md-6 col-lg-2">
                        <a className="navbar_brand" href="/login">

                          <img className="img-fluid" src="/imgs/logo.png"/>

                        </a>
                      </div>
                      <div className="col-6 col-md-6 col-lg-10">
                        <a id="mobileBtn" className="navbar_toogle show_mobile">
                          <i className="fa-solid fa-bars fa-xmark"></i>
                        </a>
                        <div className="navbar_collapse hide_mobile">
                          <div className="row align-items-center ms-lg-auto">   
                            {/* <ul className="nav_links">
                              <li className="nav_item"> 
                                <div className="dropdown show">
                                  <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuSetting" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Settings
                                  </a>
              
                                  <div className="dropdown-menu" aria-labelledby="dropdownMenuSetting">
                                    <a className="dropdown-item" href="#">Organization</a>
                                    <a className="dropdown-item" href="#">Flight</a>
                                    <a className="dropdown-item" href="#">Hotel</a>
                                  </div>
                                </div>
                              </li>
                              
                              <li className="nav_item"> 
                                <div className="dropdown show">
                                  <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuOPS" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  OPS
                                  </a>
              
                                  <div className="dropdown-menu" aria-labelledby="dropdownMenuOPS">
                                    <a className="dropdown-item" href="#">Flight Search</a>
                                    <a className="dropdown-item" href="#">Flight Bookings</a>
                                    <a className="dropdown-item" href="#">Flight Sales Report</a>
                                  </div>
                                </div>

                              
                              
                              
                              
                              </li>
                              
                              <li className="nav_item"> 
                                <div className="dropdown show">
                                  <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuManagement" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  User Management
                                  </a>
              
                                  <div className="dropdown-menu" aria-labelledby="dropdownMenuManagement">
                                    <a className="dropdown-item" href="#">Create User</a>
                                    <a className="dropdown-item" href="#">Create Role</a>
                                    <a className="dropdown-item" href="#">Change Password</a>
                                  </div>
                                </div>

                              
                              
                              
                              
                              </li>

                              <li className="nav_item"> 
                                <div className="dropdown show">
                                  <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuFin" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Fin
                                  </a>
              
                                  <div className="dropdown-menu" aria-labelledby="dropdownMenuFin">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another Action</a>
                                    <a className="dropdown-item" href="#">Something else</a>
                                  </div>
                                </div>

                              
                              
                              
                              
                              </li>


                              <li className="nav_item ms-3"> 
                                <button onclick="location.href='login.html';" className="loginbtn"> 
                                  <img className="userpic" src="/imgs/user.jpg" alt="user" /> 
                                  <FontAwesomeIcon icon={faSignOutAlt} />
            Sign Out
                                </button> 
                                </li>
                                                  



                              </ul> */}
                            <ul className="nav_links">
                              {dropDownmenuItems
                                // Filter out parent items
                                .filter(item => item.parentId === null)
                                .map(parentItem => (
                                    <li key={parentItem.id} className="nav_item">
                                        <div className="dropdown show">
                                            <a className="dropdown-toggle" href="#" role="button" id={`dropdownMenu${parentItem.name}`} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {parentItem.name}
                                            </a>
                                            
                                  <div className="dropdown-menu" aria-labelledby={`dropdownMenu${parentItem.name}`}>
                                    {matchedParentIds
                                      // Filter child items by parent id
                                      .filter(childItem => childItem.parentId === parentItem.id)
                                      .map(childItem => (
                                          <a key={childItem.id} className="dropdown-item" href="#">
                                              {childItem.pageName}
                                              
                                          </a>
                                          
                                    ))}

                                  </div>
                                </div>
                                </li>
                              ))}

                                {/* <li className="nav_item ms-3"> 
                                  <button onclick="location.href='login.html';" className="loginbtn"> 
                                    <img className="userpic" src="/imgs/user.jpg" alt="user" /> 
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                    Sign Out
                                  </button> 

                                  
                                </li> */}

                                <li className="nav_item ms-3"> 
                                  <Button className="loginbtn">
                                      <img className="userpic" src="/imgs/user.jpg" alt="user"
                                       id="demo-positioned-button"
                                       aria-controls={open ? 'demo-positioned-menu' : undefined}
                                       aria-haspopup="true"
                                       aria-expanded={open ? 'true' : undefined}
                                       onClick={handleClick}
                                      
                                      />
                                    <a href="/login">
                                    <FontAwesomeIcon icon={faSignOutAlt} className="me-1" />

                                      Sign Out</a>
                                        </Button>
                                        <Menu
                                          id="top-nav-menu"
                                          aria-labelledby="demo-positioned-button"
                                          anchorEl={anchorEl}
                                          open={open}
                                          onClose={handleClose}
                                          anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                          }}
                                          transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                          }}
                                        >
                                          <MenuItem>
                                          <span>Company: BCom</span>
                                          </MenuItem>
                                          <MenuItem>
                                          <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                          Dubai, UAE
                                          </span>
                                          </MenuItem>
                                          <MenuItem>
                                          <a href="#" id="viewProfile">View Profile</a>
                                          <ViewProfile/>
                                          </MenuItem>
                                          <MenuItem>
                                         <a href="#" id="changePassword">Change Password</a>
                                          <ChangePassword/>

                                          </MenuItem>
                                          <MenuItem>
                                          <a href="#">Help</a>
                                          </MenuItem>
                                          </Menu>
                                  
                                </li>
                            </ul>





                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


  </div>
  <style jsx>{`
                .dropdown-menu {
                    display: none;
                }
                .dropdown.show:hover 
 .dropdown-menu {
    display: block!important;
}
            `}</style>    </header>

        </>
    );
};

export default Header;

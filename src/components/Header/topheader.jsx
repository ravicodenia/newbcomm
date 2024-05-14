import React,{ useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faBell  } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as apiService from "../../services";


export default function BasicMenu() {

    const [homeScreenShowHide, setHomeScreenShowHide] = useState([]);
    const [dropDownmenuItems, setDropDownMenuItems] = useState([]);
    const [matchedParentIds, setMatchedParentIds] = useState([]);

    const [homeagentProfile, setHomeagentProfile] = useState('');
    const [homelogo, setHomelogo] = useState('');

     const [notificationData, setNotificationData] = useState([]);
    const [notificationIds, setNotificationIds] = useState({agentid: 1, userid: 1});
    const [notificationCount, setNotificationCount] = useState(0);

   
    const [supportDetails,setSupportDetails]= useState('');
     const [bankDetails,setBankDetails]= useState('');

    

const fetchBankDetails = async () => {
    try {
      const response = await apiService.GetBankDetailsByAgentId({ value: 1 });

      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(response.data, 'text/html');
      const rows = Array.from(htmlDoc.querySelectorAll('br')).map(br => br.previousSibling.textContent.trim().replaceAll("&nbsp;", ''));

      setBankDetails(rows);

    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };


const fetchSupportDetails = async () => {
  try {
   
    const responsenew = await apiService.GetSupportDetailsByAgentId({ value: 1 });

      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(responsenew.data, 'text/html');
      const rows = Array.from(htmlDoc.querySelectorAll('br')).map(br => br.previousSibling.textContent.trim().replaceAll("&nbsp;", ''));

    setSupportDetails(rows);


  } catch (error) {
    console.error('Error:', error);
    // Handle error
  }
};



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


   const fetchDataNotification = async () => {
    try {
      const data = await apiService.notification({
        agentId: notificationIds.agentid,
        userId: notificationIds.userid
      });
      setNotificationCount(data.length);
      console.log(notificationCount);
      setNotificationData(data);
    } catch (error) {
      console.error('Error:', error);
    }
    
};



  useEffect(() => {
    fetchData();
    fetchBankDetails();
    fetchSupportDetails();
    fetchDataNotification();
    // console.log(dropDownmenuItems);
  }, []);

  const [walletAnchorEl, setWalletAnchorEl] = useState(null);
  const isWalletOpen = Boolean(walletAnchorEl);

  const handleWalletClick = (event) => {
    setWalletAnchorEl(event.currentTarget);
  };

  const handleWalletClose = () => {
    setWalletAnchorEl(null);
  };

  // State and event handlers for Contact Sales dropdown menu
  const [contactAnchorEl, setContactAnchorEl] = useState(null);
  const isContactOpen = Boolean(contactAnchorEl);

  const handleContactClick = (event) => {
    setContactAnchorEl(event.currentTarget);
  };

  const handleContactClose = () => {
    setContactAnchorEl(null);
  };


// State and event handlers for Support dropdown menu
const [suportAnchorEl, setSupportAnchorEl] = useState(null);
const isSupportOpen = Boolean(suportAnchorEl);

const handleSupportClick = (event) => {
    setSupportAnchorEl(event.currentTarget);
};

const handleSupportClose = () => {
    setSupportAnchorEl(null);
};

// State and event handlers for Bank details dropdown menu
const [bankAnchorEl, setBankAnchorEl] = useState(null);
const isBankOpen = Boolean(bankAnchorEl);

const handleBankClick = (event) => {
    setBankAnchorEl(event.currentTarget);
};

const handleBankClose = () => {
    setBankAnchorEl(null);
};


// State and event handlers for Notification dropdown menu
const [notifyAnchorEl, setNotifyAnchorEl] = useState(null);
const isNotifyOpen = Boolean(notifyAnchorEl);

const handleNotifyClick = (event) => {
    setNotifyAnchorEl(event.currentTarget);
};

const handleNotifyClose = () => {
    setNotifyAnchorEl(null);
};
  return (
    <div>
        <div className="headerMini">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-4 col-md-4 d-flex">
                                <div className="switchLanguage">
                                    <div className="language-menu">
                                        <div className="select-wrapper position-relative">
                                            <select name="picklanguage" className="select">
                                                <option selected="">English</option>
                                                <option value="Spanish">Spanish</option>
                                            </select>
                                            <FontAwesomeIcon icon={faAngleDown } />
                                        </div>
                                    </div>
                                </div>
                                <div className="switchTheme ms-2">
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                        <label className="form-check-label text-light" for="flexSwitchCheckChecked">DARK</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-8 col-md-8">
                                <div className="topLinks">
                                    {/*<ul>
                                        <li className="hide_mobile"> <a href="#">My Wallet</a>  </li>
                                        <li className="hide_mobile"> <a href="#">Contact Sales</a>  </li>
                                        <li className="hide_mobile"> <a href="#">Support</a>  </li>
                                        <li className="hide_mobile"> <a href="#">Bank Details</a>  </li>
                                        <li> <a href="#">
                                            <span className="notification">                                            <FontAwesomeIcon icon={faBell } />

                                                <span name="notification" className="nc">12
                                                </span></span></a>

                                        </li>
                                    </ul>*/}

                                <ul>
                                <li className="hide_mobile">
                                    <Button
                                        id="wallet-button"
                                        aria-controls={isWalletOpen ? 'wallet-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={isWalletOpen ? 'true' : undefined}
                                        onClick={handleWalletClick}
                                    >
                                        My Wallet<span> &nbsp; USD {homeagentProfile}</span>
                                    </Button>
                                    <Menu
                                        id="wallet-menu"
                                        anchorEl={walletAnchorEl}
                                        open={isWalletOpen}
                                        onClose={handleWalletClose}
                                        MenuListProps={{ 'aria-labelledby': 'wallet-button' }}
                                    >
                                        <table className="mx-2 my-0">
                                            <tr>
                                            <th>Profile Credit:</th>
                                            <td>USD 0</td>
                                            </tr>
                                            <tr>
                                            <th>Wallet Balance:</th>
                                            <td>USD 9999.00</td>
                                            </tr>
                                        </table>
                                    </Menu>
                                </li>

                                {/* Contact Sales Dropdown */}
                                {homeScreenShowHide.find((item) => item.text === 'SHOW CONTACT' && item.show) && (
                                <li className="hide_mobile">
                                    <Button
                                    id="contact-button"
                                    aria-controls={isContactOpen ? 'contact-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={isContactOpen ? 'true' : undefined}
                                    onClick={handleContactClick}
                                    >
                                    Contact Sales
                                    </Button>
                                    <Menu
                                    id="contact-menu"
                                    anchorEl={contactAnchorEl}
                                    open={isContactOpen}
                                    onClose={handleContactClose}
                                    MenuListProps={{ 'aria-labelledby': 'contact-button' }}
                                    >
                                        {/* Contact Sales content */}
                                        <div className="row" style={{padding:'0 20px'}}>
                                        <div className="col-6 p-0">
                                            <table className="m-0">
                                            <tbody>
                                                <tr>
                                                <th scope="row">Account Manager</th>
                                                <td>: John Doe</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Land Phone</th>
                                                <td>: +91 9305909271</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Mobile</th>
                                                <td>: +91 9305909271</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">eMail</th>
                                                <td>: jd@outlook.com</td>
                                                </tr>
                                            </tbody>
                                            </table>
                                        </div>
                                        <div className="col-6 p-0">
                                            <table className="m-0 ">
                                            <tbody>
                                                <tr>
                                                <th scope="row">Sales Manager</th>
                                                <td>: John Doe</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Land Phone</th>
                                                <td>: +91 9305909271</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Mobile</th>
                                                <td>: +91 9305909271</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">eMail</th>
                                                <td>: jd@outlook.com</td>
                                                </tr>
                                            </tbody>
                                            </table>
                                        </div>
                                        </div>
                                    </Menu>
                                </li>
                                 )}
                              {homeScreenShowHide.find(item => item.text === "SHOW SALES SUPPORT" && item.show) && (
                              <li className="hide_mobile">
                              <Button
                              id="support-button"
                              aria-controls={isSupportOpen ? 'support-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={isSupportOpen ? 'true' : undefined}
                              onClick={handleSupportClick}
                              >
                              Support
                              </Button>
                              <Menu
                              id="contact-menu"
                              anchorEl={suportAnchorEl}
                              open={isSupportOpen}
                              onClose={handleSupportClose}
                              MenuListProps={{ 'aria-labelledby': 'supoort-button' }}
                              >
                                <table style={{margin:'0 10px'}}>
                                <tbody>
                               

                                {supportDetails.map((row, index) => (
                                  <tr key={index}>
                                    {/* Splitting each row into cells */}
                                    {row.replaceAll(/&nbsp;/g, '').split(':').map((cell, cellIndex) => (
                                      <td key={cellIndex} className={cellIndex === 0 ? 'bold' : ''}>
                                        {cellIndex === 0 ? <strong>{cell}</strong> : cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                                   
                                </tbody>
                                </table>
                                
                              </Menu>
                          </li>
                              
                              )}
                              {homeScreenShowHide.find(item => item.text === "SHOW BANK DETAILS" && item.show) && (
                                
                                <li className="hide_mobile">
                                <Button
                                id="Bank-button"
                                aria-controls={isBankOpen ? 'bank-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={isBankOpen ? 'true' : undefined}
                                onClick={handleBankClick}
                                >
                                Bank Details
                                </Button>
                                <Menu
                                id="bank-menu"
                                anchorEl={bankAnchorEl}
                                open={isBankOpen}
                                onClose={handleBankClose}
                                MenuListProps={{ 'aria-labelledby': 'bank-button' }}
                                >
                                 <table style={{margin:'0 10px'}}> 
                                         <tbody>
                                        {bankDetails.map((row, index) => (
                                              <tr key={index}>
                                                {/* Splitting each row into cells */}
                                                {row.replaceAll(/&nbsp;/g, '').split(':').map((cell, cellIndex) => (
                                                  <td key={cellIndex} className={cellIndex === 0 ? 'bold' : ''}>
                                                    {cellIndex === 0 ? <strong>{cell}</strong> : cell}
                                                  </td>
                                                ))}
                                              </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                  
                                </Menu>
                            </li>
                              )}
                              <li className="">

                                    <Button
                                        id="notification-button"
                                        aria-controls={isWalletOpen ? 'notification-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={isNotifyOpen ? 'true' : undefined}
                                        onClick={handleNotifyClick}
                                    >
                                    <span className="notification">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/></svg>
                                    <span name="notification" className="nc">{notificationCount }</span>
                                    </span>

                                    </Button>
                                    <Menu className="notification-div"
                                        id="wallet-menu"
                                        anchorEl={notifyAnchorEl}
                                        open={isNotifyOpen}
                                        onClose={handleNotifyClose}
                                        MenuListProps={{ 'aria-labelledby': 'notification-button' }}
                                    >
                                     {notificationData.map(notification => 
                                            !notification.readStatus && (
                                              <MenuItem key={notification.id}>
                                                <a href="#">
                                                  <div className="title">{notification.subject}</div>
                                                  <div className="description">{notification.message}</div>
                                                </a>
                                              </MenuItem>
                                            )
                                          )}
                                    </Menu>
                              </li>
                            </ul>

                                </div>

                            </div>

                        </div>


                    </div>
                </div>

     
    </div>
  );
}
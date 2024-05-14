import { API_BASE_URL } from '../config/serverApiConfig';

import axios from 'axios';
import errorHandler from '../request/errorHandler';
import successHandler from '../request/successHandler';




export const homeScreenShowHide = async ({ value }) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const url = `https://bcom-services.pierofcloudtech.com/api/Home/GetAgentConfigItems?agentId=${value}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null; // Or handle the error appropriately
  }
};


export const GetBankDetailsByAgentId = async ({ value }) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const url = `https://bcom-services.pierofcloudtech.com/api/Home/GetBankDetailsByAgentId?agentId=${value}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Get response text directly
    return data; // Return HTML response
  } catch (error) {
    console.error('Error:', error);
    return null; // Or handle the error appropriately
  }
};



export const GetSupportDetailsByAgentId = async ({ value }) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const url = `https://bcom-services.pierofcloudtech.com/api/Home/GetSupportDetailsByAgentId?agentId=${value}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Get response text directly
    return data; // Return HTML response
  } catch (error) {
    console.error('Error:', error);
    return null; // Or handle the error appropriately
  }
};


export const homeBooking = async ({ value }) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const url =  `https://bcom-services.pierofcloudtech.com/api/Home/GetLatestTransactionsByAgentId?agentId=${value}`;
    
   
  
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null; // Or handle the error appropriately
  }
};

export const OneWaySearch = async () => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const url =  `https://bcom-services.pierofcloudtech.com/api/Airport/GetAirportsList`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null; // Or handle the error appropriately
  }
};

export const OneWaySearchnew = async () => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const url =  `https://bcom-services.pierofcloudtech.com/api/Airline/GetAirlinesList`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null; // Or handle the error appropriately
  }
};


export const loginAuth = async ({userName,password}) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const url =  `https://keycloak.bcom-services.pierofcloudtech.com/api/Auth/Login?Username=${userName}&Password=${password}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null; // Or handle the error appropriately
  }
};

export const verifyOtp = async ({userName,otp}) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const url =  `https://keycloak.bcom-services.pierofcloudtech.com/api/Auth/VerifyOtpAndGetToken?username=${userName}&otp=${otp}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null; // Or handle the error appropriately
  }
};

export const resendOtp = async ({userName}) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const url =  `https://keycloak.bcom-services.pierofcloudtech.com/api/Auth/ResendOtp?username=${userName}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null; // Or handle the error appropriately
  }
};


export const notification = async ({agentId, userId}) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const url =  `https://bcom-services.pierofcloudtech.com/api/Home/GetNotificationsByUserId?agentId=${agentId}&userId=${userId}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null; // Or handle the error appropriately
  }
};




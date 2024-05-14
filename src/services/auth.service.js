import { API_BASE_URL } from '../config/serverApiConfig';

import axios from 'axios';
import errorHandler from '../request/errorHandler';
import successHandler from '../request/successHandler';


export const allcompanylist = async ({companyList}) => {

  var check = localStorage.getItem("admin_type");
  var adminemail =localStorage.getItem("adminemail");
  var emile = {"adminemail": adminemail}
  if (check =='1'){
    var users="sb_showcompanyusers";
  }else{
   var users="sb_showcompanyuser";
  }
  try {
    const response = await fetch(API_BASE_URL + users, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emile), // body data type must match "Content-Type" header
    });

    const { status } = response;
    const data = await response.json({companyList});

   
    return data;
  } catch (error) {
    return errorHandler(error);
  }
};


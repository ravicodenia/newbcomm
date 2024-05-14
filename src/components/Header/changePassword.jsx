import React, { useState, useEffect, useRef } from "react";
import $ from 'jquery';

function RecentSearch() {
  useEffect(()=>{
    $("#changePassword").click(function(){
      $(".popup-bg").show();
      $('.popup-bg').css('display','flex')
  });

  $(".popup-bg").click(function(e){
      if(e.target === this){
          $(this).hide();
      }
  });

  })

  return (
   <>
   <section className="popup-bg bg-dark">
        <div className="popup-card">
            <h4 className="mb-4">Change Password</h4>
            <div className="input-grp">
                <input type="password" name="oldPassword" id="" placeholder="Enter your Old Password"/>
                <input type="password" name="newPassword" id="" placeholder="Enter your New Password"/>
                  <input type="submit" value="Submit" />
               <div className="inner-div ">
                </div>
        </div>
        </div>


   </section>
   </>
  );
}

export default RecentSearch;

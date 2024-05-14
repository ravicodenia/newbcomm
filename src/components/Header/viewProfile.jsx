import React, { useState, useEffect, useRef } from "react";
import $ from 'jquery';

function RecentSearch() {
  useEffect(()=>{
    $("#viewProfile").click(function(){
      $(".popup-bg2").show();
      $('.popup-bg2').css('display','flex')
  });

  $(".popup-bg2").click(function(e){
      if(e.target === this){
          $(this).hide();
      }
  });

  })

  return (
   <>
   <section className="popup-bg2 bg-dark">
        <div className="popup-card">
            <h4 className="mb-4">View Profile</h4>
            <div className="input-grp">
             <div className="inner-div ">
                </div>
        </div>
        </div>


   </section>
   </>
  );
}

export default RecentSearch;

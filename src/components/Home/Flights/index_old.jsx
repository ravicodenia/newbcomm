import React, { useState } from "react";

const Flights = () => {
  return (
    <section className="Flight-sec">
      <div className="inner-tabs">
        <ul className="nav nav-tabs d-flex justify-content-center pb-4 border-0" role="tablist">
          <li className="nav-item">
            <a href="#oneway" className="nav-link active" role="tab" aria-selected="true">
            </a>
            <span>  One Way</span>
          </li>
          <li className="nav-item">
            <a href="#return" className="nav-link" role="tab" aria-selected="false">            </a>
                <span>              Return</span>
          </li>
          <li className="nav-item">
            <a href="#multishop" className="nav-link" role="tab" aria-selected="false">
            </a>
            <span>Multi Shop</span>
          </li>
        </ul>
      </div>

      <div className="tab-content">
        <div className="tab-pane fade show active" id="oneway" role="tabpanel">
          One way content
        </div>
        <div className="tab-pane fade" id="return" role="tabpanel">
          Return content
        </div>
        <div className="tab-pane fade" id="multishop" role="tabpanel">
          Multi Shop content
        </div>
      </div>
    </section>
  );
};

export default Flights;

import React from "react";
import { withRouter } from "react-router-dom";
import SpiderMan from "../../assets/download.png";
import "./mainsection.scss";

function Mainsection({ history }) {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src={SpiderMan} alt="Spider-miles-morales" />
        </div>
        <div className="ms-m-description">
          {/* <h2> Swap Games at Cheap Rates</h2>
          <p>
            We Make Owning games easy and cheap. Save more when you swap old
            games for new onces today.
          </p> */}
          <button
            className="button is-black"
            id="shop-now"
            onClick={() => history.push("/products/1")}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Mainsection);

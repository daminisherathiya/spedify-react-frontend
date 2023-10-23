import React from "react";
import { Link } from "react-router-dom";
import { Completed_select } from "../../imagepath";


const Completeing = ({ prevTab3 }) => {
  return (
    <>
      <div className=" field-card">
        <div className="account-onborad complte-board back-home">
          <img src={Completed_select} className="img-fluid" alt="icon" />
          <h2>Hi, Eugene Forest</h2>
          <p>
            Your onboarding process has been successfully completed. Please
            check your registered email for other information.
          </p>
          <Link to="#" className="btn btn-primary" onClick={prevTab3}>
            {/* {" "} */}
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Completeing;

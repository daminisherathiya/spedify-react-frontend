import React from 'react';
import { Link } from "react-router-dom";
import { Logo, home_icon } from '../imagepath';

const BlankPage = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bread-crumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <div className="breadcrumb-list">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="index.html">
                        <img src={home_icon} alt="Post Author" /> Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Blank Page
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
     {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5>Blank Page</h5>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      

    </>
  )

}
export default BlankPage;
import React from "react";
import { Link } from "react-router-dom";

import { home_icon } from "../../../components/imagepath";

export const Breadcrumb = () => {
  return <div className="bread-crumb-bar sticky-top">
      <div className="container">
          <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                  <div className="breadcrumb-list">
                      <nav aria-label="breadcrumb" className="page-breadcrumb">
                          <ol className="breadcrumb">
                              <li className="breadcrumb-item"><Link to="/"><img src={home_icon} alt="Post Author" /> Home</Link></li>
                              <li className="breadcrumb-item" aria-current="page">Projects</li>
                          </ol>
                      </nav>
                  </div>
              </div>
          </div>
      </div>
  </div>
}

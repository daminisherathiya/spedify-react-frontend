import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Googleplay, Appstore, Logo, Logo_img } from "../imagepath";

const Footer = (props) => {
  const pathname = props.location.pathname.split("/")[1];

  const exclusionArray = [
    "/index-two",
    "/index-three",
    "/index-four",
    "/index-five",
    "/onboard-screen",
    "/onboard-screen-employer",
  ];
  if (exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }
  // console.log(props.location, "location");

  return (
    <>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Useful Links</h2>
                  <ul>
                    <li>
                      <Link to="about">
                        <i className="fas fa-angle-right me-1" />
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="blog-list">
                        <i className="fas fa-angle-right me-1" />
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="login">
                        <i className="fas fa-angle-right me-1" />
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="register">
                        <i className="fas fa-angle-right me-1" />
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link to="forgot-password">
                        <i className="fas fa-angle-right me-1" />
                        Forgot Password
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Help &amp; Support</h2>
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fas fa-angle-right me-1" />
                        Browse Candidates
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-angle-right me-1" />
                        Employers Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-angle-right me-1" />
                        Job Packages
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-angle-right me-1" />
                        Jobs Featured
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-angle-right me-1" />
                        Post A Job
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Other Links</h2>
                  <ul>
                    <li>
                      <Link to="freelancer-dashboard">
                        <i className="fas fa-angle-right me-1" />
                        Freelancers
                      </Link>
                    </li>
                    <li>
                      <Link to="freelancer-portfolio">
                        <i className="fas fa-angle-right me-1" />
                        Freelancer Details
                      </Link>
                    </li>
                    <li>
                      <Link to="project">
                        <i className="fas fa-angle-right me-1" />
                        Project
                      </Link>
                    </li>
                    <li>
                      <Link to="project-details">
                        <i className="fas fa-angle-right me-1" />
                        Project Details
                      </Link>
                    </li>
                    <li>
                      <Link to="post-project">
                        <i className="fas fa-angle-right me-1" />
                        Post Project
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Join our Newsletter</h2>
                  <p>
                    We help our customers harness the power of AI to make
                    smarter decisions
                  </p>
                  <div className="banner-content">
                    <form
                      className="form"
                      name="store"
                      method="post"
                      action="project"
                    >
                      <div className="form-inner">
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email address....."
                          />
                          {/* <button className="btn btn-primary sub-btn" type="submit">
                            <i className="fas fa-long-arrow-alt-right long-arrow" />
                          </button> */}
                          <Link
                            to="/project"
                            className="btn btn-primary sub-btn"
                            type="submit"
                          >
                            <i className="fas fa-long-arrow-alt-right long-arrow" />
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="social-icon d-flex">
                    <span>Follow us on : </span>
                    <ul>
                      <li>
                        <Link to="#" className="icon" target="_blank">
                          <i className="fab fa-facebook-f" />{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="icon" target="_blank">
                          <i className="fab fa-instagram" />{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="icon" target="_blank">
                          <i className="fab fa-twitter" />{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Footer Top */}
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            {/* Copyright */}
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 col-lg-6 ">
                  <div className="footer-bottom-logo">
                    <Link to="index" className="menu-logo">
                      <img src={Logo_img} className="img-fluid" alt="Logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 right-text">
                  <ul className="nav footer-bottom-nav">
                    <li>
                      <Link to="chats">Chat</Link>
                    </li>
                    <li>
                      <Link to="faq">Faq</Link>
                    </li>
                    <li>
                      <Link to="review">Reviews</Link>
                    </li>
                    <li>
                      <Link to="privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="term-condition">Terms of use</Link>
                    </li>
                  </ul>
                  <div className="copyright-text">
                    <p className="mb-0">
                      Copyright 2023 © Spedify. All right reserved. Powered by
                      Dreamguys Technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Copyright */}
          </div>
        </div>
        {/* /Footer Bottom */}
      </footer>
      {/* /Footer */}
      {/* /Main Wrapper */}
    </>
  );
};

export default Footer;

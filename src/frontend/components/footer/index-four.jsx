import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Appstore, Googleplay, Top_icon } from "../imagepath";
import { useHistory } from "react-router-dom";
const FooterFour = (props) => {
  const pathname = props.location && props.location.pathname.split("/")[1];

  const exclusionArray = ["/index-four"];
  if (props.location && exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }
  // console.log(props.location,"location")
  const history = useHistory();
  const eventclick = () => {
    history.push("/project");
  };
  return (
    <>
      <>
        {/* Footer */}
        <footer className="footer footer-four">
          <div className="footer-top aos" data-aos="fade-up">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="subscribe-four">
                        <h4>Subscribe</h4>
                        <div
                          className="banner-content aos aos-init aos-animate"
                          data-aos="fade-up"
                        >
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
                                <button
                                  className="btn btn-primary sub-btn"
                                  onClick={eventclick}
                                >
                                  Send mail
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="footer-widget footer-menu">
                        <h2 className="footer-title">Useful Links</h2>
                        <ul>
                          <li>
                            <Link to="about">About Us</Link>
                          </li>
                          <li>
                            <Link to="blog-list">Blog</Link>
                          </li>
                          <li>
                            <Link to="login">Login</Link>
                          </li>
                          <li>
                            <Link to="register">Register</Link>
                          </li>
                          <li>
                            <Link to="forgot-password">Forgot Password</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="footer-widget footer-menu">
                        <h2 className="footer-title">Help &amp; Support</h2>
                        <ul>
                          <li>
                            <Link to="#">Browse Candidates</Link>
                          </li>
                          <li>
                            <Link to="#">Employers Dashboard</Link>
                          </li>
                          <li>
                            <Link to="#">Job Packages</Link>
                          </li>
                          <li>
                            <Link to="#">Jobs Featured</Link>
                          </li>
                          <li>
                            <Link to="#">Post A Job</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="footer-widget footer-menu">
                        <h2 className="footer-title">Featured Catgeories</h2>
                        <ul>
                          <li>
                            <Link to="project">Illustration</Link>
                          </li>
                          <li>
                            <Link to="project">Link Building</Link>
                          </li>
                          <li>
                            <Link to="project">Python Dev</Link>
                          </li>
                          <li>
                            <Link to="project">Angular Dev</Link>
                          </li>
                          <li>
                            <Link to="project">Node JS</Link>
                          </li>
                          <li>
                            <Link to="project">Android</Link>
                          </li>
                          <li>
                            <Link to="project">Logo Design</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="footer-widget footer-menu play-app mt-4">
                        <div className="row">
                          <div className="col-lg-6 col-md-4">
                            <div className="free-customer">
                              <p>Toll Free Customer Care</p>
                              <h6>+91 26447 99875</h6>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-4">
                            <div className="free-customer">
                              <p>Toll Free Customer Care</p>
                              <h6>+91 26447 99875</h6>
                            </div>
                          </div>
                        </div>
                        <div className="applicate-mobile-blk">
                          <h6>Mobile Application</h6>
                          <p>
                            Download our App and get the latest Breaking News
                            Alerts and latest headlines and daily articles near
                            you.
                          </p>
                        </div>
                        <div className="row g-2">
                          <div className="col-lg-4">
                            <Link to="#">
                              <img
                                className="img-fluid"
                                src={Appstore}
                                alt="app-store"
                              />
                            </Link>
                          </div>
                          <div className="col-lg-4">
                            <Link to="#">
                              <img
                                className="img-fluid"
                                src={Googleplay}
                                alt="google-play"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="social-icon">
                          <p>Follow us on : </p>
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
            </div>
          </div>
          {/* /Footer Top */}
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="container">
              {/* Copyright */}
              <div className="copyright">
                <div className="row">
                  <div className="col-md-12 ">
                    <div className="copyright-text text-center">
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
        {/* Scroll Top */}
        {/* /Scroll Top */}
      </>
    </>
  );
};
export default FooterFour;

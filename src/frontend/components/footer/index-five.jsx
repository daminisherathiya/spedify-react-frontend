import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Appstore, Googleplay, Top_icon } from "../imagepath";
import { useHistory } from "react-router-dom";
const FooterFive = (props) => {
  const pathname = props.location && props.location.pathname.split("/")[1];

  const exclusionArray = ["/index-five"];

  if (props.location && exclusionArray.indexOf(props.location.pathname) >= 0) {
    return ""; // Return null instead of an empty string
  }
  // console.log(props.location,"location")
  const history = useHistory();
  const eventclick = () => {
    history.push("/project");
  };
  return (
    <>
      {/* Footer */}
      <footer className="footer footer-five">
        {/* Footer Top Nav */}
        <div className="footer-top-blk aos" data-aos="fade-up">
          <div className="container">
            <div className="footer-social-group">
              <div className="row">
                <div className="col-md-6 col-lg-6 ">
                  <ul className="nav footer-bottom-nav p-0 mb-0">
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
                </div>
                <div className="col-md-6 col-lg-6">
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
                          <i className="fab fa-linkedin-in" />{" "}
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
        {/* /Footer Top Nav */}
        <div className="footer-top aos" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Useful Links</h2>
                  <ul>
                    <li>
                      <Link to="about">
                        <i className="fas fa-circle" />
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="blog-list">
                        <i className="fas fa-circle" />
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="login">
                        <i className="fas fa-circle" />
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="register">
                        <i className="fas fa-circle" />
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link to="forgot-password">
                        <i className="fas fa-circle" />
                        Forgot Password
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Help &amp; Support</h2>
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fas fa-circle" />
                        Browse Candidates
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-circle" />
                        Employers Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-circle" />
                        Job Packages
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-circle" />
                        Jobs Featured
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-circle" />
                        Post A Job
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Other Links</h2>
                  <ul>
                    <li>
                      <Link to="freelancer-dashboard">
                        <i className="fas fa-circle" />
                        Freelancers
                      </Link>
                    </li>
                    <li>
                      <Link to="freelancer-portfolio">
                        <i className="fas fa-circle" />
                        Freelancer Details
                      </Link>
                    </li>
                    <li>
                      <Link to="project">
                        <i className="fas fa-circle" />
                        Project
                      </Link>
                    </li>
                    <li>
                      <Link to="project-details">
                        <i className="fas fa-circle" />
                        Project Details
                      </Link>
                    </li>
                    <li>
                      <Link to="post-project">
                        <i className="fas fa-circle" />
                        Post Project
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Featured Catgeories</h2>
                  <ul>
                    <li>
                      <Link to="project">
                        <i className="fas fa-circle" />
                        Illustration
                      </Link>
                    </li>
                    <li>
                      <Link to="project">
                        <i className="fas fa-circle" />
                        Link Building
                      </Link>
                    </li>
                    <li>
                      <Link to="project">
                        <i className="fas fa-circle" />
                        Python Dev
                      </Link>
                    </li>
                    <li>
                      <Link to="project">
                        <i className="fas fa-circle" />
                        Angular Dev
                      </Link>
                    </li>
                    <li>
                      <Link to="project">
                        <i className="fas fa-circle" />
                        Node JS
                      </Link>
                    </li>
                    <li>
                      <Link to="project">
                        <i className="fas fa-circle" />
                        Android
                      </Link>
                    </li>
                    <li>
                      <Link to="project">
                        <i className="fas fa-circle" />
                        Logo Design
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Subscribe</h2>
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
                            <i className="fas fa-long-arrow-alt-right long-arrow" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="applicate-mobile-blk">
                    <h6>Mobile Application</h6>
                    <p>
                      We help our customers harness the power of AI to make
                      smarter decisions
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
                <div className="col-md-12 col-lg-12 ">
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
  );
};
export default FooterFive;

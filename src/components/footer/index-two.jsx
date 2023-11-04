import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import { Googleplay, Appstore, Logo } from '../imagepath';

const FooterTwo = (props) => {
  const pathname = props.location && props.location.pathname.split("/")[1];

  const exclusionArray = ["/index-two"];

  if (props.location && exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }
  const history = useHistory();
  const eventclick = () => {
    history.push("/project");
  };
  return (
    <>
      {/* Footer */}
      <footer className="footer footer-two" id="bottom-scroll">
        <div className="footer-top aos" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <div className="footer-widget footer-menu">
                  <p>
                    Experience state-of-the-art marketplace platform with the
                    Spedify. We combine the experience of our global community
                    around the globe for a best marketplace theme.
                  </p>
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
                </div>
              </div>
              <div className="col-xl-2 col-md-3">
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
              <div className="col-xl-2 col-md-3">
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
              <div className="col-xl-2 col-md-4">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Other Links</h2>
                  <ul>
                    <li>
                      <Link to="freelancer-dashboard">Freelancers</Link>
                    </li>
                    <li>
                      <Link to="freelancer-portfolio">Freelancer Details</Link>
                    </li>
                    <li>
                      <Link to="project">Project</Link>
                    </li>
                    <li>
                      <Link to="project-details">Project Details</Link>
                    </li>
                    <li>
                      <Link to="post-project">Post Project</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-4">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Follow us</h2>
                  <ul>
                    <li>
                      <Link to="javascript;">Facebook</Link>
                    </li>
                    <li>
                      <Link to="javascript;">Twitter</Link>
                    </li>
                    <li>
                      <Link to="javascript;">Instagram</Link>
                    </li>
                    <li>
                      <Link to="javascript;">Pinterest</Link>
                    </li>
                  </ul>
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
                  <div className="copyright-text">
                    <p className="mb-0">
                      Copyright 2023 © Spedify. All right reserved. Powered by
                      Dreamguys Technologies
                    </p>
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
export default FooterTwo;

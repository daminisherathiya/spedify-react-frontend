import React, { useEffect, useState } from "react";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import { useHistory } from "react-router-dom";
// Import Images
import {
  object_03,
  project_06,
  review_02,
  Project_12,
  logo_footer,
  Project_13,
  Project_14,
  Blog_10,
  Blog_11,
  Logo_white,
  Logo,
  About_it_01,
  About_it_02,
  About_it_03,
  About_it_04,
  Project_32,
  Reg_icon,
  logo_icon_01,
  Project_33,
  logo_icon_05,
  Project_34,
  logo_icon_06,
  Recent_pro_01,
  Recent_pro_02,
  Recent_icon_01,
  Recent_icon_02,
  Recent_icon_03,
  Recent_icon_04,
  Plat_form_img1,
  Avatar_1,
  Avatar_2,
  Avatar_3,
  Avatar_4,
  Avatar_5,
  Avatar_6,
  Avatar_7,
  Avatar_8,
  Company_logo_01,
  Company_logo_02,
  Company_logo_03,
  Company_logo_04,
  Company_logo_05,
  Company_logo_06,
  Company_logo_07,
  Company_logo_08,
  Company_logo_09,
  Blog_20,
  Blog_18,
  Blog_19,
  Great_job,
  Appstore,
  Googleplay,
  quote_01,
  load_icon,
  Banner_6,
} from "../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderFive from "../header/header-five";
import { Link } from "react-router-dom";
import config from "config";
import SayAbout from "../home/slider/say-about";
import { BlogSidebar } from "../blog/blog_sidebar";
import FooterFive from "../footer/index-five";
import OurBlog from "./slider/ourblog";
import TopReviewFive from "./slider/TopReviewFive";
import CountUp from "react-countup";
import { FiArrowUp, FiSearch } from "react-icons/fi";
import { BiMap } from "react-icons/bi";
const Home5 = () => {
  const [scroll, setScroll] = useState(true);
  const options = [
    { id: 1, text: "Projects" },
    { id: 2, text: "Freelancers" },
  ];
  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  useEffect(() => {
    document.body.classList.add("home-page");
    return () => document.body.classList.remove("home-page");
  }, []);
  useEffect(() => {
    document.body.classList.add("bg-five");
    return () => document.body.classList.remove("bg-five");
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 150);
    });
    return () =>
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY > 150);
      });
  }, []);
  useEffect(() => {
    setTimeout(function () {
      $("#global-loader");
      setTimeout(function () {
        $("#global-loader").fadeOut("slow");
      }, 100);
    }, 500);
  }, []);
  const history = useHistory();
  const eventclick = () => {
    history.push("/project");
  };
  return (
    <>
      <>
        {/* Loader */}
        <div id="global-loader">
          <div className="whirly-loader"> </div>
          <div className="loader-img">
            <img src={load_icon} className="img-fluid" alt="" />
          </div>
        </div>
        {/* Loader */}
        {/* Main Wrapper */}
        <div className="main-wrapper">
          {/* Start Navigation */}
          {/* Header */}
          <HeaderFive />
          {/* /Header */}
          {/* Home Banner */}
          <section
            className="section home-banner home-five row-middle"
            style={{ backgroundImage: `url(${Banner_6})` }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="offset-xl-3 col-xl-6 col-lg-12 ">
                  <div className="banner-blk-five">
                    <div
                      className="banner-content text-center aos"
                      data-aos="fade-up"
                    >
                      <div className="rating d-flex align-items-center justify-content-center">
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <h5>Trused by over 2M+ users</h5>
                      </div>
                      <h1>Get the Perfect Developers &amp; Projects</h1>
                      <p>With the world's #1 Developers Marketplace</p>
                      <form
                        className="form"
                        name="store"
                        id="store"
                        method="post"
                        action={`${config.publicPath}project`}
                      >
                        <div className="form-inner">
                          <div className="input-group">
                            <span className="drop-detail">
                              <Select2
                                className="select form-control"
                                data={options}
                                options={{
                                  placeholder: "Projects",
                                }}
                              />
                            </span>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="What are you looking for?"
                            />
                            <button
                              className="btn btn-primary sub-btn"
                              onClick={eventclick}
                            >
                              <FiSearch className="feather-search" />
                            </button>
                          </div>
                        </div>
                      </form>
                      <div className="home-count">
                        <ul className="nav">
                          <li className="course-count">
                            <span className="counter-up">
                              <CountUp end={9207} duration={10} />
                            </span>
                            <span className="list-count">
                              Freelance developers
                            </span>
                          </li>
                          <li className="course-count">
                            <span className="counter-up">
                              <CountUp end={6000} duration={10} />
                            </span>
                            <span>+</span>
                            <span className="list-count">Projects Added</span>
                          </li>
                          <li className="course-count">
                            <span className="counter-up">
                              <CountUp end={919207} duration={10} />
                            </span>
                            <span className="list-count">
                              Completed projects
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Home Banner */}
          {/* Need Job */}
          <section className="section need-job">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-12 col-sm-12 col-12 mx-auto aos"
                  data-aos="fade-up"
                >
                  <div
                    className="section-header section-header-five text-center aos aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    <h2 className="header-title">Need Something done?</h2>
                    <p>Spedify is here to help you to get job completed</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="need-job-group aos" data-aos="fade-up">
                    <div className="about-it-item ">
                      <div className="need-job-icon text-center">
                        <img src={About_it_01} className="img-fluid" alt="" />
                      </div>
                      <div className="about-great-content text-center">
                        <h4>Browse portfolios</h4>
                        <p>
                          Find professionals you can trust by browsing their
                          samples of previous work and reading their profile
                          reviews.
                        </p>
                      </div>
                    </div>
                    <div className="about-it-item ">
                      <div className="need-job-icon text-center">
                        <img src={About_it_02} className="img-fluid" alt="" />
                      </div>
                      <div className="about-great-content text-center">
                        <h4>Fast bids</h4>
                        <p>
                          Receive obligation free quotes from our talented
                          freelancers fast. 80% of projects get bid
                        </p>
                      </div>
                    </div>
                    <div className="about-it-item">
                      <div className="need-job-icon text-center">
                        <img src={About_it_03} className="img-fluid" alt="" />
                      </div>
                      <div className="about-great-content text-center">
                        <h4>Quality work</h4>
                        <p>
                          Spedify.com has by far the largest pool of quality
                          freelancers globally- over 50 million to choose from.
                        </p>
                      </div>
                    </div>
                    <div className="about-it-item ">
                      <div className="need-job-icon text-center">
                        <img src={About_it_04} className="img-fluid" alt="" />
                      </div>
                      <div className="about-great-content text-center">
                        <h4>Track progress</h4>
                        <p>
                          Keep up-to-date and on-the-go with our time tracker,
                          and mobile app. Always know what freelancers are up
                          to.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Need Job */}
          {/* Popular Projects */}
          <section className="section popular-projects-job">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-12 mx-auto">
                  <div
                    className="section-header section-header-five text-center aos"
                    data-aos="fade-up"
                  >
                    <h2 className="header-title">Popular Projects near you</h2>
                    <p>Bid and stary the new Jobs </p>
                  </div>
                </div>
              </div>
              <div className="row">
                {/*- Project Item  */}
                <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                  <div
                    className="project-item project-popular-item aos"
                    data-aos="fade-up"
                  >
                    <div className="project-img">
                      <Link to="project">
                        <img src={Project_32} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="feature-content">
                      <div className="feature-time-blk">
                        <Link to="#" className="btn btn-primary green-active">
                          Full time
                        </Link>
                        <span>
                          <i className="far fa-clock me-1" /> 1 min ago
                        </span>
                      </div>
                      <h4>
                        <Link to="project">3D Renders and Amazon Product</Link>
                      </h4>
                      <ul className="feature-project-list nav">
                        <li>
                          <img src={Reg_icon} className="me-1" alt="icon" />
                          UI/UX Designer
                        </li>
                        <li>
                          <BiMap className="feather-map-pin me-1" />
                          Germany
                        </li>
                      </ul>
                      <div className="feature-foot">
                        <div className="logo-company">
                          <Link to="project">
                            <img
                              src={logo_icon_01}
                              className="me-1"
                              alt="icon"
                            />
                            <span>AMAZE TECH</span>
                          </Link>
                        </div>
                        <p>
                          Price : <span>$40-$500</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*- /Project Item  */}
                {/*- Project Item  */}
                <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                  <div
                    className="project-item project-popular-item aos"
                    data-aos="fade-up"
                  >
                    <div className="project-img">
                      <Link to="project">
                        <img src={Project_33} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="feature-content">
                      <div className="feature-time-blk">
                        <Link to="#" className="btn btn-primary green-active">
                          Full time
                        </Link>
                        <span>
                          <i className="far fa-clock me-1" /> 1 day ago
                        </span>
                      </div>
                      <h4>
                        <Link to="project">
                          Website Design for a Consumer Shop
                        </Link>
                      </h4>
                      <ul className="feature-project-list nav">
                        <li>
                          <img src={Reg_icon} className="me-1" alt="icon" />
                          Web Development
                        </li>
                        <li>
                          <BiMap className="feather-map-pin me-1" />
                          Newyork
                        </li>
                      </ul>
                      <div className="feature-foot">
                        <div className="logo-company">
                          <Link to="project">
                            <img
                              src={logo_icon_05}
                              className="me-1"
                              alt="icon"
                            />
                            <span>PARK INC</span>
                          </Link>
                        </div>
                        <p>
                          Price : <span>$30-$300</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*- /Project Item  */}
                {/*- Project Item  */}
                <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                  <div
                    className="project-item project-popular-item aos"
                    data-aos="fade-up"
                  >
                    <div className="project-img">
                      <Link to="project">
                        <img src={Project_34} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="feature-content">
                      <div className="feature-time-blk">
                        <Link to="#" className="btn btn-primary green-active">
                          Full time
                        </Link>
                        <span>
                          <i className="far fa-clock me-1" /> 2 day ago
                        </span>
                      </div>
                      <h4>
                        <Link to="project">3D Renders and Amazon Product </Link>
                      </h4>
                      <ul className="feature-project-list nav">
                        <li>
                          <img src={Reg_icon} className="me-1" alt="icon" />
                          Php Development
                        </li>
                        <li>
                          <BiMap className="feather-map-pin me-1" />
                          Nevada
                        </li>
                      </ul>
                      <div className="feature-foot">
                        <div className="logo-company">
                          <Link to="project">
                            <img
                              src={logo_icon_06}
                              className="me-1"
                              alt="icon"
                            />
                            <span>ABC SOFTWARE</span>
                          </Link>
                        </div>
                        <p>
                          Price : <span>$20-$200</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*- /Project Item  */}
                <div className="col-xl-12">
                  <div
                    className="more-project text-center aos "
                    data-aos="fade-up"
                  >
                    <Link to="project" className="btn btn-primary">
                      View More Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Popular Projects */}
          {/* Recent Categories */}
          <section className="section recent-categories">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-12 mx-auto">
                  <div
                    className="section-header section-header-five text-center aos"
                    data-aos="fade-up"
                  >
                    <h2 className="header-title">
                      Recently Updated Categories for you
                    </h2>
                    <p>Get work done in over 60 different categories</p>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Updated Item */}
                <div className="col-xl-3 col-md-6">
                  <div className="aos" data-aos="fade-up">
                    <Link to="project" className="update-project-blk move-box">
                      <div className="update-content">
                        <h6>Website design</h6>
                        <p>400 Projects Available</p>
                      </div>
                      <div className="update-icon-end">
                        <i className="fas fa-chevron-right" />
                      </div>
                    </Link>
                  </div>
                </div>
                {/* /Updated Item */}
                {/* Updated Item */}
                <div className="col-xl-3 col-md-6">
                  <div className="aos" data-aos="fade-up">
                    <Link to="project" className="update-project-blk move-box">
                      <div className="update-content">
                        <h6>Python</h6>
                        <p>60 Projects Available</p>
                      </div>
                      <div className="update-icon-end">
                        <i className="fas fa-chevron-right" />
                      </div>
                    </Link>
                  </div>
                </div>
                {/* /Updated Item */}
                {/* Updated Item */}
                <div className="col-xl-3 col-md-6">
                  <div className="aos" data-aos="fade-up">
                    <Link to="project" className="update-project-blk move-box">
                      <div className="update-content">
                        <h6>Photoshop</h6>
                        <p>221 Projects Available</p>
                      </div>
                      <div className="update-icon-end">
                        <i className="fas fa-chevron-right" />
                      </div>
                    </Link>
                  </div>
                </div>
                {/* /Updated Item */}
                {/* Updated Item */}
                <div className="col-xl-3 col-md-6">
                  <div className="aos" data-aos="fade-up">
                    <Link to="project" className="update-project-blk move-box">
                      <div className="update-content">
                        <h6>Android Apps</h6>
                        <p>40 Projects Available</p>
                      </div>
                      <div className="update-icon-end">
                        <i className="fas fa-chevron-right" />
                      </div>
                    </Link>
                  </div>
                </div>
                {/* /Updated Item */}
                {/* Updated Item */}
                <div className="col-xl-3 col-md-6">
                  <div className="aos" data-aos="fade-up">
                    <Link to="project" className="update-project-blk move-box">
                      <div className="update-content">
                        <h6>Software Architecture</h6>
                        <p>400 Projects Available</p>
                      </div>
                      <div className="update-icon-end">
                        <i className="fas fa-chevron-right" />
                      </div>
                    </Link>
                  </div>
                </div>
                {/* /Updated Item */}
                {/* Updated Item */}
                <div className="col-xl-3 col-md-6">
                  <div className="aos" data-aos="fade-up">
                    <Link to="project" className="update-project-blk move-box">
                      <div className="update-content">
                        <h6>Ecommerce</h6>
                        <p>400 Projects Available</p>
                      </div>
                      <div className="update-icon-end">
                        <i className="fas fa-chevron-right" />
                      </div>
                    </Link>
                  </div>
                </div>
                {/* /Updated Item */}
                {/* Updated Item */}
                <div className="col-xl-3 col-md-6">
                  <div className="aos" data-aos="fade-up">
                    <Link to="project" className="update-project-blk move-box">
                      <div className="update-content">
                        <h6>Banner Design</h6>
                        <p>400 Projects Available</p>
                      </div>
                      <div className="update-icon-end">
                        <i className="fas fa-chevron-right" />
                      </div>
                    </Link>
                  </div>
                </div>
                {/* /Updated Item */}
                {/* Updated Item */}
                <div className="col-xl-3 col-md-6">
                  <div className="aos" data-aos="fade-up">
                    <Link to="project" className="update-project-blk move-box">
                      <div className="update-content">
                        <h6>Link Building</h6>
                        <p>400 Projects Available</p>
                      </div>
                      <div className="update-icon-end">
                        <i className="fas fa-chevron-right" />
                      </div>
                    </Link>
                  </div>
                </div>
                {/* /Updated Item */}
                {/* Updated Item */}
                <div className="col-xl-3 col-md-6">
                  <div className="aos" data-aos="fade-up">
                    <Link to="project" className="update-project-blk move-box">
                      <div className="update-content">
                        <h6>JavaScript</h6>
                        <p>400 Projects Available</p>
                      </div>
                      <div className="update-icon-end">
                        <i className="fas fa-chevron-right" />
                      </div>
                    </Link>
                  </div>
                </div>
                {/* /Updated Item */}
                {/* Updated Item */}
                <div className="col-xl-3 col-md-6">
                  <div className="aos" data-aos="fade-up">
                    <Link to="project" className="update-project-blk move-box">
                      <div className="update-content">
                        <h6>Marketing</h6>
                        <p>400 Projects Available</p>
                      </div>
                      <div className="update-icon-end">
                        <i className="fas fa-chevron-right" />
                      </div>
                    </Link>
                  </div>
                </div>
                {/* /Updated Item */}
                {/* Updated Item */}
                <div className="col-xl-3 col-md-6">
                  <div className="aos" data-aos="fade-up">
                    <Link to="project" className="update-project-blk move-box">
                      <div className="update-content">
                        <h6>MYSQL</h6>
                        <p>400 Projects Available</p>
                      </div>
                      <div className="update-icon-end">
                        <i className="fas fa-chevron-right" />
                      </div>
                    </Link>
                  </div>
                </div>
                {/* /Updated Item */}
                {/* Updated Item */}
                <div className="col-xl-3 col-md-6">
                  <div className="aos" data-aos="fade-up">
                    <Link to="project" className="update-project-blk move-box">
                      <div className="update-content">
                        <h6>Illustration</h6>
                        <p>400 Projects Available</p>
                      </div>
                      <div className="update-icon-end">
                        <i className="fas fa-chevron-right" />
                      </div>
                    </Link>
                  </div>
                </div>
                {/* /Updated Item */}
                <div className="col-xl-12">
                  <div
                    className="more-project text-center aos"
                    data-aos="fade-up"
                  >
                    <Link to="project" className="btn btn-primary">
                      View More Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Recent Categories */}
          {/* Profesional Job */}
          <section className="section profesion-job">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="recent-pro-img aos" data-aos="fade-up">
                    <img
                      src={Recent_pro_01}
                      alt=""
                      className="img-fluid mb-2"
                    />
                    <img src={Recent_pro_02} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="aos" data-aos="fade-up">
                    <div className="demand-professional">
                      <h2>More than 50 million professionals on demand</h2>
                      <p>
                        Why hire people when you can simply integrate our
                        talented developers.
                      </p>
                    </div>
                    <div className="demand-post-job">
                      <div className="demand-post-img">
                        <img
                          src={Recent_icon_01}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="demand-content">
                        <h6>Post a job</h6>
                        <p>
                          It’s free and easy to post a job. Simply fill in a
                          title, description and budget and competitive bids
                          come within minutes.
                        </p>
                      </div>
                    </div>
                    <div className="demand-post-job">
                      <div className="demand-post-img">
                        <img
                          src={Recent_icon_02}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="demand-content">
                        <h6>Choose freelancers</h6>
                        <p>
                          No job is too big or too small. We've got freelancers
                          for jobs of any size or budget, across 1800+ skills.
                          No job is too complex. We can get it done!
                        </p>
                      </div>
                    </div>
                    <div className="demand-post-job">
                      <div className="demand-post-img">
                        <img
                          src={Recent_icon_03}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="demand-content">
                        <h6>Pay safely</h6>
                        <p>
                          It’s free and easy to post a job. Simply fill in a
                          title, description and budget and competitive bids
                          come within minutes.
                        </p>
                      </div>
                    </div>
                    <div className="demand-post-job mb-0">
                      <div className="demand-post-img">
                        <img
                          src={Recent_icon_04}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="demand-content">
                        <h6>We’re here to help</h6>
                        <p>
                          It’s free and easy to post a job. Simply fill in a
                          title, description and budget and competitive bids
                          come within minutes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Profesional Job */}
          {/* Marketplace */}
          <section className="section market-place-join">
            <div className="container">
              <div className="market-place-bg">
                <div className="row">
                  <div className="col-md-6 d-flex align-items-center">
                    <div className="join-market-world aos" data-aos="fade-up">
                      <h2>Join World’s Best Marketplace for developers</h2>
                      <p>
                        Why hire people when you can simply integrate our
                        talented cloud workforce instead?
                      </p>
                      <div className="market-place-btn bidding-btn">
                        <Link
                          to="project"
                          className="btn btn-primary market-project me-2"
                        >
                          Post a Project
                        </Link>
                        <Link
                          to="project"
                          className="btn btn-primary project-post"
                        >
                          Start Bidding
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="join-platform-img aos" data-aos="fade-up">
                      <img src={Plat_form_img1} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Marketplace */}
          {/* Talented Developers */}
          <section className="section talent-developer">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-12 mx-auto">
                  <div
                    className="section-header section-header-five text-center aos"
                    data-aos="fade-up"
                  >
                    <h2 className="header-title">Most Hired Developers</h2>
                    <p>
                      Work with talented people at the most affordable price
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-md-6 col-sm-6">
                  <div
                    className="freelance-widget talent-widget aos"
                    data-aos="fade-up"
                  >
                    <div className="freelance-content">
                      <div className="freelance-img">
                        <Link to="developer-details">
                          <img src={Avatar_1} alt="User Image" />
                          <span className="verified">
                            <i className="fas fa-check-circle" />
                          </span>
                        </Link>
                      </div>
                      <div className="freelance-info">
                        <h3>
                          <Link to="developer-details">Wentworth</Link>
                        </h3>
                        <div className="freelance-specific">
                          Angular developer
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">5.0 (30)</span>
                        </div>
                        <div className="freelance-tags mb-0">
                          <Link to="#">
                            <span className="badge badge-pill badge-design">
                              Web Design
                            </span>
                          </Link>
                          <Link to="#">
                            <span className="badge badge-pill badge-design">
                              UI Design
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="talent-foot-list">
                      <ul className="nav">
                        <li>
                          Location<span>Nevada, USA</span>
                        </li>
                        <li>
                          Rate<span>$25 /hr</span>
                        </li>
                        <li>
                          Job Success<span>90%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6">
                  <div
                    className="freelance-widget talent-widget aos"
                    data-aos="fade-up"
                  >
                    <div className="freelance-content">
                      <div className="freelance-img">
                        <Link to="developer-details">
                          <img src={Avatar_2} alt="User Image" />
                          <span className="verified">
                            <i className="fas fa-check-circle" />
                          </span>
                        </Link>
                      </div>
                      <div className="freelance-info">
                        <h3>
                          <Link to="developer-details">Harry Kenneth</Link>
                        </h3>
                        <div className="freelance-specific">
                          Node Js developer
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">5.0 (30)</span>
                        </div>
                        <div className="freelance-tags mb-0">
                          <Link to="#">
                            <span className="badge badge-pill badge-design">
                              Web Design
                            </span>
                          </Link>
                          <Link to="#">
                            <span className="badge badge-pill badge-design">
                              UI Design
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="talent-foot-list">
                      <ul className="nav">
                        <li>
                          Location<span>Nevada, USA</span>
                        </li>
                        <li>
                          Rate<span>$25 /hr</span>
                        </li>
                        <li>
                          Job Success<span>90%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6">
                  <div
                    className="freelance-widget talent-widget aos"
                    data-aos="fade-up"
                  >
                    <div className="freelance-content">
                      <div className="freelance-img">
                        <Link to="developer-details">
                          <img src={Avatar_3} alt="User Image" />
                          <span className="verified">
                            <i className="fas fa-check-circle" />
                          </span>
                        </Link>
                      </div>
                      <div className="freelance-info">
                        <h3>
                          <Link to="developer-details">Chambers</Link>
                        </h3>
                        <div className="freelance-specific">
                          Full stack developer
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">5.0 (30)</span>
                        </div>
                        <div className="freelance-tags mb-0">
                          <Link to="#">
                            <span className="badge badge-pill badge-design">
                              Web Design
                            </span>
                          </Link>
                          <Link to="#">
                            <span className="badge badge-pill badge-design">
                              UI Design
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="talent-foot-list">
                      <ul className="nav">
                        <li>
                          Location<span>Nevada, USA</span>
                        </li>
                        <li>
                          Rate<span>$25 /hr</span>
                        </li>
                        <li>
                          Job Success<span>90%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6">
                  <div
                    className="freelance-widget talent-widget aos"
                    data-aos="fade-up"
                  >
                    <div className="freelance-content">
                      <div className="freelance-img">
                        <Link to="developer-details">
                          <img src={Avatar_4} alt="User Image" />
                          <span className="verified">
                            <i className="fas fa-check-circle" />
                          </span>
                        </Link>
                      </div>
                      <div className="freelance-info">
                        <h3>
                          <Link to="developer-details">Victoria</Link>
                        </h3>
                        <div className="freelance-specific">UI/UX designer</div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">5.0 (30)</span>
                        </div>
                        <div className="freelance-tags mb-0">
                          <Link to="#">
                            <span className="badge badge-pill badge-design">
                              Web Design
                            </span>
                          </Link>
                          <Link to="#">
                            <span className="badge badge-pill badge-design">
                              UI Design
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="talent-foot-list">
                      <ul className="nav">
                        <li>
                          Location<span>Nevada, USA</span>
                        </li>
                        <li>
                          Rate<span>$25 /hr</span>
                        </li>
                        <li>
                          Job Success<span>90%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6">
                  <div
                    className="freelance-widget talent-widget aos"
                    data-aos="fade-up"
                  >
                    <div className="freelance-content">
                      <div className="freelance-img">
                        <Link to="developer-details">
                          <img src={Avatar_5} alt="User Image" />
                          <span className="verified">
                            <i className="fas fa-check-circle" />
                          </span>
                        </Link>
                      </div>
                      <div className="freelance-info">
                        <h3>
                          <Link to="developer-details">Stewart Silva</Link>
                        </h3>
                        <div className="freelance-specific">UI/UX designer</div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">5.0 (30)</span>
                        </div>
                        <div className="freelance-tags mb-0">
                          <Link to="#">
                            <span className="badge badge-pill badge-design">
                              Web Design
                            </span>
                          </Link>
                          <Link to="#">
                            <span className="badge badge-pill badge-design">
                              UI Design
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="talent-foot-list">
                      <ul className="nav">
                        <li>
                          Location<span>Nevada, USA</span>
                        </li>
                        <li>
                          Rate<span>$25 /hr</span>
                        </li>
                        <li>
                          Job Success<span>90%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6">
                  <div
                    className="freelance-widget talent-widget aos"
                    data-aos="fade-up"
                  >
                    <div className="freelance-content">
                      <div className="freelance-img">
                        <Link to="developer-details">
                          <img src={Avatar_6} alt="User Image" />
                          <span className="verified">
                            <i className="fas fa-check-circle" />
                          </span>
                        </Link>
                      </div>
                      <div className="freelance-info">
                        <h3>
                          <Link to="developer-details">Denise</Link>
                        </h3>
                        <div className="freelance-specific">Web Developer</div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">5.0 (30)</span>
                        </div>
                        <div className="freelance-tags mb-0">
                          <Link to="#">
                            <span className="badge badge-pill badge-design">
                              Web Design
                            </span>
                          </Link>
                          <Link to="#">
                            <span className="badge badge-pill badge-design">
                              UI Design
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="talent-foot-list">
                      <ul className="nav">
                        <li>
                          Location<span>Nevada, USA</span>
                        </li>
                        <li>
                          Rate<span>$25 /hr</span>
                        </li>
                        <li>
                          Job Success<span>90%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6">
                  <div
                    className="freelance-widget talent-widget aos"
                    data-aos="fade-up"
                  >
                    <div className="freelance-content">
                      <div className="freelance-img">
                        <Link to="developer-details">
                          <img src={Avatar_7} alt="User Image" />
                          <span className="verified">
                            <i className="fas fa-check-circle" />
                          </span>
                        </Link>
                      </div>
                      <div className="freelance-info">
                        <h3>
                          <Link to="developer-details">Lucero</Link>
                        </h3>
                        <div className="freelance-specific">
                          React Developer
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">5.0 (30)</span>
                        </div>
                        <div className="freelance-tags mb-0">
                          <Link to="#">
                            <span className="badge badge-pill badge-design">
                              Web Design
                            </span>
                          </Link>
                          <Link to="#">
                            <span className="badge badge-pill badge-design">
                              UI Design
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="talent-foot-list">
                      <ul className="nav">
                        <li>
                          Location<span>Nevada, USA</span>
                        </li>
                        <li>
                          Rate<span>$25 /hr</span>
                        </li>
                        <li>
                          Job Success<span>90%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6">
                  <div
                    className="freelance-widget talent-widget aos"
                    data-aos="fade-up"
                  >
                    <div className="freelance-content">
                      <div className="freelance-img">
                        <Link to="developer-details">
                          <img src={Avatar_8} alt="User Image" />
                          <span className="verified">
                            <i className="fas fa-check-circle" />
                          </span>
                        </Link>
                      </div>
                      <div className="freelance-info">
                        <h3>
                          <Link to="developer-details">Murphy</Link>
                        </h3>
                        <div className="freelance-specific">IOS Developer</div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">5.0 (30)</span>
                        </div>
                        <div className="freelance-tags mb-0">
                          <Link to="#">
                            <span className="badge badge-pill badge-design">
                              Web Design
                            </span>
                          </Link>
                          <Link to="#">
                            <span className="badge badge-pill badge-design">
                              UI Design
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="talent-foot-list">
                      <ul className="nav">
                        <li>
                          Location<span>Nevada, USA</span>
                        </li>
                        <li>
                          Rate<span>$25 /hr</span>
                        </li>
                        <li>
                          Job Success<span>90%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div
                    className="more-project text-center aos"
                    data-aos="fade-up"
                  >
                    <Link to="developer-details" className="btn btn-primary">
                      View More Freelancers
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Talented Developers */}
          {/* Hire Company */}
          <section className="section compay-hire">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 d-flex align-items-center">
                  <div className="compay-hire-blk aos" data-aos="fade-up">
                    <h3>Top Hiring Company</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Nam nulla velit
                      ullamcorper tellus arcu ligula id nulla vitae. Sed laoreet
                      turpis elementum egestas vestibulum lacinia a. Faucibus
                      varius condimentum adipiscing{" "}
                    </p>
                    <div className="market-place-btn company-register-btn">
                      <Link
                        to="project"
                        className="btn btn-primary market-project me-2"
                      >
                        More Companies
                      </Link>
                      <Link
                        to="project"
                        className="btn btn-primary project-post"
                      >
                        Register as Company
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="hire-company-list aos" data-aos="fade-up">
                    <ul className="nav">
                      <li>
                        <img src={Company_logo_01} alt="" />
                      </li>
                      <li>
                        <img src={Company_logo_02} alt="" />
                      </li>
                      <li>
                        <img src={Company_logo_03} alt="" />
                      </li>
                      <li>
                        <img src={Company_logo_04} alt="" />
                      </li>
                      <li>
                        <img src={Company_logo_05} alt="" />
                      </li>
                      <li>
                        <img src={Company_logo_06} alt="" />
                      </li>
                      <li>
                        <img src={Company_logo_07} alt="" />
                      </li>
                      <li>
                        <img src={Company_logo_08} alt="" />
                      </li>
                      <li>
                        <img src={Company_logo_09} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <HiredDeveloper/> */}
            </div>
          </section>
          {/* Hire Company */}
          {/* Review */}
          <TopReviewFive />
          {/* Review */}
          {/* Blog */}
          <OurBlog />
          {/* / Blog */}
          {/* Opportunity */}
          <section className="section great-opportunity">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="job-next-blk great-find-job aos"
                    data-aos="fade-up"
                  >
                    <h2>Find Your Next Great Job Opportunity!</h2>
                    <p>
                      Quisque pretium dolor turpis, quis blandit turpis semper
                      ut. Nam malesuada eros nec luctus laoreet.{" "}
                    </p>
                    <div className="next-job-btn next-reg-now">
                      <Link
                        to="login"
                        className="btn btn-primary next-sign me-3"
                      >
                        Sign in with us
                      </Link>
                      <Link
                        to="register"
                        className="btn btn-primary next-register"
                      >
                        Register Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="opportunity-img aos" data-aos="fade-up">
                    <img className="img-fluid" src={Great_job} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Opportunity */}
        </div>
        <FooterFive />
        {/* /Main Wrapper */}
        {/* Scroll Top */}
        <button
          className={
            scroll
              ? "scroll-top scroll-top-next scroll-to-target open"
              : "scroll-top scroll-top-next scroll-to-target"
          }
          data-target="html"
        >
          <span className="ti-angle-up">
            <FiArrowUp className="feather-arrow-up" />
          </span>
        </button>
        {/* /Scroll Top */}
      </>
    </>
  );
};
export default Home5;

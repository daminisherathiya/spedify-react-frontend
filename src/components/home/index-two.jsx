import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import { FiArrowDown, FiArrowRight, FiArrowUp } from "react-icons/fi";
import { BiMap } from "react-icons/bi";
// Import Images
import {
  logo_two,
  object_two,
  project_01,
  discount,
  Project_06,
  Project_07,
  Project_08,
  Project_09,
  Project_10,
  Project_11,
  Avatar_13,
  Avatar_14,
  Avatar_15,
  Avatar_16,
  Avatar_17,
  Avatar_18,
  Avatar_19,
  Avatar_20,
  Blog_07,
  Blog_08,
  Blog_09,
  Appstore,
  Googleplay,
  feature_icon_01,
  feature_icon_02,
  Logo,
  Banner_2,
  Plat_form,
  Project_19,
  Reg_icon,
  logo_icon_01,
  Project_20,
  logo_icon_02,
  Project_21,
  Project_22,
  logo_icon_03,
  Project_23,
  Project_24,
  logo_icon_04,
  Avatar_21,
  Price_icon,
  Avatar_22,
  Avatar_23,
  Avatar_24,
  Avatar_25,
  Avatar_27,
  Avatar_28,
  Great_icon_01,
  Great_icon_02,
  Great_icon_03,
  Great_icon_04,
  About_01,
  About_02,
  Location_01,
  Location_02,
  Location_03,
  Location_04,
  Location_05,
  Location_06,
  Location_07,
  Location_08,
  Review_01,
  Review_02,
  Review_03,
  Company_logo_01,
  Company_logo_02,
  Company_logo_03,
  Company_logo_04,
  Company_logo_05,
  Company_logo_06,
  Blog_12,
  Blog_13,
  Blog_14,
  Avatar_26,
  Banner_img_02,
  load_icon,
} from "../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderTwo from "../header/headertwo";
import TopReviews from "../home/slider/topreviews";
import config from "config";
import FooterTwo from "../footer/index-two";
import TopHiringCompany from "./slider/tophiringcompany";
import ReviewUser from "./slider/ReviewsUser";
import FeaturedBlog from "./slider/Featureblogs";
import TopHiringCompany1 from "./slider/TopHiringcompany1";
import CountUp from "react-countup";
// import Footer from "../footer/index"
import { useHistory } from "react-router-dom";
const Home2 = () => {
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
    document.body.classList.add("bg-two");
    return () => document.body.classList.remove("bg-two");
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
        <HeaderTwo />
        {/* /Header */}
        {/* Home Banner */}
        <section className="section home-banner row-middle home-two">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8 col-lg-7">
                <div className="banner-content aos" data-aos="fade-up">
                  <div className="banner-dot">
                    <span className="blue-dot-banner" />
                    <span className="red-dot-banner" />
                  </div>
                  <div className="market-place">
                    <h3>With the world's #1 Developers Marketplace</h3>
                  </div>
                  <h1>
                    Get the perfect <br />
                    Developers &amp; Projects
                  </h1>
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
                            className="select form-control "
                            data={options}
                            options={{
                              placeholder: "Projects",
                            }}
                          />
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Search here"
                        />
                        <button
                          className="btn btn-primary sub-btn"
                          onClick={eventclick}
                        >
                          Search Now
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
                        <span className="list-count">Freelance developers</span>
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
                        <span className="list-count">Completed projects</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-5">
                <div className="banner-img aos" data-aos="fade-up">
                  <img src={Banner_img_02} className="img-fluid" alt="banner" />
                </div>
              </div>
            </div>
            <div className="banner-top-bottom">
              <Link to="#bottom-scroll">
                <FiArrowDown className="feather-arrow-down" />
              </Link>
            </div>
          </div>
        </section>
        {/* /Home Banner */}
        {/* Our Feature */}
        <section className="section update-project">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto">
                <div
                  className="section-header section-header-two text-center aos"
                  data-aos="fade-up"
                >
                  <h2 className="header-title">
                    Recently Updated <span>Projects</span> for you
                  </h2>
                  <p>Get work done in over 60 different categories</p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Updated Item */}
              <div className="col-xl-3 col-md-6">
                <div className="aos" data-aos="fade-up">
                  <Link to="project" className="update-project-blk move-box ">
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
        {/* /Our Feature */}
        {/* Our Platform */}
        <section className="section platform">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div className="platform-group aos" data-aos="fade-up">
                  <h1>
                    Discover <span>Project Around</span> your Location in Our
                    Platform
                  </h1>
                  <h5>Get Inspired by Development Projects</h5>
                  <p>
                    We Provide Stable Service With Experts Freelancers around
                    the globe, are looking for work and provide the best they
                    have .Experience state-of-the-art marketplace platform with
                    the Spedify. We combine the experience of our global
                    community around the globe for a best marketplace theme.
                  </p>
                  <div className="market-place-btn platform-btn">
                    <Link
                      to="project"
                      className="btn btn-primary market-project me-2"
                    >
                      View Projects
                    </Link>
                    <Link to="project" className="btn btn-primary project-post">
                      Post a Project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="plat-form-img aos" data-aos="fade-up">
                  <img src={Plat_form} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Our Platform */}
        {/* Feature */}
        <section className="section feature-project">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto">
                <div
                  className="section-header section-header-two text-center aos"
                  data-aos="fade-up"
                >
                  <h2 className="header-title">
                    Featured <span>Projects</span> for you
                  </h2>
                  <p>We have over 2000+ Projects waiting for you</p>
                </div>
              </div>
            </div>
            <div className="row">
              {/*- Project Item  */}
              <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                <div
                  className="project-item feature-project-item aos"
                  data-aos="fade-up"
                >
                  <div className="project-img">
                    <Link to="project">
                      <img src={Project_19} alt="" className="img-fluid" />
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
                          <img src={logo_icon_01} className="me-1" alt="icon" />
                          <span>AMAZE TECH</span>
                        </Link>
                      </div>
                      <Link to="project-details" className="bid-now">
                        Bid Now{" "}
                        <FiArrowRight className="feather-arrow-right ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                <div
                  className="project-item feature-project-item aos"
                  data-aos="fade-up"
                >
                  <div className="project-img">
                    <Link to="project">
                      <img src={Project_20} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="feature-content">
                    <div className="feature-time-blk">
                      <Link to="#" className="btn btn-primary sky-active">
                        Full time
                      </Link>
                      <span>
                        <i className="far fa-clock me-1" /> 10 min ago
                      </span>
                    </div>
                    <h4>
                      <Link to="project">
                        Web Development for a Shopify Store
                      </Link>
                    </h4>
                    <ul className="feature-project-list nav">
                      <li>
                        <img src={Reg_icon} className="me-1" alt="icon" />
                        Web Development
                      </li>
                      <li>
                        <BiMap className="feather-map-pin me-1" />
                        Kentucky, USA
                      </li>
                    </ul>
                    <div className="feature-foot">
                      <div className="logo-company">
                        <Link to="project">
                          <img src={logo_icon_02} className="me-1" alt="icon" />
                          <span>PARK INC</span>
                        </Link>
                      </div>
                      <Link to="project-details" className="bid-now">
                        Bid Now{" "}
                        <FiArrowRight className="feather-arrow-right ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                <div
                  className="project-item feature-project-item aos"
                  data-aos="fade-up"
                >
                  <div className="project-img">
                    <Link to="project">
                      <img src={Project_21} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="feature-content">
                    <div className="feature-time-blk">
                      <Link to="#" className="btn btn-primary green-active">
                        Part time
                      </Link>
                      <span>
                        <i className="far fa-clock me-1" /> 5 min ago
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
                        Angular Developer
                      </li>
                      <li>
                        <BiMap className="feather-map-pin me-1" />
                        Delaware, USA
                      </li>
                    </ul>
                    <div className="feature-foot">
                      <div className="logo-company">
                        <Link to="project">
                          <img src={logo_icon_01} className="me-1" alt="icon" />
                          <span>AMAZE TECH</span>
                        </Link>
                      </div>
                      <Link to="project-details" className="bid-now">
                        Bid Now{" "}
                        <FiArrowRight className="feather-arrow-right ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                <div
                  className="project-item feature-project-item aos"
                  data-aos="fade-up"
                >
                  <div className="project-img">
                    <Link to="project">
                      <img src={Project_22} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="feature-content">
                    <div className="feature-time-blk">
                      <Link to="#" className="btn btn-primary green-active">
                        Full time
                      </Link>
                      <span>
                        <i className="far fa-clock me-1" /> 6 min ago
                      </span>
                    </div>
                    <h4>
                      <Link to="project">
                        UI/UX for Cryptocurrency Exchange
                      </Link>
                    </h4>
                    <ul className="feature-project-list nav">
                      <li>
                        <img src={Reg_icon} className="me-1" alt="icon" />
                        Flutter Development
                      </li>
                      <li>
                        <BiMap className="feather-map-pin me-1" />
                        Germany
                      </li>
                    </ul>
                    <div className="feature-foot">
                      <div className="logo-company">
                        <Link to="project">
                          <img src={logo_icon_03} className="me-1" alt="icon" />
                          <span>AMAZE TECH</span>
                        </Link>
                      </div>
                      <Link to="project-details" className="bid-now">
                        Bid Now{" "}
                        <FiArrowRight className="feather-arrow-right ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                <div
                  className="project-item feature-project-item aos"
                  data-aos="fade-up"
                >
                  <div className="project-img">
                    <Link to="project">
                      <img src={Project_23} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="feature-content">
                    <div className="feature-time-blk">
                      <Link to="#" className="btn btn-primary sky-active">
                        Full time
                      </Link>
                      <span>
                        <i className="far fa-clock me-1" /> 2 min ago
                      </span>
                    </div>
                    <h4>
                      <Link to="project">
                        Landing Page Redesign / Sales Page
                      </Link>{" "}
                    </h4>
                    <ul className="feature-project-list nav">
                      <li>
                        <img src={Reg_icon} className="me-1" alt="icon" />
                        Web Development
                      </li>
                      <li>
                        <BiMap className="feather-map-pin me-1" />
                        Kentucky, USA
                      </li>
                    </ul>
                    <div className="feature-foot">
                      <div className="logo-company">
                        <Link to="project">
                          <img src={logo_icon_02} className="me-1" alt="icon" />
                          <span>ABC SOFTWARE</span>
                        </Link>
                      </div>
                      <Link to="project-details" className="bid-now">
                        Bid Now{" "}
                        <FiArrowRight className="feather-arrow-right ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                <div
                  className="project-item feature-project-item aos"
                  data-aos="fade-up"
                >
                  <div className="project-img">
                    <Link to="project">
                      <img src={Project_24} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="feature-content">
                    <div className="feature-time-blk">
                      <Link to="#" className="btn btn-primary green-active">
                        Part time
                      </Link>
                      <span>
                        <i className="far fa-clock me-1" /> 1 min ago
                      </span>
                    </div>
                    <h4>
                      <Link to="project">Build a Coaching Website Product</Link>{" "}
                    </h4>
                    <ul className="feature-project-list nav">
                      <li>
                        <img src={Reg_icon} className="me-1" alt="icon" />
                        Angular Developer
                      </li>
                      <li>
                        <BiMap className="feather-map-pin me-1" />
                        Delaware, USA
                      </li>
                    </ul>
                    <div className="feature-foot">
                      <div className="logo-company">
                        <Link to="project">
                          <img src={logo_icon_04} className="me-1" alt="icon" />
                          <span>AMAZE TECH</span>
                        </Link>
                      </div>
                      <Link to="project-details" className="bid-now">
                        Bid Now{" "}
                        <FiArrowRight className="feather-arrow-right ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
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
        {/*- /Feature  */}
        {/* Top skill */}
        <section className="section top-skill">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-12">
                <div className="skill-head aos" data-aos="fade-up">
                  <ul className="nav nav-pills" role="tablist">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        data-bs-toggle="pill"
                        to="#top-skills"
                      >
                        Top Skills
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        data-bs-toggle="pill"
                        to="#trending-developers"
                      >
                        Trending Developers
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        data-bs-toggle="pill"
                        to="#near-you"
                      >
                        Projects Near you
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-8 col-md-12">
                <div className="skill-list aos" data-aos="fade-up">
                  {/* Tab panes */}
                  <div className="tab-content pt-0">
                    <div id="top-skills" className="container tab-pane active">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="skill-list-out">
                            <ul>
                              <li>
                                <Link to="#">Website Design</Link>
                              </li>
                              <li>
                                <Link to="#">Mobile Apps</Link>
                              </li>
                              <li>
                                <Link to="#">Android Apps</Link>
                              </li>
                              <li>
                                <Link to="#">iPhone Apps</Link>
                              </li>
                              <li>
                                <Link to="#">Software Architecture</Link>
                              </li>
                              <li>
                                <Link to="#">Graphic Design</Link>
                              </li>
                              <li>
                                <Link to="#">Logo Design</Link>
                              </li>
                              <li>
                                <Link to="#">Public Relations</Link>
                              </li>
                              <li>
                                <Link to="#">Logistics</Link>
                              </li>
                              <li>
                                <Link to="#">Proofreading</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="skill-list-out">
                            <ul>
                              <li>
                                <Link to="#">Translation</Link>
                              </li>
                              <li>
                                <Link to="#">Research</Link>
                              </li>
                              <li>
                                <Link to="#">Research Writing</Link>
                              </li>
                              <li>
                                <Link to="#">Article Writing</Link>
                              </li>
                              <li>
                                <Link to="#">Web Scraping</Link>
                              </li>
                              <li>
                                <Link to="#">HTML</Link>
                              </li>
                              <li>
                                <Link to="#">CSS</Link>
                              </li>
                              <li>
                                <Link to="#">HTML 5</Link>
                              </li>
                              <li>
                                <Link to="#">Javascript</Link>
                              </li>
                              <li>
                                <Link to="#">Data Processing</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="skill-list-out">
                            <ul>
                              <li>
                                <Link to="#">Python</Link>
                              </li>
                              <li>
                                <Link to="#">Wordpress</Link>
                              </li>
                              <li>
                                <Link to="#">Web Search</Link>
                              </li>
                              <li>
                                <Link to="#">Finance</Link>
                              </li>
                              <li>
                                <Link to="#">Legal</Link>
                              </li>
                              <li>
                                <Link to="#">Linux</Link>
                              </li>
                              <li>
                                <Link to="#">Manufacturing</Link>
                              </li>
                              <li>
                                <Link to="#">Amazon Web Services</Link>
                              </li>
                              <li>
                                <Link to="#">Content Writing</Link>
                              </li>
                              <li>
                                <Link to="#">Marketing</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="skill-list-out">
                            <ul>
                              <li>
                                <Link to="#">Photoshop</Link>
                              </li>
                              <li>
                                <Link to="#">Technical Writing</Link>
                              </li>
                              <li>
                                <Link to="#">Blogging</Link>
                              </li>
                              <li>
                                <Link to="#">Internet Marketing</Link>
                              </li>
                              <li>
                                <Link to="#">eCommerce</Link>
                              </li>
                              <li>
                                <Link to="#">Data Entry</Link>
                              </li>
                              <li>
                                <Link to="#">Link Building</Link>
                              </li>
                              <li>
                                <Link to="#">C++ Programming</Link>
                              </li>
                              <li>
                                <Link to="#">C# Programming</Link>
                              </li>
                              <li>
                                <Link to="#">See All</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="trending-developers"
                      className="container tab-pane fade"
                    >
                      <div className="row">
                        <div className="col-md-3">
                          <div className="skill-list-out">
                            <ul>
                              <li>
                                <Link to="#">Translation</Link>
                              </li>
                              <li>
                                <Link to="#">Research</Link>
                              </li>
                              <li>
                                <Link to="#">Research Writing</Link>
                              </li>
                              <li>
                                <Link to="#">Article Writing</Link>
                              </li>
                              <li>
                                <Link to="#">Web Scraping</Link>
                              </li>
                              <li>
                                <Link to="#">HTML</Link>
                              </li>
                              <li>
                                <Link to="#">CSS</Link>
                              </li>
                              <li>
                                <Link to="#">HTML 5</Link>
                              </li>
                              <li>
                                <Link to="#">Javascript</Link>
                              </li>
                              <li>
                                <Link to="#">Data Processing</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="skill-list-out">
                            <ul>
                              <li>
                                <Link to="#">Website Design</Link>
                              </li>
                              <li>
                                <Link to="#">Mobile Apps</Link>
                              </li>
                              <li>
                                <Link to="#">Android Apps</Link>
                              </li>
                              <li>
                                <Link to="#">iPhone Apps</Link>
                              </li>
                              <li>
                                <Link to="#">Software Architecture</Link>
                              </li>
                              <li>
                                <Link to="#">Graphic Design</Link>
                              </li>
                              <li>
                                <Link to="#">Logo Design</Link>
                              </li>
                              <li>
                                <Link to="#">Public Relations</Link>
                              </li>
                              <li>
                                <Link to="#">Logistics</Link>
                              </li>
                              <li>
                                <Link to="#">Proofreading</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="skill-list-out">
                            <ul>
                              <li>
                                <Link to="#">Photoshop</Link>
                              </li>
                              <li>
                                <Link to="#">Technical Writing</Link>
                              </li>
                              <li>
                                <Link to="#">Blogging</Link>
                              </li>
                              <li>
                                <Link to="#">Internet Marketing</Link>
                              </li>
                              <li>
                                <Link to="#">eCommerce</Link>
                              </li>
                              <li>
                                <Link to="#">Data Entry</Link>
                              </li>
                              <li>
                                <Link to="#">Link Building</Link>
                              </li>
                              <li>
                                <Link to="#">C++ Programming</Link>
                              </li>
                              <li>
                                <Link to="#">C# Programming</Link>
                              </li>
                              <li>
                                <Link to="#">See All</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="skill-list-out">
                            <ul>
                              <li>
                                <Link to="#">Python</Link>
                              </li>
                              <li>
                                <Link to="#">Wordpress</Link>
                              </li>
                              <li>
                                <Link to="#">Web Search</Link>
                              </li>
                              <li>
                                <Link to="#">Finance</Link>
                              </li>
                              <li>
                                <Link to="#">Legal</Link>
                              </li>
                              <li>
                                <Link to="#">Linux</Link>
                              </li>
                              <li>
                                <Link to="#">Manufacturing</Link>
                              </li>
                              <li>
                                <Link to="#">Amazon Web Services</Link>
                              </li>
                              <li>
                                <Link to="#">Content Writing</Link>
                              </li>
                              <li>
                                <Link to="#">Marketing</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="near-you" className="container tab-pane fade">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="skill-list-out">
                            <ul>
                              <li>
                                <Link to="#">Photoshop</Link>
                              </li>
                              <li>
                                <Link to="#">Technical Writing</Link>
                              </li>
                              <li>
                                <Link to="#">Blogging</Link>
                              </li>
                              <li>
                                <Link to="#">Internet Marketing</Link>
                              </li>
                              <li>
                                <Link to="#">eCommerce</Link>
                              </li>
                              <li>
                                <Link to="#">Data Entry</Link>
                              </li>
                              <li>
                                <Link to="#">Link Building</Link>
                              </li>
                              <li>
                                <Link to="#">C++ Programming</Link>
                              </li>
                              <li>
                                <Link to="#">C# Programming</Link>
                              </li>
                              <li>
                                <Link to="#">See All</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="skill-list-out">
                            <ul>
                              <li>
                                <Link to="#">Website Design</Link>
                              </li>
                              <li>
                                <Link to="#">Mobile Apps</Link>
                              </li>
                              <li>
                                <Link to="#">Android Apps</Link>
                              </li>
                              <li>
                                <Link to="#">iPhone Apps</Link>
                              </li>
                              <li>
                                <Link to="#">Software Architecture</Link>
                              </li>
                              <li>
                                <Link to="#">Graphic Design</Link>
                              </li>
                              <li>
                                <Link to="#">Logo Design</Link>
                              </li>
                              <li>
                                <Link to="#">Public Relations</Link>
                              </li>
                              <li>
                                <Link to="#">Logistics</Link>
                              </li>
                              <li>
                                <Link to="#">Proofreading</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="skill-list-out">
                            <ul>
                              <li>
                                <Link to="#">Python</Link>
                              </li>
                              <li>
                                <Link to="#">Wordpress</Link>
                              </li>
                              <li>
                                <Link to="#">Web Search</Link>
                              </li>
                              <li>
                                <Link to="#">Finance</Link>
                              </li>
                              <li>
                                <Link to="#">Legal</Link>
                              </li>
                              <li>
                                <Link to="#">Linux</Link>
                              </li>
                              <li>
                                <Link to="#">Manufacturing</Link>
                              </li>
                              <li>
                                <Link to="#">Amazon Web Services</Link>
                              </li>
                              <li>
                                <Link to="#">Content Writing</Link>
                              </li>
                              <li>
                                <Link to="#">Marketing</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="skill-list-out">
                            <ul>
                              <li>
                                <Link to="#">Translation</Link>
                              </li>
                              <li>
                                <Link to="#">Research</Link>
                              </li>
                              <li>
                                <Link to="#">Research Writing</Link>
                              </li>
                              <li>
                                <Link to="#">Article Writing</Link>
                              </li>
                              <li>
                                <Link to="#">Web Scraping</Link>
                              </li>
                              <li>
                                <Link to="#">HTML</Link>
                              </li>
                              <li>
                                <Link to="#">CSS</Link>
                              </li>
                              <li>
                                <Link to="#">HTML 5</Link>
                              </li>
                              <li>
                                <Link to="#">Javascript</Link>
                              </li>
                              <li>
                                <Link to="#">Data Processing</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="menu2" className="container tab-pane fade">
                      <h3>Menu 2</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Top skill */}
        {/* Feature Developer */}
        <section className="section feature-developer">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto">
                <div
                  className="section-header section-header-two aos"
                  data-aos="fade-up"
                >
                  <h2 className="header-title">
                    Featured <span>Developers</span> for you
                  </h2>
                  <p>We have over 1400+ Developers </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="feature-develop-blk aos" data-aos="fade-up">
                  <div className="developer-sub-blk">
                    <div className="img-developer">
                      <Link to="developer-details">
                        <img src={Avatar_21} className="me-2" alt="" />
                      </Link>
                    </div>
                    <div className="developer-content">
                      <h4>
                        <Link to="developer-details">Dran Gonzalez</Link>{" "}
                        <span className="verify">
                          <i className="fas fa-check-circle" />
                        </span>
                      </h4>
                      <p>React Developer</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">5.0 (30)</span>
                      </div>
                    </div>
                  </div>
                  <div className="hour-rate">
                    <ul className="nav">
                      <li>
                        <img src={Price_icon} className="me-2" alt="" />
                        $34 Hourly
                      </li>
                      <li>
                        <BiMap className="feather-map-pin me-1" />
                        Delaware, USA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-develop-blk aos" data-aos="fade-up">
                  <div className="developer-sub-blk">
                    <div className="img-developer">
                      <Link to="developer-details">
                        <img src={Avatar_22} className="me-2" alt="" />
                      </Link>
                    </div>
                    <div className="developer-content">
                      <h4>
                        <Link to="developer-details">Nicole Black</Link>
                      </h4>
                      <p>Angular Developer</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">5.0 (30)</span>
                      </div>
                    </div>
                  </div>
                  <div className="hour-rate">
                    <ul className="nav">
                      <li>
                        <img src={Price_icon} className="me-2" alt="" />
                        $32 Hourly
                      </li>
                      <li>
                        <BiMap className="feather-map-pin me-1" />
                        Nevada, USA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-develop-blk aos" data-aos="fade-up">
                  <div className="developer-sub-blk">
                    <div className="img-developer">
                      <Link to="developer-details">
                        <img src={Avatar_23} className="me-2" alt="" />
                      </Link>
                    </div>
                    <div className="developer-content">
                      <h4>
                        <Link to="developer-details">Megan Torres</Link>{" "}
                        <span className="verify">
                          <i className="fas fa-check-circle" />
                        </span>
                      </h4>
                      <p>Java Developer</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">5.0 (30)</span>
                      </div>
                    </div>
                  </div>
                  <div className="hour-rate">
                    <ul className="nav">
                      <li>
                        <img src={Price_icon} className="me-2" alt="" />
                        $24 Hourly
                      </li>
                      <li>
                        <BiMap className="feather-map-pin me-1" />
                        Delaware, USA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-develop-blk aos" data-aos="fade-up">
                  <div className="developer-sub-blk">
                    <div className="img-developer">
                      <Link to="developer-details">
                        <img src={Avatar_24} className="me-2" alt="" />
                      </Link>
                    </div>
                    <div className="developer-content">
                      <h4>
                        <Link to="developer-details">Shan Morris</Link>{" "}
                        <span className="verify">
                          <i className="fas fa-check-circle" />
                        </span>
                      </h4>
                      <p>React Developer</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">5.0 (30)</span>
                      </div>
                    </div>
                  </div>
                  <div className="hour-rate">
                    <ul className="nav">
                      <li>
                        <img src={Price_icon} className="me-2" alt="" />
                        $28 Hourly
                      </li>
                      <li>
                        <BiMap className="feather-map-pin me-1" />
                        Florida, USA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-develop-blk aos" data-aos="fade-up">
                  <div className="developer-sub-blk">
                    <div className="img-developer">
                      <Link to="developer-details">
                        <img src={Avatar_25} className="me-2" alt="" />
                      </Link>
                    </div>
                    <div className="developer-content">
                      <h4>
                        <Link to="developer-details">Dran Gonzalez</Link>{" "}
                        <span className="verify">
                          <i className="fas fa-check-circle" />
                        </span>
                      </h4>
                      <p>React Developer</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">5.0 (30)</span>
                      </div>
                    </div>
                  </div>
                  <div className="hour-rate">
                    <ul className="nav">
                      <li>
                        <img src={Price_icon} className="me-2" alt="" />
                        $34 Hourly
                      </li>
                      <li>
                        <BiMap className="feather-map-pin me-1" />
                        Delaware, USA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-develop-blk aos" data-aos="fade-up">
                  <div className="developer-sub-blk">
                    <div className="img-developer">
                      <Link to="developer-details">
                        <img src={Avatar_26} className="me-2" alt="" />
                      </Link>
                    </div>
                    <div className="developer-content">
                      <h4>
                        <Link to="developer-details">Nicole Black</Link>
                      </h4>
                      <p>Angular Developer</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">5.0 (30)</span>
                      </div>
                    </div>
                  </div>
                  <div className="hour-rate">
                    <ul className="nav">
                      <li>
                        <img src={Price_icon} className="me-2" alt="" />
                        $312 Hourly
                      </li>
                      <li>
                        <BiMap className="feather-map-pin me-1" />
                        Nevada, USA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-develop-blk aos" data-aos="fade-up">
                  <div className="developer-sub-blk">
                    <div className="img-developer">
                      <Link to="developer-details">
                        <img src={Avatar_27} className="me-2" alt="" />
                      </Link>
                    </div>
                    <div className="developer-content">
                      <h4>
                        <Link to="developer-details">Megan Torres</Link>{" "}
                      </h4>
                      <p>Java Developer</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">5.0 (30)</span>
                      </div>
                    </div>
                  </div>
                  <div className="hour-rate">
                    <ul className="nav">
                      <li>
                        <img src={Price_icon} className="me-2" alt="" />
                        $234 Hourly
                      </li>
                      <li>
                        <BiMap className="feather-map-pin me-1" />
                        Delaware, USA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-develop-blk aos" data-aos="fade-up">
                  <div className="developer-sub-blk">
                    <div className="img-developer">
                      <Link to="developer-details">
                        <img src={Avatar_28} className="me-2" alt="" />
                      </Link>
                    </div>
                    <div className="developer-content">
                      <h4>
                        <Link to="developer-details">Shan Morris</Link>{" "}
                        <span className="verify">
                          <i className="fas fa-check-circle" />
                        </span>
                      </h4>
                      <p>React Developer</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">5.0 (30)</span>
                      </div>
                    </div>
                  </div>
                  <div className="hour-rate">
                    <ul className="nav">
                      <li>
                        <img src={Price_icon} className="me-2" alt="" />
                        $28 Hourly
                      </li>
                      <li>
                        <BiMap className="feather-map-pin me-1" />
                        Florida, USA
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
                <div
                  className="review-bottom text-center aos"
                  data-aos="fade-up"
                >
                  <div className="client-rate">
                    <h4>Clients rate our Data Processing Executives</h4>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span className="average-rating">5.0 (30)</span>
                    </div>
                  </div>
                  <p>from 4227 reviews</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Feature Developer */}
        {/* Great About */}
        <section className="section great-about">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto">
                <div
                  className="section-header section-header-two aos"
                  data-aos="fade-up"
                >
                  <h2 className="header-title">What's great about it?</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="great-blk aos" data-aos="fade-up">
                  <div className="great-icon">
                    <img src={Great_icon_01} alt="" />
                  </div>
                  <div className="great-content">
                    <h4>Browse portfolios</h4>
                    <p>
                      Find professionals you can trust by browsing their samples
                      of previous work and reading their profile reviews.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="great-blk aos" data-aos="fade-up">
                  <div className="great-icon">
                    <img src={Great_icon_02} alt="" />
                  </div>
                  <div className="great-content">
                    <h4>Fast bids</h4>
                    <p>
                      Receive obligation free quotes from our talented
                      freelancers fast. 80% of projects get bid on within 60
                      seconds.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="great-blk aos" data-aos="fade-up">
                  <div className="great-icon">
                    <img src={Great_icon_03} alt="" />
                  </div>
                  <div className="great-content">
                    <h4>Quality work</h4>
                    <p>
                      Receive obligation free quotes from our talented
                      freelancers fast. 80% of projects get bid on within 60
                      seconds.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="great-blk aos" data-aos="fade-up">
                  <div className="great-icon">
                    <img src={Great_icon_04} alt="" />
                  </div>
                  <div className="great-content">
                    <h4>Track progress</h4>
                    <p>
                      Keep up-to-date and on-the-go with our time tracker, and
                      mobile app. Always know what freelancers are up to.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Great About */}
        {/* About Project */}
        <section className="section about-project">
          <div className="about-position">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 d-flex">
                  <div className="about-it-blk aos" data-aos="fade-up">
                    <div className="about-it-img">
                      <Link to="#">
                        <img className="img-fluid" src={About_01} alt="" />
                      </Link>
                    </div>
                    <div className="about-it-content text-center">
                      <h4>I need a developed Project</h4>
                      <p>
                        Get the perfect Developed project for your budget from
                        our creative community.
                      </p>
                      <div className="more-project text-center mt-0">
                        <Link
                          to="project"
                          className="btn btn-primary project-post"
                        >
                          Post a Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex">
                  <div className="about-it-blk aos" data-aos="fade-up">
                    <div className="about-it-img">
                      <Link to="#">
                        <img className="img-fluid" src={About_02} alt="" />
                      </Link>
                    </div>
                    <div className="about-it-content text-center">
                      <h4>Find Your Next Great Job Opportunity!</h4>
                      <p>
                        Do you want to earn money, find unlimited clients and
                        build your freelance career?
                      </p>
                      <div className="more-project text-center mt-0">
                        <Link
                          to="developer-details"
                          className="btn btn-primary start-bid"
                        >
                          Start Bidding
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /About Project */}
        {/* Job Location */}
        <section className="section job-location">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto">
                <div
                  className="section-header section-header-two section-locate aos"
                  data-aos="fade-up"
                >
                  <div>
                    <h2 className="header-title">Jobs by Location</h2>
                    <p>
                      Find your favourite jobs and get the benefits of yourself
                    </p>
                  </div>
                  <div className="view-locations">
                    <Link to="project" className="btn btn-primary ">
                      View all Locations{" "}
                      <span className="location-right">
                        <FiArrowRight className="feather-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-4">
                <div className="job-locate-blk aos" data-aos="fade-up">
                  <div className="location-img">
                    <Link to="project">
                      <img className="img-fluid" src={Location_01} alt="" />
                    </Link>
                  </div>
                  <div className="job-it-content">
                    <h6>Nevada, USA</h6>
                    <ul className="nav job-locate-foot">
                      <li>80 Companies</li>
                      <li>9 Vacancy</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4">
                <div className="job-locate-blk aos" data-aos="fade-up">
                  <div className="location-img">
                    <Link to="project">
                      <img className="img-fluid" src={Location_02} alt="" />
                    </Link>
                  </div>
                  <div className="job-it-content">
                    <h6>London, UK</h6>
                    <ul className="nav job-locate-foot">
                      <li>40 Companies</li>
                      <li>8 Vacancy</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4">
                <div className="job-locate-blk aos" data-aos="fade-up">
                  <div className="location-img">
                    <Link to="project">
                      <img className="img-fluid" src={Location_03} alt="" />
                    </Link>
                  </div>
                  <div className="job-it-content">
                    <h6>Bangalore, India</h6>
                    <ul className="nav job-locate-foot">
                      <li>50 Companies</li>
                      <li>10 Vacancy</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4">
                <div className="job-locate-blk aos" data-aos="fade-up">
                  <div className="location-img">
                    <Link to="project">
                      <img className="img-fluid" src={Location_04} alt="" />
                    </Link>
                  </div>
                  <div className="job-it-content">
                    <h6>Newyork, USA</h6>
                    <ul className="nav job-locate-foot">
                      <li>60 Companies</li>
                      <li>10 Vacancy</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4">
                <div className="job-locate-blk aos" data-aos="fade-up">
                  <div className="location-img">
                    <Link to="project">
                      <img className="img-fluid" src={Location_05} alt="" />
                    </Link>
                  </div>
                  <div className="job-it-content">
                    <h6>Paris, France</h6>
                    <ul className="nav job-locate-foot">
                      <li>80 Companies</li>
                      <li>9 Vacancy</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4">
                <div className="job-locate-blk aos" data-aos="fade-up">
                  <div className="location-img">
                    <Link to="project">
                      <img className="img-fluid" src={Location_06} alt="" />
                    </Link>
                  </div>
                  <div className="job-it-content">
                    <h6>Berlin, Germany</h6>
                    <ul className="nav job-locate-foot">
                      <li>50 Companies</li>
                      <li>5 Vacancy</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4">
                <div className="job-locate-blk aos" data-aos="fade-up">
                  <div className="location-img">
                    <Link to="project">
                      <img className="img-fluid" src={Location_07} alt="" />
                    </Link>
                  </div>
                  <div className="job-it-content">
                    <h6>Amsterdam, Netherland</h6>
                    <ul className="nav job-locate-foot">
                      <li>30 Companies</li>
                      <li>2 Vacancy</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4">
                <div className="job-locate-blk aos" data-aos="fade-up">
                  <div className="location-img">
                    <Link to="project">
                      <img className="img-fluid" src={Location_08} alt="" />
                    </Link>
                  </div>
                  <div className="job-it-content">
                    <h6>California, USA</h6>
                    <ul className="nav job-locate-foot">
                      <li>70 Companies</li>
                      <li>4 Vacancy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Job Location */}
        {/* Review */}
        <ReviewUser />
        {/* / Review */}
        {/* Company Hire */}
        <TopHiringCompany1 />
        {/* / Company Hire */}
        {/* News */}
        <FeaturedBlog />
        {/* / News */}
        {/* News */}
        <section className="section job-register-two">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="register-job-blk">
                  <div className="job-content-blk aos" data-aos="fade-up">
                    <h1>Find Your Next Great Job Opportunity!</h1>
                    <p>
                      Quisque pretium dolor turpis, quis blandit turpis semper
                      ut. Nam malesuada eros nec luctus laoreet.
                    </p>
                  </div>
                  <div className="sign-in-btn mt-0 aos" data-aos="fade-up">
                    <Link to="login" className="btn btn-primary">
                      Sign in{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Main Wrapper */}
        <FooterTwo />
        {/* Scroll Top */}
        <button
          className={
            scroll
              ? "scroll-top scroll-top-next scroll-to-target open"
              : "scroll-top-next scroll-to-target"
          }
          data-target="html"
        >
          <span className="ti-angle-up">
            <FiArrowUp className="feather-arrow-up" />
          </span>
        </button>
        {/* Scroll Top */}
      </div>
    </>
  );
};
export default Home2;

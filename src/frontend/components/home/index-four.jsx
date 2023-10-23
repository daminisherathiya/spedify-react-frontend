import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";

// Import Images
import {
  logo_footer,
  Avatar_1,
  Avatar_2,
  Avatar_3,
  Blog_11,
  feature_icon04,
  project4,
  project5,
  subscribe_01,
  feature_icon_04,
  feature_icon_05,
  quote_01,
  Appstore,
  Googleplay,
  Project_15,
  Project_16,
  Project_17,
  Project_18,
  Avatar_4,
  Avatar_5,
  Avatar_6,
  Avatar_7,
  Avatar_8,
  Blog_01,
  Blog_02,
  Blog_03,
  Browse_Icon_01,
  Browse_Icon_02,
  Browse_Icon_03,
  Browse_Icon_04,
  Browse_Icon_05,
  Browse_Icon_06,
  About_it_01,
  About_it_03,
  About_it_04,
  Developer_08,
  Price_icon_01,
  Developer_05,
  Developer_06,
  Developer_07,
  Plat_form,
  Tick,
  Project_29,
  Reg_icon,
  Project_30,
  Project_31,
  Icon_07,
  Icon_04,
  Icon_05,
  Icon_06,
  Location_01,
  Location_02,
  Location_03,
  Location_04,
  Location_05,
  Location_06,
  Location_07,
  Location_08,
  quote,
  Plat_form_img,
  Blog_15,
  Production_icon,
  Cal_icon,
  Blog_16,
  Blog_17,
  Company_logo_01,
  Company_logo_02,
  Company_logo_03,
  Company_logo_04,
  Company_logo_05,
  Company_logo_06,
  About_it_02,
  Avatar_12,
  Logo,
  load_icon,
  Banner_5,
  Banner_4,
} from "../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderFour from "../header/header-four";
import SayAbout from "../home/slider/say-about";
import config from "config";
import FooterFour from "../footer/index-four";
import TrustedBestCompany from "./slider/trustedbestcompany";
import TopReviewFour from "./slider/Top-fourSpedify";
import OurBlogFour from "./slider/Ourblog-four";
import PopularProjects from "./slider/popularprojects";
import CountUp from "react-countup";
import { FiArrowRight, FiArrowUp, FiBriefcase } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { useHistory } from "react-router-dom";
const Home4 = () => {
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
    document.body.classList.add("bg-four");
    return () => document.body.classList.remove("bg-four");
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
        <HeaderFour />
        {/* /Header */}
        {/* Home Banner */}
        <section
          className="section home-banner home-four row-middle"
          style={{ backgroundImage: `url(${Banner_4})` }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8 col-lg-7">
                <div className="banner-blk-four aos" data-aos="fade-up">
                  <div className="banner-content">
                    <h5>With the world's #1 Developers Marketplace</h5>
                    <h1>
                      Get the perfect
                      <br /> Developers &amp; Projects
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
                            Search Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="coplete-job aos" data-aos="fade-right">
              <div className="complete-icon me-2">
                <FiBriefcase className="feather-briefcase" />
              </div>
              <div className="complete-content course-count">
                <h3>
                  +{" "}
                  <span className="counter-up">
                    <CountUp end={21} duration={3} />
                  </span>{" "}
                  K
                </h3>
                <p>Jobs Completed</p>
              </div>
            </div>
            <div className="fullstack-blk aos" data-aos="fade-up">
              <div className="fullstacker-img">
                <img src={Avatar_12} className="img-fluid" alt="" />
                <span className="stacker-active">
                  <i className="fas fa-check-circle" />
                </span>
              </div>
              <div className="fullstacker-name">
                <h4>Chambers</h4>
                <p>Full stack developer</p>
              </div>
              <div className="rating">
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star" />
                <span className="average-rating">5.0 (50 Review)</span>
              </div>
            </div>
            <div className="register-profesion aos" data-aos="fade-right">
              <div className="profesion-content course-count">
                <p>
                  <span className="counter-up">2</span>M+ Professionals
                  registered
                </p>
              </div>
              <div className="avatar-group">
                <div className="avatar avatar-xs group_img group_header">
                  <img
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src={Avatar_1}
                  />
                </div>
                <div className="avatar avatar-xs group_img group_header">
                  <img
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src={Avatar_2}
                  />
                </div>
                <div className="avatar avatar-xs group_img group_header">
                  <img
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src={Avatar_3}
                  />
                </div>
                <div className="avatar avatar-xs group_img group_header">
                  <img
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src={Avatar_4}
                  />
                </div>
                <div className="avatar avatar-xs group_img group_header">
                  <img
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src={Avatar_5}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Home Banner */}
        {/* Browse Categories */}
        <section className="section browse-categories">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto">
                <div
                  className="section-header section-header-four section-locate aos"
                  data-aos="fade-up"
                >
                  <div>
                    <h2 className="header-title">
                      Browse Projects By Category
                    </h2>
                    <p>Get work done in over 60 different categories</p>
                  </div>
                  <div className="view-locations">
                    <Link to="project" className="btn btn-primary ">
                      View all Categories{" "}
                      <span className="location-right">
                        <FiArrowRight className="feather-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row aos" data-aos="fade-up">
              <div className="col-xl-2 col-md-4">
                <Link to="project" className="browse-circle-blk move-box">
                  <div className="browse-icon me-2">
                    <img src={Browse_Icon_01} className="img-fluid" alt="" />
                  </div>
                  <div className="browse-content">
                    <h6>Illustration</h6>
                    <p>851 Projects</p>
                  </div>
                </Link>
              </div>
              <div className="col-xl-2 col-md-4">
                <Link to="project" className="browse-circle-blk move-box">
                  <div className="browse-icon me-2">
                    <img src={Browse_Icon_02} className="img-fluid" alt="" />
                  </div>
                  <div className="browse-content">
                    <h6>Link Building</h6>
                    <p>456 Projects</p>
                  </div>
                </Link>
              </div>
              <div className="col-xl-2 col-md-4">
                <Link to="project" className="browse-circle-blk move-box">
                  <div className="browse-icon me-2">
                    <img src={Browse_Icon_03} className="img-fluid" alt="" />
                  </div>
                  <div className="browse-content">
                    <h6>Python Dev</h6>
                    <p>851 Projects</p>
                  </div>
                </Link>
              </div>
              <div className="col-xl-2 col-md-4">
                <Link to="project" className="browse-circle-blk move-box">
                  <div className="browse-icon me-2">
                    <img src={Browse_Icon_04} className="img-fluid" alt="" />
                  </div>
                  <div className="browse-content">
                    <h6>Angular Dev</h6>
                    <p>568 Projects</p>
                  </div>
                </Link>
              </div>
              <div className="col-xl-2 col-md-4">
                <Link to="project" className="browse-circle-blk move-box">
                  <div className="browse-icon me-2">
                    <img src={Browse_Icon_05} className="img-fluid" alt="" />
                  </div>
                  <div className="browse-content">
                    <h6>Node JS </h6>
                    <p>301 Projects</p>
                  </div>
                </Link>
              </div>
              <div className="col-xl-2 col-md-4">
                <Link to="project" className="browse-circle-blk move-box">
                  <div className="browse-icon me-2">
                    <img src={Browse_Icon_06} className="img-fluid" alt="" />
                  </div>
                  <div className="browse-content">
                    <h6>Android</h6>
                    <p>751 Projects</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* /Browse Categories */}
        {/* What About It */}
        <section className="section what-about-it">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto">
                <div
                  className="section-header section-header-four text-center aos"
                  data-aos="fade-up"
                >
                  <div>
                    <h2 className="header-title">What's great about it?</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* About Item */}
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="about-it-item aos" data-aos="fade-up">
                  <div className="about-it-icon mx-auto">
                    <img src={About_it_01} className="img-fluid" alt="" />
                  </div>
                  <div className="about-great-content text-center">
                    <h4>Browse portfolios</h4>
                    <p>
                      Find professionals you can trust by browsing their samples
                      of previous work and reading their profile reviews.
                    </p>
                  </div>
                </div>
              </div>
              {/* /About Item */}
              {/* About Item */}
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="about-it-item aos" data-aos="fade-up">
                  <div className="about-it-icon mx-auto">
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
              </div>
              {/* /About Item */}
              {/* About Item */}
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="about-it-item aos" data-aos="fade-up">
                  <div className="about-it-icon mx-auto">
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
              </div>
              {/* /About Item */}
              {/* About Item */}
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="about-it-item aos" data-aos="fade-up">
                  <div className="about-it-icon mx-auto">
                    <img src={About_it_04} className="img-fluid" alt="" />
                  </div>
                  <div className="about-great-content text-center">
                    <h4>Track progress</h4>
                    <p>
                      Keep up-to-date and on-the-go with our time tracker, and
                      mobile app. Always know what freelancers are up to.
                    </p>
                  </div>
                </div>
              </div>
              {/* /About Item */}
            </div>
          </div>
        </section>
        {/* /Our Feature */}
        {/* Feature Developers */}
        <section className="section feaure-for-developer">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto">
                <div
                  className="section-header section-header-four section-locate aos"
                  data-aos="fade-up"
                >
                  <div>
                    <h2 className="header-title">
                      Featured Developers for you
                    </h2>
                    <p>We have over 1400+ Developers </p>
                  </div>
                  <div className="view-locations">
                    <Link to="developer-details" className="btn btn-primary ">
                      View all Developers{" "}
                      <span className="location-right">
                        <FiArrowRight className="feather-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-xl-3 col-md-6">
                <div
                  className="project-item project-item-feature aos"
                  data-aos="fade-up"
                >
                  <div className="project-img heart-blk">
                    <Link to="developer-details">
                      <img src={Developer_08} alt="" className="img-fluid" />
                    </Link>
                    <Link to="#" className="favourite">
                      <CiHeart className="feather-heart" />
                    </Link>
                    <span className="circle-active">
                      <i className="fas fa-check-circle" />
                    </span>
                    <span className="hour-dollr develop-dollr">
                      <img src={Price_icon_01} className="me-2" alt="" />
                      $64 / hr
                    </span>
                  </div>
                  <div className="feature-project-content text-center pb-0">
                    <h4>
                      <Link to="developer-details">Megan Torres</Link>
                    </h4>
                    <p>Java Developer</p>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">5.0 (50)</span>
                    </div>
                    <div className="foot-profile-btn d-grid ">
                      <Link to="developer-details" className="btn btn-primary">
                        View Profile
                        <i className="fas fa-caret-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div
                  className="project-item project-item-feature aos"
                  data-aos="fade-up"
                >
                  <div className="project-img heart-blk">
                    <Link to="developer-details">
                      <img src={Developer_05} alt="" className="img-fluid" />
                    </Link>
                    <Link to="#" className="favourite">
                      <CiHeart className="feather-heart" />
                    </Link>
                    <span className="circle-active">
                      <i className="fas fa-check-circle" />
                    </span>
                    <span className="hour-dollr develop-dollr">
                      <img src={Price_icon_01} className="me-2" alt="" />
                      $24 / hr
                    </span>
                  </div>
                  <div className="feature-project-content text-center pb-0">
                    <h4>
                      <Link to="developer-details">Nicole Black</Link>
                    </h4>
                    <p>Angular Developer</p>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.0 (40)</span>
                    </div>
                    <div className="foot-profile-btn d-grid ">
                      <Link to="developer-details" className="btn btn-primary">
                        View Profile
                        <i className="fas fa-caret-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div
                  className="project-item project-item-feature aos"
                  data-aos="fade-up"
                >
                  <div className="project-img heart-blk">
                    <Link to="developer-details">
                      <img src={Developer_06} alt="" className="img-fluid" />
                    </Link>
                    <Link to="#" className="favourite">
                      <CiHeart className="feather-heart" />
                    </Link>
                    <span className="circle-active">
                      <i className="fas fa-check-circle" />
                    </span>
                    <span className="hour-dollr develop-dollr">
                      <img src={Price_icon_01} className="me-2" alt="" />
                      $62 / hr
                    </span>
                  </div>
                  <div className="feature-project-content text-center pb-0">
                    <h4>
                      <Link to="developer-details">Megan Torres</Link>
                    </h4>
                    <p>Java Developer</p>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">5.0 (50)</span>
                    </div>
                    <div className="foot-profile-btn d-grid ">
                      <Link to="developer-details" className="btn btn-primary">
                        View Profile
                        <i className="fas fa-caret-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div
                  className="project-item project-item-feature aos"
                  data-aos="fade-up"
                >
                  <div className="project-img heart-blk">
                    <Link to="developer-details">
                      <img src={Developer_07} alt="" className="img-fluid" />
                    </Link>
                    <Link to="#" className="favourite ">
                      <CiHeart className="feather-heart" />
                    </Link>
                    <span className="circle-active">
                      <i className="fas fa-check-circle" />
                    </span>
                    <span className="hour-dollr develop-dollr">
                      <img src={Price_icon_01} className="me-2" alt="" />
                      $53 / hr
                    </span>
                  </div>
                  <div className="feature-project-content text-center pb-0">
                    <h4>
                      <Link to="developer-details">Shan Morris</Link>
                    </h4>
                    <p>React Developer</p>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star " />
                      <i className="fas fa-star" />
                      <span className="average-rating">3.0 (20)</span>
                    </div>
                    <div className="foot-profile-btn d-grid ">
                      <Link to="developer-details" className="btn btn-primary">
                        View Profile
                        <i className="fas fa-caret-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Feature Developers */}
        {/* Marketplace */}
        <section className="section join-marketplace">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="markrt-place-img aos" data-aos="fade-up">
                  <img src={Plat_form} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div
                  className="market-place-group join-place-blk aos"
                  data-aos="fade-up"
                >
                  <h2>
                    Join World’s Best Marketplace <span>for developers</span>
                  </h2>
                  <p>
                    Why hire people when you can simply integrate our talented
                    cloud workforce instead?
                  </p>
                  <ul className="market-list-out">
                    <li>
                      <img src={Tick} className="me-1" alt="" /> It’s free and
                      easy to post a job.
                    </li>
                    <li>
                      <img src={Tick} className="me-1" alt="" /> We've got
                      freelancers for jobs of any size or budget, across 1800+
                      skills.
                    </li>
                    <li>
                      <img src={Tick} className="me-1" alt="" /> Only pay for
                      work when it has been completed and you're 100% satisfied.{" "}
                    </li>
                    <li>
                      <img src={Tick} className="me-1" alt="" /> Our talented
                      team of recruiters can help you find the best freelancer.
                    </li>
                  </ul>
                  <div className="market-place-btn">
                    <Link
                      to="project"
                      className="btn btn-primary market-project me-2"
                    >
                      Post a Project
                    </Link>
                    <Link
                      to="developer-details"
                      className="btn btn-primary market-developer"
                    >
                      Find Developers
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Marketplace */}
        {/* Popular Projects */}
        <PopularProjects />
        {/* Popular Projects */}
        {/* Our Feature */}
        <section className="section feature-count">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 mx-auto">
                <div
                  className="section-header feature-count-head aos"
                  data-aos="fade-up"
                >
                  <h2 className="header-title">Spedify Acheivements</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Feature Item */}
              <div className="col-xl-3 col-md-6">
                <div
                  className="feature-item achive-feature aos"
                  data-aos="fade-up"
                >
                  <div className="feature-icon mb-0 me-2">
                    <img src={Icon_07} className="img-fluid" alt="" />
                  </div>
                  <div className="feature-content course-count text-start">
                    <h4 className="counter-up">
                      <span>
                        <CountUp end={9207} duration={10} />
                      </span>
                    </h4>
                    <p>Freelance developers</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-xl-3 col-md-6">
                <div
                  className="feature-item achive-feature aos"
                  data-aos="fade-up"
                >
                  <div className="feature-icon mb-0 me-2">
                    <img src={Icon_04} className="img-fluid" alt="" />
                  </div>
                  <div className="feature-content course-count text-start">
                    <h4>
                      <span className="counter-up">
                        <CountUp end={6000} duration={10} />
                      </span>{" "}
                      +
                    </h4>
                    <p>Projects Added</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-xl-3 col-md-6">
                <div
                  className="feature-item achive-feature comp-project aos"
                  data-aos="fade-up"
                >
                  <div className="feature-icon mb-0 me-2">
                    <img src={Icon_05} className="img-fluid" alt="" />
                  </div>
                  <div className="feature-content course-count text-start">
                    <h4 className="counter-up">
                      <span>
                        <CountUp end={919207} duration={10} />
                      </span>
                    </h4>
                    <p>Completed projects</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-xl-3 col-md-6">
                <div
                  className="feature-item achive-feature comp-project aos"
                  data-aos="fade-up"
                >
                  <div className="feature-icon mb-0 me-2">
                    <img src={Icon_06} className="img-fluid" alt="" />
                  </div>
                  <div className="feature-content course-count text-start">
                    <h4 className="counter-up">
                      <span>
                        <CountUp end={998} duration={10} />
                      </span>
                    </h4>
                    <p>Companies Registered</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
            </div>
          </div>
        </section>
        {/* /Our Feature */}
        {/* Job Location */}
        <section className="section job-location">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto">
                <div
                  className="section-header section-header-four section-locate aos"
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
                    <h6>
                      <Link to="project">Nevada, USA</Link>
                    </h6>
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
                    <h6>
                      <Link to="project">London, UK</Link>
                    </h6>
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
                    <h6>
                      <Link to="project">Bangalore, India</Link>
                    </h6>
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
                    <h6>
                      <Link to="project">Newyork, USA</Link>
                    </h6>
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
                    <h6>
                      <Link to="project">Paris, France</Link>
                    </h6>
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
                    <h6>
                      <Link to="project">Berlin, Germany</Link>
                    </h6>
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
                    <h6>
                      <Link to="project">Amsterdam, Netherland</Link>
                    </h6>
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
                    <h6>
                      <Link to="project">California, USA</Link>
                    </h6>
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
        {/* Say Review */}
        <TopReviewFour />
        {/* /Say Review Two */}
        {/* Platform Location */}
        <section className="section platform-location">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-5">
                <div className="markrt-place-img aos" data-aos="fade-up">
                  <img src={Plat_form_img} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-md-7 d-flex align-items-center">
                <div className="market-place-group aos" data-aos="fade-up">
                  <h2>
                    Discover <span>Project Around</span>{" "}
                    <span className="platform-head">
                      your Location in Our Platform
                    </span>
                  </h2>
                  <p>Get Inspired by Development Projects</p>
                  <p className="platform-pasage">
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
            </div>
          </div>
        </section>
        {/* /Platform Location */}
        {/* Blog */}
        <OurBlogFour />
        {/* /Popular Projects */}
        {/* Company Hire */}
        <TrustedBestCompany />
        {/* / Company Hire */}
        {/* App Version */}
        <section className="section next-great-job">
          <div className="container">
            <div className="row">
              <div className="offset-md-3 col-md-6">
                <div
                  className="job-next-blk text-center aos"
                  data-aos="fade-up"
                >
                  <h2>Find Your Next Great Job Opportunity!</h2>
                  <p>
                    Quisque pretium dolor turpis, quis blandit turpis semper ut.
                    Nam malesuada eros nec luctus laoreet.{" "}
                  </p>
                  <div className="next-job-btn next-with-job">
                    <Link to="login" className="btn btn-primary next-sign me-3">
                      Sign in with us
                    </Link>
                    <Link
                      to="register"
                      className="btn btn-primary next-register"
                    >
                      Register with us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /App Version */}
        <FooterFour />
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
        {/* /Scroll Top */}
      </div>
    </>
  );
};
export default Home4;

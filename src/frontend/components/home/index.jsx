import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { TopDevelopers } from "./slider/topdevelopers"
import { Reviews } from "./review"
import { useHistory } from "react-router-dom";
// Import Images
import {
  Banner_img, Icon_01, Icon_02, Icon_03, Project_01, Project_02, Project_03, Project_04, Project_05, Project_06, Project_07, Project_08, Avatar_1, Avatar_2, Avatar_3, Avatar_4, Avatar_5,
  Img_02, Img_03, Img_04, Subscribe, Blog_01, Blog_02, Blog_03, Test_quote, Review_01, Review_02, Review_03, Appversion, App_01, App_02, Company_logo_03, Company_logo_04, Company_logo_05, Company_logo_06, Company_logo_02, Company_logo_01, Logo, Top_icon, loader_icon, load_icon
} from "../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import Select2 from 'react-select2-wrapper';
// import 'react-select2-wrapper/css/select2.css';

import config from "config"
import HiredDeveloper from './slider/hired-developer';
import TopHiringCompany from './slider/tophiringcompany';
import CountUp from "react-countup";


const Home = () => {
  const [scroll, setScroll] = useState(true);
  //Aos
  const [count, setCount] = useState(10);
  const interval = 1000; // Interval in milliseconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [interval]);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true
    });

  }, []);
  const options = [
    { id: 1, text: 'Projects', },
    { id: 2, text: 'Freelancers', },
  ];
  useEffect(() => {
    document.body.classList.add("home-page");
    return () => document.body.classList.remove("home-page");
  }, []);
  useEffect(() => {
    document.body.classList.add("bg-one");
    return () => document.body.classList.remove("bg-one");
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 150);
    });
    return () => window.removeEventListener('scroll', () => {
      setScroll(window.scrollY > 150);
    });

  }, []);
  useEffect(() => {
  setTimeout(function () {
		$('#global-loader');
		setTimeout(function () {
			$("#global-loader").fadeOut("slow");
		}, 100);
	}, 500);
},[]);
const history=useHistory();
  const eventclick=()=>{history.push("/project");}
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
        {/* Home Banner */}
        <section className="section home-banner row-middle">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8 col-lg-7">
                <div className="banner-content aos" data-aos="fade-up">
                  <div className="rating d-flex">
                  <i className="fas fa-star checked" />
                  <i className="fas fa-star checked" />
                  <i className="fas fa-star checked" />
                  <i className="fas fa-star checked" />
                  <i className="fas fa-star checked" />
                    {/* <FontAwesomeIcon icon={checked ? solidStar : regularStar} />
                    <FontAwesomeIcon icon={checked ? solidStar : regularStar} />
                    <FontAwesomeIcon icon={checked ? solidStar : regularStar} />
                    <FontAwesomeIcon icon={checked ? solidStar : regularStar} />
                    <FontAwesomeIcon icon={checked ? solidStar : regularStar} /> */}
                    <h5>Trused by over 2M+ users</h5>
                  </div>
                  <h1>
                    Get the perfect{" "}
                    <span className="orange-text">
                      <br />
                      Developers &amp; Projects
                    </span>
                  </h1>
                  <p>With the world's #1 Developers marketplace</p>
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
                          <Select2 className="select form-control"
                            data={options}
                            options={{
                              placeholder: 'Projects',
                            }} />
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Search here"
                        />
                        <button className="btn btn-primary sub-btn" onClick={eventclick}>
                          Search Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4 col-lg-5">
                <div className="banner-img aos" data-aos="fade-up">
                  <img
                    src={Banner_img}
                    className="img-fluid"
                    alt="banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Home Banner */}
        {/* Our Feature */}
        <section className="section feature">
          <div className="container">
            <div className="row">
              {/* Feature Item */}
              <div className="col-xl-3 col-md-6">
                <div className="feature-item freelance-count aos" data-aos="fade-up">
                  <div className="feature-icon">
                    <img
                      src={Icon_01}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="feature-content course-count">
                    <h3>
                      <span className="counters">
                        <CountUp end={9207} duration={10} />
                      </span>
                    </h3>
                    <p>Freelance developers</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-xl-3 col-md-6">
                <div className="feature-item aos" data-aos="fade-up">
                  <div className="feature-icon">
                    <img
                      src={Icon_02}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="feature-content course-count">
                    <h3>
                      <span className="counter-up">
                        <CountUp end={6000} duration={10} />
                      </span>
                      <span>+</span>
                    </h3>
                    <p>Projects Added</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-xl-3 col-md-6">
                <div className="feature-item comp-project aos" data-aos="fade-up">
                  <div className="feature-icon">
                    <img
                      src={Icon_03}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="feature-content course-count">
                    <h3 className="counter-up">
                      <span>
                        <CountUp end={919207} duration={10} />
                      </span>
                    </h3>
                    <p>Completed projects</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-xl-3 col-md-6">
                <div className="feature-item comp-project aos" data-aos="fade-up">
                  <div className="feature-icon">
                    <img
                      src={Icon_03}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="feature-content course-count">
                    <h3 className="counter-up">
                      <span>
                        <CountUp end={998} duration={10} />
                      </span>
                    </h3>
                    <p>Companies Registered</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
            </div>
          </div>
        </section>
        {/* /Our Feature */}
        {/*- Developed Project  */}
        <section className="section work">
          <div className="container-fluid">
            <div className="row">
              {/* Feature Item */}
              <div className="col-md-6 work-box bg1">
                <div className="work-content aos" data-aos="fade-up">
                  <h2>
                    I need a Developed <span>Project</span>
                  </h2>
                  <p>
                    Get the perfect Developed project for your budget from our
                    creative community.
                  </p>
                  <Link to="project">
                    <i className="fas fa-long-arrow-alt-right long-arrow" />
                  </Link>
                </div>
              </div>
              {/* /Feature Item */}
              <div className="col-md-6 work-box want-works bg2">
                <div className="work-content aos" data-aos="fade-up">
                  <h2>
                    Find Your Next Great <span>Job Opportunity!</span>
                  </h2>
                  <p>
                    Do you want to earn money, find unlimited clients and build your
                    freelance career?
                  </p>
                  <Link to="developer">
                    <i className="fas fa-long-arrow-alt-right long-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*- /Developed Project  */}
        {/* Projects */}
        <section className="section projects">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 mx-auto">
                <div className="section-header text-center aos" data-aos="fade-up">
                  <p>High performing solutions to your requests</p>
                  <h2 className="header-title">
                    Get Inspired By Development Projects
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/*- Project Item  */}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="project">
                      <img
                        src={Project_01}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="project-content">
                      <h4>45</h4>
                      <h5>
                        <Link to="project">Android apps</Link>
                      </h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>20</h4>
                      <h5>
                        <Link to="project">Developers</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="project">
                      <img
                        src={Project_02}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="project-content">
                      <h4>45</h4>
                      <h5>
                        <Link to="project">Laravel Projects</Link>
                      </h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>20</h4>
                      <h5>
                        <Link to="project">Developers</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project-Item  */}
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="project">
                      <img
                        src={Project_03}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="project-content">
                      <h4>45</h4>
                      <h5>
                        <Link to="project">React Projects</Link>
                      </h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>20</h4>
                      <h5>
                        <Link to="project">Developers</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="project">
                      <img
                        src={Project_04}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="project-content">
                      <h4>45</h4>
                      <h5>
                        <Link to="project">Angular Projects</Link>
                      </h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>20</h4>
                      <h5>
                        <Link to="project">Developers</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="project">
                      <img
                        src={Project_05}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="project-content">
                      <h4>45</h4>
                      <h5>
                        <Link to="project">.Net Projects</Link>
                      </h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>20</h4>
                      <h5>
                        <Link to="project">Developers</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="project">
                      <img
                        src={Project_06}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="project-content">
                      <h4>45</h4>
                      <h5>
                        <Link to="project">Java Pojects</Link>
                      </h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>20</h4>
                      <h5>
                        <Link to="project">Developers</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="project">
                      <img
                        src={Project_07}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="project-content">
                      <h4>45</h4>
                      <h5>
                        <Link to="project">Python Projects</Link>
                      </h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>20</h4>
                      <h5>
                        <Link to="project">Developers</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project-Item  */}
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="project">
                      <img
                        src={Project_08}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="project-content">
                      <h4>45</h4>
                      <h5>
                        <Link to="project">PHP Development</Link>
                      </h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>20</h4>
                      <h5>
                        <Link to="project">Developers</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="see-all aos" data-aos="fade-up">
                  <Link to="project" className="btn all-btn">
                    View More Projects
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* /Projects */}
        {/* Top Instructor */}
        <TopDevelopers />
        {/* / Review */}
        <Reviews/>
        {/* App Version */}
        <section className="section app-version">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="app-version-img text-center aos" data-aos="fade-up">
                  <img
                    className="img-fluid"
                    src={Appversion}
                    alt="App"
                  />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="app-version-blk aos" data-aos="fade-up">
                  <h2>
                    Get More In Our Application and Enjoy The Mobile App Version
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
                    tempor nisl feugiat lectus in. Placerat pharetra eleifend integer
                    integer at. Nunc nunc eu arcu amet faucibus. Lorem ipsum dolor sit
                    amet consectetur. Nunc{" "}
                  </p>
                  <h5>Download our Mobile app in Both Platform</h5>
                  <div className="app-img-inside">
                    <img
                      className="img-fluid"
                      src={App_01}
                      alt="App"
                    />
                    <img
                      className="img-fluid"
                      src={App_02}
                      alt="App"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /App Version */}
        {/* Company Hire */}

        <TopHiringCompany />
        {/* / Company Hire */}
        {/* News */}
        <section className="section news">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-header text-center aos" data-aos="fade-up">
                  <p>High Performing Developers To Your</p>
                  <h2 className="header-title">Feature Blog</h2>
                </div>
              </div>
            </div>
            <div className="row blog-grid-row">
              <div className="col-xl-4 col-md-6 d-flex">
                {/* Blog Post */}
                <div className="blog grid-blog aos" data-aos="fade-up">
                  <div className="blog-image">
                    <Link to="blog-details">
                      <img
                        className="img-fluid"
                        src={Blog_01}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <Link to="developer-details">
                            <img src={Img_02} alt="Post Author" />{" "}
                            <span> David Lee</span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <i className="fas fa-calendar-alt" /> 4 Oct 2021
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="blog-details">Your next job starts right here</Link>
                    </h3>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
                      tempor nisl feugiat lectus in. Placerat pharetra eleifend
                      integer integer at. Nunc nunc eu arcu amet faucibus.
                    </p>
                    <div className="blog-read">
                      <Link to="blog-details">
                        Read More <i className="fas fa-arrow-right ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
              <div className="col-xl-4 col-md-6 d-flex">
                {/* Blog Post */}
                <div className="blog grid-blog aos" data-aos="fade-up">
                  <div className="blog-image">
                    <Link to="blog-details">
                      <img
                        className="img-fluid"
                        src={Blog_02}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <Link to="developer-details">
                            <img src={Img_03} alt="Post Author" />{" "}
                            <span> Deborah Angel</span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <i className="fas fa-calendar-alt" /> 10 Oct 2021
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="blog-details">People who completed NAND?</Link>
                    </h3>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
                      tempor nisl feugiat lectus in. Placerat pharetra eleifend
                      integer integer at. Nunc nunc eu arcu amet faucibus.
                    </p>
                    <div className="blog-read">
                      <Link to="blog-details">
                        Read More <i className="fas fa-arrow-right ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
              <div className="col-xl-4 col-md-6 d-flex">
                {/* Blog Post */}
                <div className="blog grid-blog aos" data-aos="fade-up">
                  <div className="blog-image">
                    <Link to="blog-details">
                      <img
                        className="img-fluid"
                        src={Blog_03}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <Link to="developer-details">
                            <img src={Img_04} alt="Post Author" />{" "}
                            <span>Darren Elder</span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <i className="fas fa-calendar-alt" /> 3 Nov 2021
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="blog-details">
                        Spedify - How to get job through online?
                      </Link>
                    </h3>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
                      tempor nisl feugiat lectus in. Placerat pharetra eleifend
                      integer integer at. Nunc nunc eu arcu amet faucibus.
                    </p>
                    <div className="blog-read">
                      <Link to="blog-details">
                        Read More <i className="fas fa-arrow-right ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="see-all aos" data-aos="fade-up">
                  <Link to="blog-details" className="btn all-btn">
                    More Articles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* / News */}
        {/* News */}
        <section className="section job-register">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="register-job-blk">
                  <div className="job-content-blk aos" data-aos="fade-up">
                    <h1>Find Your Next Great Job Opportunity!</h1>
                    <p>
                      Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam
                      malesuada eros nec luctus laoreet.
                    </p>
                  </div>
                  <div className="see-all mt-0 aos" data-aos="fade-up">
                    <Link to="register" className="btn all-btn">
                      Register Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <>
          {/* /Main Wrapper */}
          <button className={scroll ? "scroll-top scroll-to-target open" : "scroll-top scroll-to-target"} data-target="html">
            <span className="ti-angle-up">
              <img src={Top_icon} className="img-fluid" alt="" />
            </span>
          </button>
        </>

      </>
    </>
  )
}
export default Home;
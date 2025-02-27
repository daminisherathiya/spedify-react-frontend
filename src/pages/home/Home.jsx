import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-select2-wrapper/css/select2.css";
// Import Images
import {
  Slider_01,
  Slider_02,
  Category_01,
  Category_02,
  Category_03,
  Category_04,
  Category_05,
  Category_06,
  Category_07,
  Category_08,
  Tick,
  Market_place,
  Top_icon,
  load_icon,
} from "../../components/imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import FeaturedDevelopers from "./components/Featureddevelopers";
import TopReviews1 from "./components/TopReviews1";
import Blogs from "./components/Blogs";
import Slider from "react-slick";
import ProjectCategories from "./components/ProjectCategories";
import Search from "./components/Search";

const Home = () => {
  const [scroll, setScroll] = useState(true);
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
    document.body.classList.add("bg-three");
    return () => document.body.classList.remove("bg-three");
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
  const options = {
    dots: true,
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipe: false,
    touchMove: false,
    vertical: true,
    verticalScrolling: true,
    speed: 1000,
    autoplaySpeed: 2000,
    useTransform: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  // useEffect(() => {
  //   setTimeout(function () {
  //     $("#global-loader");
  //     setTimeout(function () {
  //       $("#global-loader").fadeOut("slow");
  //     }, 100);
  //   }, 500);
  // }, []);

  return (
    <>
      <div className="main-wrapper">
        {/* Start Navigation */}
        {/* Header */}
        {/* <HeaderThree /> */}
        {/* /Header */}
        {/* Home Banner  */}
        <div className="home-banner home-three">
          <div className="dot-slider unique slider">
            {/* Banner Images */}
            <Slider
              className="owl-theme testimonial-slider aos"
              data-aos="fade-up"
              {...options}
            >
              <div className="profile-widget-slide">
                <div className="slide-pro-img">
                  <Link to="#">
                    <img className="img-fluid" src={Slider_01} alt="" />
                  </Link>
                </div>
              </div>
              {/* /Banner Images */}
              {/* Banner Images */}
              <div className="profile-widget-slide">
                <div className="slide-pro-img">
                  <Link to="#">
                    <img className="img-fluid " src={Slider_02} alt="" />
                  </Link>
                </div>
              </div>
              {/* /Banner Images */}
              {/* Banner Images */}
              <div className="profile-widget-slide">
                <div className="slide-pro-img">
                  <Link to="#">
                    <img className="img-fluid" src={Slider_01} alt="" />
                  </Link>
                </div>
              </div>
              {/* /Banner Images */}
              {/* Banner Images */}
              <div className="profile-widget-slide">
                <div className="slide-pro-img">
                  <Link to="#">
                    <img className="img-fluid" src={Slider_02} alt="" />
                  </Link>
                </div>
              </div>
            </Slider>
            {/* Banner Images */}
          </div>
          <div className="container">
            <div className="banner-kofe">
              <div className="banner-content aos" data-aos="fade-up">
                <div className="rating d-flex">
                  <i className="fas fa-star checked" />
                  <i className="fas fa-star checked" />
                  <i className="fas fa-star checked" />
                  <i className="fas fa-star checked" />
                  <i className="fas fa-star checked" />
                  <h5>TRUSED BY OVER 2M+ USERS</h5>
                </div>
                <h1>
                  Get the Perfect Providers &amp; <br /> Support{" "}
                </h1>
                <Search />
              </div>
            </div>
          </div>
        </div>
        {/* <HomeSliderBanner /> */}
        {/* Home Banner */}
        {/* Company Hire */}
        {/* <TrustedCompanies /> */}
        {/* / Company Hire */}
        {/* Different Categories */}
        <ProjectCategories />
        {/* /Different Categories */}
        {/* Marketplace */}
        <section className="section best-marketplace">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div className="market-place-group aos" data-aos="fade-up">
                  <h2>
                    Join World’s Best <span>Marketplace for providers</span>
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
                      to="/post-project"
                      className="btn btn-primary market-project me-2"
                    >
                      Post a Request
                    </Link>
                    <Link
                      to="/search/providers"
                      className="btn btn-primary market-developer"
                    >
                      Find Providers
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="markrt-place-img aos" data-aos="fade-up">
                  <img src={Market_place} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Marketplace */}
        {/* Trending Projects */}
        {/* <TrendingProject /> */}
        {/* Trending Projects */}
        {/* Our Feature */}
        {/* <Achievements /> */}
        {/* /Our Feature */}
        {/* Feature Projects */}
        <FeaturedDevelopers />
        <TopReviews1 />
        <Blogs />
        {/* / Blog */}
        {/* Top skill */}
        <section className="section top-skill">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="skill-head skill-head-two aos"
                  data-aos="fade-up"
                >
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
                        Trending Providers
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
                <div className="skill-list aos" data-aos="fade-up">
                  {/* Tab panes */}
                  <div className="tab-content pt-0">
                    <div id="top-skills" className="container tab-pane active">
                      <div className="offset-md-1 col-md-10">
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
                    </div>
                    <div
                      id="trending-developers"
                      className="container tab-pane fade"
                    >
                      <div className="offset-md-1 col-md-10">
                        <div className="row">
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
                        </div>
                      </div>
                    </div>
                    <div id="near-you" className="container tab-pane fade">
                      <div className="offset-md-1 col-md-10">
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
        {/* App Version */}
        <section className="section next-job">
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
                  <div className="next-job-btn">
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
        {/* /Main Wrapper */}
        {/* Scroll Top */}
        <button
          className={
            scroll
              ? "scroll-top scroll-to-target open"
              : "scroll-top scroll-to-target"
          }
          data-target="html"
        >
          <span className="ti-angle-up">
            <img src={Top_icon} className="img-fluid" alt="" />
          </span>
        </button>
        {/* Scroll Top */}
      </div>
    </>
  );
};
export default Home;

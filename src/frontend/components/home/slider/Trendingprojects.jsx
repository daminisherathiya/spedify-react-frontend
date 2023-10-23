import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Images
import {
  Project_25,
  Project_26,
  Project_27,
  Project_28,
  Reg_icon,
} from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BiMap } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";

const TrendingProject = () => {
  //Aos
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const options = {
    items: 5,
    startposition: 0,
    margin: 30,
    dots: true,
    nav: true,
    smartSpeed: 2000,
    // navText: [
    // 	'<i className="fas fa-arrow-left"></i>',
    // 	'<i className="fas fa-arrow-right"></i>'
    // ],
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      991: {
        items: 3,
      },
      1170: {
        items: 4,
      },
    },
  };

  return (
    <section className="section trend-projects">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 mx-auto">
            <div
              className="section-header section-header-three aos"
              data-aos="fade-up"
            >
              <h2 className="header-title">Trending Projects</h2>
              <p>Recently Update jobs for you</p>
            </div>
          </div>
        </div>
        <div
          id="trend-slider"
          className="owl-theme trend-slider aos"
          data-aos="fade-up"
        >
          <OwlCarousel
            className="owl-theme trend-slider aos"
            data-aos="fade-up"
            {...options}
          >
            <div className="project-item trend-project-item">
              <div className="project-img">
                <Link to="project">
                  <img src={Project_25} alt="" className="img-fluid" />
                </Link>
              </div>
              <div className="trend-project-content">
                <h5>Graphic Designer</h5>
                <h4>
                  <Link to="project">UI/UX for Cryptocurrency Exchange</Link>
                </h4>
                <ul className="trend-project-list">
                  <li>
                    <img src={Reg_icon} className="me-1" alt="icon" />
                    Web Development
                  </li>
                  <li>
                    <BiMap className="feather-map-pin me-1" />
                    Delaware, USA
                  </li>
                </ul>
                <div className="trend-rate">
                  <ul className="nav">
                    <li>
                      Starting at <span>$364</span>
                    </li>
                    <li>
                      <BiMap className="feather-map-pin me-1" />4 Days ago
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="project-item trend-project-item">
              <div className="project-img">
                <Link to="project">
                  <img src={Project_26} alt="" className="img-fluid" />
                </Link>
              </div>
              <div className="trend-project-content">
                <h5>UI/UX Developmet</h5>
                <h4>
                  <Link to="project">Website Design for a Consumer Shop</Link>
                </h4>
                <ul className="trend-project-list">
                  <li>
                    <img src={Reg_icon} className="me-1" alt="icon" />
                    Anugular Development
                  </li>
                  <li>
                    <BiMap className="feather-map-pin me-1" />
                    Delaware, USA
                  </li>
                </ul>
                <div className="trend-rate">
                  <ul className="nav">
                    <li>
                      Starting at <span>$64</span>
                    </li>
                    <li>
                      <BiMap className="feather-map-pin me-1" />3 Days ago
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="project-item trend-project-item">
              <div className="project-img">
                <Link to="project">
                  <img src={Project_27} alt="" className="img-fluid" />
                </Link>
              </div>
              <div className="trend-project-content">
                <h5>Web Development</h5>
                <h4>
                  <Link to="project">
                    Landing Page Redesign / Sales Page Redesign
                  </Link>
                </h4>
                <ul className="trend-project-list">
                  <li>
                    <img src={Reg_icon} className="me-1" alt="icon" />
                    Web Development
                  </li>
                  <li>
                    <BiMap className="feather-map-pin me-1" />
                    Delaware, USA
                  </li>
                </ul>
                <div className="trend-rate">
                  <ul className="nav">
                    <li>
                      Starting at <span>$36</span>
                    </li>
                    <li>
                      <BiMap className="feather-map-pin me-1" />2 Days ago
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="project-item trend-project-item">
              <div className="project-img">
                <Link to="project">
                  <img src={Project_28} alt="" className="img-fluid" />
                </Link>
              </div>
              <div className="trend-project-content">
                <h5>Link Building</h5>
                <h4>
                  <Link to="project">
                    Build a Coaching Website Product Store images
                  </Link>
                </h4>
                <ul className="trend-project-list">
                  <li>
                    <img src={Reg_icon} className="me-1" alt="icon" />
                    SEO Analyst
                  </li>
                  <li>
                    <BiMap className="feather-map-pin me-1" />
                    Delaware, USA
                  </li>
                </ul>
                <div className="trend-rate">
                  <ul className="nav">
                    <li>
                      Starting at <span>$34</span>
                    </li>
                    <li>
                      <BiMap className="feather-map-pin me-1" />5 Days ago
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="project-item trend-project-item">
              <div className="project-img">
                <Link to="project">
                  <img src={Project_26} alt="" className="img-fluid" />
                </Link>
              </div>
              <div className="trend-project-content">
                <h5>UI/UX Developmet</h5>
                <h4>
                  <Link to="project">Website Design for a Consumer Shop</Link>
                </h4>
                <ul className="trend-project-list">
                  <li>
                    <img src={Reg_icon} className="me-1" alt="icon" />
                    Anugular Development
                  </li>
                  <li>
                    <BiMap className="feather-map-pin me-1" />
                    Delaware, USA
                  </li>
                </ul>
                <div className="trend-rate">
                  <ul className="nav">
                    <li>
                      Starting at <span>$64</span>
                    </li>
                    <li>
                      <BiMap className="feather-map-pin me-1" />3 Days ago
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="project-item trend-project-item">
              <div className="project-img">
                <Link to="project">
                  <img src={Project_27} alt="" className="img-fluid" />
                </Link>
              </div>
              <div className="trend-project-content">
                <h5>Web Development</h5>
                <h4>
                  <Link to="project">
                    Landing Page Redesign / Sales Page Redesign
                  </Link>
                </h4>
                <ul className="trend-project-list">
                  <li>
                    <img src={Reg_icon} className="me-1" alt="icon" />
                    Web Development
                  </li>
                  <li>
                    <BiMap className="feather-map-pin me-1" />
                    Delaware, USA
                  </li>
                </ul>
                <div className="trend-rate">
                  <ul className="nav">
                    <li>
                      Starting at <span>$36</span>
                    </li>
                    <li>
                      <BiMap className="feather-map-pin me-1" />2 Days ago
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="project-item trend-project-item">
              <div className="project-img">
                <Link to="project">
                  <img src={Project_28} alt="" className="img-fluid" />
                </Link>
              </div>
              <div className="trend-project-content">
                <h5>Link Building</h5>
                <h4>
                  <Link to="project">
                    Build a Coaching Website Product Store images
                  </Link>
                </h4>
                <ul className="trend-project-list">
                  <li>
                    <img src={Reg_icon} className="me-1" alt="icon" />
                    SEO Analyst
                  </li>
                  <li>
                    <BiMap className="feather-map-pin me-1" />
                    Delaware, USA
                  </li>
                </ul>
                <div className="trend-rate">
                  <ul className="nav">
                    <li>
                      Starting at <span>$34</span>
                    </li>
                    <li>
                      <BiMap className="feather-map-pin me-1" />5 Days ago
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="project-item trend-project-item">
              <div className="project-img">
                <Link to="project">
                  <img src={Project_25} alt="" className="img-fluid" />
                </Link>
              </div>
              <div className="trend-project-content">
                <h5>Graphic Designer</h5>
                <h4>
                  <Link to="project">UI/UX for Cryptocurrency Exchange</Link>
                </h4>
                <ul className="trend-project-list">
                  <li>
                    <img src={Reg_icon} className="me-1" alt="icon" />
                    Web Development
                  </li>
                  <li>
                    <BiMap className="feather-map-pin me-1" />
                    Delaware, USA
                  </li>
                </ul>
                <div className="trend-rate">
                  <ul className="nav">
                    <li>
                      Starting at <span>$364</span>
                    </li>
                    <li>
                      <BiMap className="feather-map-pin me-1" />4 Days ago
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="project-item trend-project-item">
              <div className="project-img">
                <Link to="project">
                  <img src={Project_26} alt="" className="img-fluid" />
                </Link>
              </div>
              <div className="trend-project-content">
                <h5>UI/UX Developmet</h5>
                <h4>
                  <Link to="project">Website Design for a Consumer Shop</Link>
                </h4>
                <ul className="trend-project-list">
                  <li>
                    <img src={Reg_icon} className="me-1" alt="icon" />
                    Anugular Development
                  </li>
                  <li>
                    <BiMap className="feather-map-pin me-1" />
                    Delaware, USA
                  </li>
                </ul>
                <div className="trend-rate">
                  <ul className="nav">
                    <li>
                      Starting at <span>$64</span>
                    </li>
                    <li>
                      <BiMap className="feather-map-pin me-1" />3 Days ago
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="project-item trend-project-item">
              <div className="project-img">
                <Link to="project">
                  <img src={Project_28} alt="" className="img-fluid" />
                </Link>
              </div>
              <div className="trend-project-content">
                <h5>Link Building</h5>
                <h4>
                  <Link to="project">
                    Build a Coaching Website Product Store images
                  </Link>
                </h4>
                <ul className="trend-project-list">
                  <li>
                    <img src={Reg_icon} className="me-1" alt="icon" />
                    SEO Analyst
                  </li>
                  <li>
                    <BiMap className="feather-map-pin me-1" />
                    Delaware, USA
                  </li>
                </ul>
                <div className="trend-rate">
                  <ul className="nav">
                    <li>
                      Starting at <span>$34</span>
                    </li>
                    <li>
                      <BiMap className="feather-map-pin me-1" />5 Days ago
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="project-item trend-project-item">
              <div className="project-img">
                <Link to="project">
                  <img src={Project_26} alt="" className="img-fluid" />
                </Link>
              </div>
              <div className="trend-project-content">
                <h5>UI/UX Developmet</h5>
                <h4>
                  <Link to="project">Website Design for a Consumer Shop</Link>
                </h4>
                <ul className="trend-project-list">
                  <li>
                    <img src={Reg_icon} className="me-1" alt="icon" />
                    Anugular Development
                  </li>
                  <li>
                    <BiMap className="feather-map-pin me-1" />
                    Delaware, USA
                  </li>
                </ul>
                <div className="trend-rate">
                  <ul className="nav">
                    <li>
                      Starting at <span>$64</span>
                    </li>
                    <li>
                      <BiMap className="feather-map-pin me-1" />3 Days ago
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <div
              className="view-locations all-views text-center aos aos-init aos-animate"
              data-aos="fade-up"
            >
              <Link to="#" className="btn btn-primary ">
                View all Projects{" "}
                <span className="location-right">
                  <FiArrowRight className="feather-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TrendingProject;

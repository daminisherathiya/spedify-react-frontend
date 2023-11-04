import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Images
import {
  Developer_05,
  Developer_06,
  Developer_07,
  Developer_08,
  Price_icon,
} from "../../../components/imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FiArrowRight } from "react-icons/fi";

const FeaturedDevelopers = () => {
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
    <section className="section feaure-project">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 mx-auto">
            <div
              className="section-header section-header-three aos"
              data-aos="fade-up"
            >
              <h2 className="header-title">Featured Developers for you</h2>
              <p>We have over 1400+ Developers </p>
            </div>
          </div>
        </div>
        <div
          id="feature-project-slider"
          className="owl-theme trend-slider aos"
          data-aos="fade-up"
        >
          <OwlCarousel
            className="owl-theme trend-slider aos"
            data-aos="fade-up"
            {...options}
          >
            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="provider-details">
                  <img src={Developer_05} alt="" className="img-fluid" />
                </Link>
                <Link to="#" className="favourite ">
                  <i className="feather-heart" />
                </Link>
                <span className="circle-active">
                  <i className="fas fa-check-circle" />
                </span>
                <span className="hour-dollr">
                  <img src={Price_icon} className="me-2" alt="" />
                  $64 / hr
                </span>
              </div>
              <div className="feature-project-content text-center">
                <h4>
                  <Link to="provider-details">Megan Torres</Link>
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
                <div className="feature-developer-foot d-flex justify-content-center">
                  <Link to="provider-details">
                    <i className="fas fa-caret-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="provider-details">
                  <img src={Developer_06} alt="" className="img-fluid" />
                </Link>
                <Link to="#" className="favourite ">
                  <i className="feather-heart" />
                </Link>
                <span className="circle-active">
                  <i className="fas fa-check-circle" />
                </span>
                <span className="hour-dollr">
                  <img src={Price_icon} className="me-2" alt="" />
                  $60 / hr
                </span>
              </div>
              <div className="feature-project-content text-center">
                <h4>
                  <Link to="provider-details">Nicole Black</Link>
                </h4>
                <p>.net Developer</p>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="average-rating">4.0 (20)</span>
                </div>
                <div className="feature-developer-foot d-flex justify-content-center">
                  <Link to="provider-details">
                    <i className="fas fa-caret-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="provider-details">
                  <img src={Developer_07} alt="" className="img-fluid" />
                </Link>
                <Link to="#" className="favourite">
                  <i className="feather-heart" />
                </Link>
                <span className="circle-active">
                  <i className="fas fa-check-circle" />
                </span>
                <span className="hour-dollr">
                  <img src={Price_icon} className="me-2" alt="" />
                  $64 / hr
                </span>
              </div>
              <div className="feature-project-content text-center">
                <h4>
                  <Link to="provider-details">Megan Torres</Link>
                </h4>
                <p>React Developer</p>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="average-rating">5.0 (30)</span>
                </div>
                <div className="feature-developer-foot d-flex justify-content-center">
                  <Link to="provider-details">
                    <i className="fas fa-caret-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="provider-details">
                  <img src={Developer_08} alt="" className="img-fluid" />
                </Link>
                <Link to="#" className="favourite ">
                  <i className="feather-heart" />
                </Link>
                <span className="circle-active">
                  <i className="fas fa-check-circle" />
                </span>
                <span className="hour-dollr">
                  <img src={Price_icon} className="me-2" alt="" />
                  $14 / hr
                </span>
              </div>
              <div className="feature-project-content text-center">
                <h4>
                  <Link to="provider-details">Shan Morris</Link>
                </h4>
                <p>Angular Developer</p>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="average-rating">5.0 (30)</span>
                </div>
                <div className="feature-developer-foot d-flex justify-content-center">
                  <Link to="provider-details">
                    <i className="fas fa-caret-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="provider-details">
                  <img src={Developer_07} alt="" className="img-fluid" />
                </Link>
                <Link to="#" className="favourite ">
                  <i className="feather-heart" />
                </Link>
                <span className="circle-active">
                  <i className="fas fa-check-circle" />
                </span>
                <span className="hour-dollr">
                  <img src={Price_icon} className="me-2" alt="" />
                  $17 / hr
                </span>
              </div>
              <div className="feature-project-content text-center">
                <h4>
                  <Link to="provider-details">Megan Torres</Link>
                </h4>
                <p>Java Developer</p>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="average-rating">4.0 (30)</span>
                </div>
                <div className="feature-developer-foot d-flex justify-content-center">
                  <Link to="provider-details">
                    <i className="fas fa-caret-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="provider-details">
                  <img src={Developer_06} alt="" className="img-fluid" />
                </Link>
                <Link to="#" className="favourite ">
                  <i className="feather-heart" />
                </Link>
                <span className="circle-active">
                  <i className="fas fa-check-circle" />
                </span>
                <span className="hour-dollr">
                  <img src={Price_icon} className="me-2" alt="" />
                  $60 / hr
                </span>
              </div>
              <div className="feature-project-content text-center">
                <h4>
                  <Link to="provider-details">Nicole Black</Link>
                </h4>
                <p>.net Developer</p>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="average-rating">4.0 (20)</span>
                </div>
                <div className="feature-developer-foot d-flex justify-content-center">
                  <Link to="provider-details">
                    <i className="fas fa-caret-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="provider-details">
                  <img src={Developer_07} alt="" className="img-fluid" />
                </Link>
                <Link to="#" className="favourite ">
                  <i className="feather-heart" />
                </Link>
                <span className="circle-active">
                  <i className="fas fa-check-circle" />
                </span>
                <span className="hour-dollr">
                  <img src={Price_icon} className="me-2" alt="" />
                  $64 / hr
                </span>
              </div>
              <div className="feature-project-content text-center">
                <h4>
                  <Link to="provider-details">Megan Torres</Link>
                </h4>
                <p>React Developer</p>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="average-rating">5.0 (30)</span>
                </div>
                <div className="feature-developer-foot d-flex justify-content-center">
                  <Link to="provider-details">
                    <i className="fas fa-caret-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="provider-details">
                  <img src={Developer_06} alt="" className="img-fluid" />
                </Link>
                <Link to="#" className="favourite ">
                  <i className="feather-heart" />
                </Link>
                <span className="circle-active">
                  <i className="fas fa-check-circle" />
                </span>
                <span className="hour-dollr">
                  <img src={Price_icon} className="me-2" alt="" />
                  $60 / hr
                </span>
              </div>
              <div className="feature-project-content text-center">
                <h4>
                  <Link to="provider-details">Nicole Black</Link>
                </h4>
                <p>.net Developer</p>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="average-rating">4.0 (20)</span>
                </div>
                <div className="feature-developer-foot d-flex justify-content-center">
                  <Link to="provider-details">
                    <i className="fas fa-caret-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="provider-details">
                  <img src={Developer_08} alt="" className="img-fluid" />
                </Link>
                <Link to="#" className="favourite ">
                  <i className="feather-heart" />
                </Link>
                <span className="circle-active">
                  <i className="fas fa-check-circle" />
                </span>
                <span className="hour-dollr">
                  <img src={Price_icon} className="me-2" alt="" />
                  $14 / hr
                </span>
              </div>
              <div className="feature-project-content text-center">
                <h4>
                  <Link to="provider-details">Shan Morris</Link>
                </h4>
                <p>Angular Developer</p>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="average-rating">5.0 (30)</span>
                </div>
                <div className="feature-developer-foot d-flex justify-content-center">
                  <Link to="provider-details">
                    <i className="fas fa-caret-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="provider-details">
                  <img src={Developer_07} alt="" className="img-fluid" />
                </Link>
                <Link to="#" className="favourite ">
                  <i className="feather-heart" />
                </Link>
                <span className="circle-active">
                  <i className="fas fa-check-circle" />
                </span>
                <span className="hour-dollr">
                  <img src={Price_icon} className="me-2" alt="" />
                  $64 / hr
                </span>
              </div>
              <div className="feature-project-content text-center">
                <h4>
                  <Link to="provider-details">Megan Torres</Link>
                </h4>
                <p>React Developer</p>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="average-rating">5.0 (30)</span>
                </div>
                <div className="feature-developer-foot d-flex justify-content-center">
                  <Link to="provider-details">
                    <i className="fas fa-caret-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="provider-details">
                  <img src={Developer_06} alt="" className="img-fluid" />
                </Link>
                <Link to="#" className="favourite ">
                  <i className="feather-heart" />
                </Link>
                <span className="circle-active">
                  <i className="fas fa-check-circle" />
                </span>
                <span className="hour-dollr">
                  <img src={Price_icon} className="me-2" alt="" />
                  $60 / hr
                </span>
              </div>
              <div className="feature-project-content text-center">
                <h4>
                  <Link to="provider-details">Nicole Black</Link>
                </h4>
                <p>.net Developer</p>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="average-rating">4.0 (20)</span>
                </div>
                <div className="feature-developer-foot d-flex justify-content-center">
                  <Link to="provider-details">
                    <i className="fas fa-caret-right" />
                  </Link>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
        <div className="row">
          <div className="col-md-12 text-center aos" data-aos="fade-up">
            <div
              className="view-locations all-views text-center aos aos-init aos-animate"
              data-aos="fade-up"
            >
              <Link to="provider-details" className="btn btn-primary ">
                View all Developers{" "}
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
export default FeaturedDevelopers;

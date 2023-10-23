import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
import Owlcarousel from "react-owl-carousel";
import Slider from "react-slick";
// Import Images
import { Review_01, Review_02 } from "../imagepath"
import AOS from "aos";
import "aos/dist/aos.css";
import { Test_quote } from "../imagepath";
import { Review_03 } from "../imagepath";

const Reviews = (props) => {

  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true
    });

  }, []);
  const options = {
    items: 5,
    margin: 30,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: [
				'<i class="fas fa-chevron-left"></i>',
    '<i class="fas fa-chevron-right"></i>'
			],
loop: true,
  responsiveClass: true,
    responsive: {
  0: {
    items: 1
  },
  768 : {
    items: 2
  },
  991 : {
    items: 3
  },
  1170: {
    items: 3
  }
    }
  };

return (
    <>
    <>
  {/* Review */}
  <section className="section testimonial-section review">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-header aos" data-aos="fade-up">
            <p>High Performing Developers To Your</p>
            <h2 className="header-title">Review of the Users</h2>
          </div>
        </div>
      </div>
      <div
        id="testimonial-slider"
        className="owl-theme testimonial-slider aos"
        data-aos="fade-up"
      >
        <Owlcarousel className="owl-theme testimonial-slider aos"{...options}>
        {/* Review Widget */}
        <div className="review-blog">
          <div className="review-top d-flex align-items-center">
            <div className="review-img">
              <Link to="review">
                <img
                  className="img-fluid"
                  src={Review_01}
                  alt="Post Image"
                />
              </Link>
            </div>
            <div className="review-info">
              <h3>
                <Link to="review">Durso Raeen</Link>
              </h3>
              <h5>Project Lead</h5>
              <div className="rating">
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star" />
                <span className="average-rating">4.7</span>
              </div>
            </div>
            <div className="test-quote-img">
              <img
                className="img-fluid"
                src={Test_quote}
                alt="quote"
              />
            </div>
          </div>
          <div className="review-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              orci enim, mattis nibh aliquam dui, nibh faucibus aenean.
            </p>
          </div>
        </div>
        {/* / Review Widget */}
        {/* Review Widget */}
        <div className="review-blog">
          <div className="review-top d-flex align-items-center">
            <div className="review-img">
              <Link to="review">
                <img
                  className="img-fluid"
                  src={Review_02}
                  alt="Post Image"
                />
              </Link>
            </div>
            <div className="review-info">
              <h3>
                <Link to="review">Camelia Rennesa</Link>
              </h3>
              <h5>Project Lead</h5>
              <div className="rating">
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star" />
                <span className="average-rating">4.8</span>
              </div>
            </div>
            <div className="test-quote-img">
              <img
                className="img-fluid"
                src={Test_quote}
                alt="quote"
              />
            </div>
          </div>
          <div className="review-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              orci enim, mattis nibh aliquam dui, nibh faucibus aenean.
            </p>
          </div>
        </div>
        {/* /Review Widget */}
        {/* Review Widget */}
        <div className="review-blog">
          <div className="review-top d-flex align-items-center">
            <div className="review-img">
              <Link to="review">
                <img
                  className="img-fluid"
                  src={Review_03}
                  alt="Post Image"
                />
              </Link>
            </div>
            <div className="review-info">
              <h3>
                <Link to="review">Brayan</Link>
              </h3>
              <h5>Team Lead</h5>
              <div className="rating">
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star" />
                <span className="average-rating">5.0</span>
              </div>
            </div>
            <div className="test-quote-img">
              <img
                className="img-fluid"
                src={Test_quote}
                alt="quote"
              />
            </div>
          </div>
          <div className="review-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              orci enim, mattis nibh aliquam dui, nibh faucibus aenean.
            </p>
          </div>
        </div>
        {/* /Review Widget */}
        {/* Review Widget */}
        <div className="review-blog">
          <div className="review-top d-flex align-items-center">
            <div className="review-img">
              <Link to="review">
                <img
                  className="img-fluid"
                  src={Review_02}
                  alt="Post Image"
                />
              </Link>
            </div>
            <div className="review-info">
              <h3>
                <Link to="review">Davis Payerf</Link>
              </h3>
              <h5>Project Lead</h5>
              <div className="rating">
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star" />
                <span className="average-rating">3.2</span>
              </div>
            </div>
            <div className="test-quote-img">
              <img
                className="img-fluid"
                src={Test_quote}
                alt="quote"
              />
            </div>
          </div>
          <div className="review-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              orci enim, mattis nibh aliquam dui, nibh faucibus aenean.
            </p>
          </div>
        </div>
        </Owlcarousel>
        {/* /Review Widget */}
      </div>
    </div>
  </section>
  {/* / Review */}
</>
</>
)
}
export {Reviews};
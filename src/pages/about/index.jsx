import React from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
// Import Images
import { About_img, About_01, Review_01, Review_02, Review_03, home_icon, Logo, About_1 } from "../../components/imagepath";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Aboutus = () => {

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
      768: {
        items: 2
      },
      991: {
        items: 3
      },
      1170: {
        items: 3
      }
    }
  };
  return (
    <>
      {/* Breadcrumb */}
      <div className="bread-crumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <div className="breadcrumb-list">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <img src={home_icon} alt="Post Author" /> Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      About Us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /Breadcrumb */}
      {/* About */}
      <section className="section about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="about-content">
                <h2>
                  About <span className="orange-text">Spedify</span>
                </h2>
                <p>
                  Welcome to Spedify, a community  committed to transforming the landscape of special education by focusing on two key objectives: improving outcomes for students with special needs, and connecting caring specialists with parents to alleviate stress and enhance the individualized education plan (IEP) process for their child.
                </p>
                <p>
                  At Spedify, we understand the unique challenges that children with special needs, and their families face in their educational journey. Special education procedures, including identification, evaluation, and decision-making regarding a child's need for special education supports and services, can be complex and overwhelming. We believe that every child deserves an education tailored to their individual needs, and we are dedicated to making this process more accessible and less stressful for both students and their support networks.
                </p>

                <p>
                  Our core mission is to enhance the outcome of special education procedures, to ensure that every child with special needs benefits from their educational experience. We strive to create a positive impact by streamlining the IEP process, ensuring that it is more effective and results in better educational experiences for children with diverse learning needs. By leveraging technology, and the expertise of a vast network of specialists, Spedify aims to be a catalyst for positive change in the special education environment.
                </p>

                <p>
                  We recognize that parents and caretakers play a pivotal role in the educational journey of their children with special needs. We provide a supportive and informative platform that empowers parents and caretakers with the knowledge and resources they need to navigate the intricacies of the system. Spedify is here to be your ally, offering guidance and assistance every step of the way.

                </p>

                <p>
                  At Spedify, we are more than a platform; we are a community dedicated to making a positive impact on the lives of children with special needs and their families.
                </p>

                <p>
                  Join us on this transformative journey, where we strive to create a brighter and more inclusive future for every child, one IEP at a time,

                </p>

                <p>
                  Jen Parker,
                  President/CEO, Spedify

                </p>

                <Link to="/project" className="btn learn-btn">
                  LEARN MORE
                </Link>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5">
              <div className="about-img">
                <img
                  className="img-fluid"
                  src={About_img}
                  alt="Post Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /About */}
      {/* Counter */}
      <section className="section job-counter">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="counter">
                <h2>800+</h2>
                <h4>Jobs Posted</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="counter">
                <h2>80+</h2>
                <h4>Companies</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="counter">
                <h2>900+</h2>
                <h4> Providers</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="counter">
                <h2>90+</h2>
                <h4>Development Services</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Review */}
      <section className="section testimonial-section review">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-header text-center">
                <div className="section-line" />
                <h2 className="header-title">Top Reviews</h2>
                <p>High Performing Providers To Your</p>
              </div>
            </div>
          </div>
          <div id="testimonial-slider" class="owl-theme testimonial-slider">
            <OwlCarousel className="owl-theme review-slider owl-loaded owl-drag" {...options}>
              {/* Review Widget */}
              <div className="review-blog">
                <div className="review-top d-flex align-items-center">
                  <div className="review-img">
                    <Link to="/review">
                      <img
                        className="img-fluid"
                        src={Review_01}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="review-info">
                    <h3>Davis Payerf</h3>
                    <h5>CEO</h5>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.7</span>
                    </div>
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
                    <Link to="/review">
                      <img
                        className="img-fluid"
                        src={Review_02}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="review-info">
                    <h3>Davis Payerf</h3>
                    <h5>PROJECT LEAD</h5>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.8</span>
                    </div>
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
                    <Link to="/review">
                      <img
                        className="img-fluid"
                        src={Review_03}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="review-info">
                    <h3>Davis Payerf</h3>
                    <h5>TEAM LEAD</h5>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">5.0</span>
                    </div>
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
                    <Link to="/review">
                      <img
                        className="img-fluid"
                        src={Review_01}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="review-info">
                    <h3>Davis Payerf</h3>
                    <h5>PROJECT LEAD</h5>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">3.2</span>
                    </div>
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
            </OwlCarousel>
          </div>
        </div>
      </section>
      {/* / Review */}
      {/* Agency */}
      <section className="section agency">
        <div className="container-fluid">
          <div className="row align-items-center black-bg">
            <div className="col-md-6 agency-box">
              <img src={About_1} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 agency-box black-bg">
              <div className="agency-content">
                <h2>
                  Used by over <span className="orange-text">1500</span> of World
                  Leading Agencies work
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
                  orci enim, mattis nibh aliquam dui, nibh faucibus aenean.
                </p>
                <Link to="/project" className="btn learn-btn">
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Agency */}
      {/* Experts */}
      <section className="section expert">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h5>SINCE THE START</h5>
              <h2>What are the benefits of applying job Online?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, mattis nibh aliquam dui, nibh faucibus aenean.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean.
              </p>
              <div className="btn-item">
                <Link className="btn get-btn" to="/login">
                  Get Started
                </Link>
                <Link className="btn courses-btn" to="/project">
                  ViEW SERVICES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Experts */}

      {/* /Main Wrapper */}
    </>
  )

}
export default Aboutus;
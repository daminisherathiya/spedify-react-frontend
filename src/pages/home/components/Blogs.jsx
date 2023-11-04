import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Images
import { Blog_21, Blog_22, Blog_23, Img_02, Img_03, Img_04, Img_05 } from "../../../components/imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FiArrowRight } from "react-icons/fi";

const Blogs = () => {
    //Aos
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true
        });

    }, []);


    const options = {
        	items: 5,
          startposition:0,
	        margin: 25,
	        dots : true,
			nav: true,
			smartSpeed: 2000,
			// navText: [
			// 	'<i className="fas fa-arrow-left"></i>',
			// 	'<i className="fas fa-arrow-right"></i>'
			// ],
			loop: true,
			responsiveClass:true,
	        responsive: {
	          	0: {
	            	items: 1
	          	},
	          	768 : {
	            	items: 1
	          	},
	          	1170: {
	            	items: 3
	          	}
        }
    };

return (
<section className="section news">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 mx-auto">
            <div
              className="section-header section-header-three aos"
              data-aos="fade-up"
            >
              <h2 className="header-title">Our Blog</h2>
              <p>Read Our Article To Get Tricks </p>
            </div>
          </div>
        </div>
        <div
          id="blog-slider"
          className="owl-theme trend-slider aos"
          data-aos="fade-up"
        >
          {/* Blog Post */}
          <OwlCarousel className="owl-theme" {...options}>
          <div className="blog blog-trick aos" data-aos="fade-up">
            <div className="blog-image">
              <Link to="blog-details">
                <img
                  className="img-fluid"
                  src={Blog_21}
                  alt="Post Image"
                />
              </Link>
            </div>
            <div className="blog-content blog-trick-content">
              <h3 className="blog-title">
                <Link to="blog-details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet.
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla mi
                laoreet quis amet phasellus....
              </p>
              <ul className="entry-meta meta-item mb-0">
                <li>
                  <div className="post-author blog-hover-img">
                    <Link to="developer-details">
                      <img src={Img_02} alt="Post Author" />{" "}
                      <span> Rihana madonna</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Blog Post */}
          {/* Blog Post */}
          <div className="blog blog-trick aos" data-aos="fade-up">
            <div className="blog-image">
              <Link to="blog-details">
                <img
                  className="img-fluid"
                  src={Blog_22}
                  alt="Post Image"
                />
              </Link>
            </div>
            <div className="blog-content blog-trick-content">
              <h3 className="blog-title">
                <Link to="blog-details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet.
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla mi
                laoreet quis amet phasellus....
              </p>
              <ul className="entry-meta meta-item mb-0">
                <li>
                  <div className="post-author blog-hover-img post-author-three">
                    <Link to="developer-details">
                      <img src={Img_03} alt="Post Author" />{" "}
                      <span> Rahul tiwatiya</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Blog Post */}
          {/* Blog Post */}
          <div className="blog blog-trick aos" data-aos="fade-up">
            <div className="blog-image">
              <Link to="blog-details">
                <img
                  className="img-fluid"
                  src={Blog_23}
                  alt="Post Image"
                />
              </Link>
            </div>
            <div className="blog-content blog-trick-content">
              <h3 className="blog-title">
                <Link to="blog-details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet.
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla mi
                laoreet quis amet phasellus....
              </p>
              <ul className="entry-meta meta-item mb-0">
                <li>
                  <div className="post-author blog-hover-img">
                    <Link to="developer-details">
                      <img src={Img_04} alt="Post Author" />{" "}
                      <span> John Gabriel</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Blog Post */}
          {/* Blog Post */}
          <div className="blog blog-trick aos" data-aos="fade-up">
            <div className="blog-image">
              <Link to="blog-details">
                <img
                  className="img-fluid"
                  src={Blog_22}
                  alt="Post Image"
                />
              </Link>
            </div>
            <div className="blog-content blog-trick-content">
              <h3 className="blog-title">
                <Link to="blog-details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet.
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla mi
                laoreet quis amet phasellus....
              </p>
              <ul className="entry-meta meta-item mb-0">
                <li>
                  <div className="post-author blog-hover-img">
                    <Link to="developer-details">
                      <img src={Img_05} alt="Post Author" />{" "}
                      <span> John Gabriel</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          </OwlCarousel>
          {/* Blog Post */}
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <div
              className="view-locations all-views text-center aos aos-init aos-animate"
              data-aos="fade-up"
            >
              <Link to="blog-details" className="btn btn-primary ">
                View all Blogs{" "}
                <span className="location-right">
                  <FiArrowRight className="feather-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}
export default Blogs;
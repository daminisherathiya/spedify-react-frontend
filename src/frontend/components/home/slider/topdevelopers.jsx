import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
import OwlCarousel from "react-owl-carousel";
import Slider from "react-slick";
// Import Images
import { Img_03, Avatar_1, Avatar_2, Avatar_3, Avatar_4, Avatar_5 } from "../../imagepath"
import AOS from "aos";
import "aos/dist/aos.css";


const TopDevelopers = (props) => {

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
	  dots : false,
			nav: true,
			smartSpeed: 2000,
			navText: [
				'<i class="fas fa-chevron-left"></i>',
				'<i class="fas fa-chevron-right"></i>'
			],
			loop: true,
			responsiveClass:true,
	        responsive: {
	          	0: {
	            	items: 1
	          	},
	          	768 : {
	            	items: 3
	          	},
	          	1170: {
	            	items: 4
	          	}
	        }
	    };
  return (
    <>
      {/* Top Instructor */}
      <section className="section developer">
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-sm-12 col-12 mx-auto">
        <div className="section-header aos" data-aos="fade-up">
          <p>Work with talented people at the most affordable price</p>
          <h2 className="header-title">Most Hired Developers</h2>
        </div>
      </div>
    </div>
    <div
      id="developers-slider"
      className="owl-theme developers-slider aos"
      data-aos="fade-up"
    >
      <OwlCarousel  className="owl-theme developers-slider aos" {...options}>
      <div className="freelance-widget">
        <div className="freelance-content">
          <Link data-toggle="modal" to="#rating" className="favourite">
            <i className="fas fa-star" />
          </Link>
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
              <Link to="developer-details">Dran Gonzalez</Link>
            </h3>
            <div className="freelance-specific">React Developer</div>
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star" />
              <span className="average-rating">5.0 (30)</span>
            </div>
            <div className="freelance-tags">
              <Link to="#">
                <span className="badge badge-pill badge-design">
                  Web Design
                </span>
              </Link>
              <Link to="#">
                <span className="badge badge-pill badge-design">UI Design</span>
              </Link>
              <Link to="#">
                <span className="badge badge-pill badge-design">Node Js</span>
              </Link>
            </div>
            <div className="freelance-blk-location">
              <div className="freelancers-price">$25 Hourly</div>
              <div className="freelance-location">
                <i className="fas fa-map-marker-alt me-1" />
                Illinois, USA
              </div>
            </div>
          </div>
        </div>
        <div className="cart-hover">
          <Link to="developer-details" className="btn-cart" tabIndex={-1}>
            View Profile
          </Link>
        </div>
      </div>
      <div className="freelance-widget">
        <div className="freelance-content">
          <Link data-toggle="modal" to="#rating" className="favourite">
            <i className="fas fa-star" />
          </Link>
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
              <Link to="developer-details">Timothy Smith</Link>
            </h3>
            <div className="freelance-specific">PHP Developer</div>
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <span className="average-rating">3.5 (25)</span>
            </div>
            <div className="freelance-tags">
              <Link to="#">
                <span className="badge badge-pill badge-design">
                  Web Design
                </span>
              </Link>
              <Link to="#">
                <span className="badge badge-pill badge-design">UI Design</span>
              </Link>
              <Link to="#">
                <span className="badge badge-pill badge-design">Node Js</span>
              </Link>
            </div>
            <div className="freelance-blk-location">
              <div className="freelancers-price">$25 Hourly</div>
              <div className="freelance-location">
                <i className="fas fa-map-marker-alt me-1" />
                Illinois, USA
              </div>
            </div>
          </div>
        </div>
        <div className="cart-hover">
          <Link to="developer-details" className="btn-cart" tabIndex={-1}>
            View Profile
          </Link>
        </div>
      </div>
      <div className="freelance-widget">
        <div className="freelance-content">
          <Link data-toggle="modal" to="#rating" className="favourite">
            <i className="fas fa-star" />
          </Link>
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
              <Link to="developer-details">Janet Paden</Link>
            </h3>
            <div className="freelance-specific">Graphic Designer</div>
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star" />
              <span className="average-rating">4.1 (30)</span>
            </div>
            <div className="freelance-tags">
              <Link to="#">
                <span className="badge badge-pill badge-design">
                  Web Design
                </span>
              </Link>
              <Link to="#">
                <span className="badge badge-pill badge-design">UI Design</span>
              </Link>
              <Link to="#">
                <span className="badge badge-pill badge-design">Node Js</span>
              </Link>
            </div>
            <div className="freelance-blk-location">
              <div className="freelancers-price">$25 Hourly</div>
              <div className="freelance-location">
                <i className="fas fa-map-marker-alt me-1" />
                Illinois, USA
              </div>
            </div>
          </div>
        </div>
        <div className="cart-hover">
          <Link to="developer-details" className="btn-cart" tabIndex={-1}>
            View Profile
          </Link>
        </div>
      </div>
      <div className="freelance-widget">
        <div className="freelance-content">
          <Link data-toggle="modal" to="#rating" className="favourite">
            <i className="fas fa-star" />
          </Link>
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
              <Link to="developer-details">James Douglas</Link>
            </h3>
            <div className="freelance-specific">iOS Developer</div>
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star" />
              <span className="average-rating">4.3 (31)</span>
            </div>
            <div className="freelance-tags">
              <Link to="#">
                <span className="badge badge-pill badge-design">
                  Web Design
                </span>
              </Link>
              <Link to="#">
                <span className="badge badge-pill badge-design">UI Design</span>
              </Link>
              <Link to="#">
                <span className="badge badge-pill badge-design">Node Js</span>
              </Link>
            </div>
            <div className="freelance-blk-location">
              <div className="freelancers-price">$25 Hourly</div>
              <div className="freelance-location">
                <i className="fas fa-map-marker-alt me-1" />
                Florida, USA
              </div>
            </div>
          </div>
        </div>
        <div className="cart-hover">
          <Link to="developer-details" className="btn-cart" tabIndex={-1}>
            View Profile
          </Link>
        </div>
      </div>
      <div className="freelance-widget">
        <div className="freelance-content">
          <Link data-toggle="modal" to="#rating" className="favourite">
            <i className="fas fa-star" />
          </Link>
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
              <Link to="developer-details">Richard Wilson</Link>
            </h3>
            <div className="freelance-specific">UI/UX Designer</div>
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star" />
              <span className="average-rating">4.7 (32)</span>
            </div>
            <div className="freelance-tags">
              <Link to="#">
                <span className="badge badge-pill badge-design">
                  Web Design
                </span>
              </Link>
              <Link to="#">
                <span className="badge badge-pill badge-design">UI Design</span>
              </Link>
              <Link to="#">
                <span className="badge badge-pill badge-design">Node Js</span>
              </Link>
            </div>
            <div className="freelance-blk-location">
              <div className="freelancers-price">$25 Hourly</div>
              <div className="freelance-location">
                <i className="fas fa-map-marker-alt me-1" />
                Illinois, USA
              </div>
            </div>
          </div>
        </div>
        <div className="cart-hover">
          <Link to="developer-details" className="btn-cart" tabIndex={-1}>
            View Profile
          </Link>
        </div>
      </div>
      <div className="freelance-widget">
        <div className="freelance-content">
          <Link data-toggle="modal" to="#rating" className="favourite">
            <i className="fas fa-star" />
          </Link>
          <div className="freelance-img">
            <Link to="developer-details">
              <img src={Avatar_3}alt="User Image" />
              <span className="verified">
                <i className="fas fa-check-circle" />
              </span>
            </Link>
          </div>
          <div className="freelance-info">
            <h3>
              <Link to="developer-details">Richard Wilson</Link>
            </h3>
            <div className="freelance-specific">UI/UX Designer</div>
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star" />
              <span className="average-rating">4.7 (32)</span>
            </div>
            <div className="freelance-tags">
              <Link to="#">
                <span className="badge badge-pill badge-design">
                  Web Design
                </span>
              </Link>
              <Link to="#">
                <span className="badge badge-pill badge-design">UI Design</span>
              </Link>
              <Link to="#">
                <span className="badge badge-pill badge-design">Node Js</span>
              </Link>
            </div>
            <div className="freelance-blk-location">
              <div className="freelancers-price">$25 Hourly</div>
              <div className="freelance-location">
                <i className="fas fa-map-marker-alt me-1" />
                Alabama, USA
              </div>
            </div>
          </div>
        </div>
        <div className="cart-hover">
          <Link to="developer-details" className="btn-cart" tabIndex={-1}>
            View Profile
          </Link>
        </div>
      </div>
      <div className="freelance-widget">
        <div className="freelance-content">
          <Link data-toggle="modal" to="#rating" className="favourite">
            <i className="fas fa-star" />
          </Link>
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
              <Link to="developer-details">Richard Wilson</Link>
            </h3>
            <div className="freelance-specific">UI/UX Designer</div>
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star" />
              <span className="average-rating">4.7 (32)</span>
            </div>
            <div className="freelance-tags">
              <Link to="#">
                <span className="badge badge-pill badge-design">
                  Web Design
                </span>
              </Link>
              <Link to="#">
                <span className="badge badge-pill badge-design">UI Design</span>
              </Link>
              <Link to="#">
                <span className="badge badge-pill badge-design">Node Js</span>
              </Link>
            </div>
            <div className="freelance-blk-location">
              <div className="freelancers-price">$25 Hourly</div>
              <div className="freelance-location">
                <i className="fas fa-map-marker-alt me-1" />
                Illinois, USA
              </div>
            </div>
          </div>
        </div>
        <div className="cart-hover">
          <Link to="developer-details" className="btn-cart" tabIndex={-1}>
            View Profile
          </Link>
        </div>
      </div>
      <div className="freelance-widget">
        <div className="freelance-content">
          <Link data-toggle="modal" to="#rating" className="favourite">
            <i className="fas fa-star" />
          </Link>
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
              <Link to="developer-details">Richard Wilson</Link>
            </h3>
            <div className="freelance-specific">UI/UX Designer</div>
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star" />
              <span className="average-rating">4.7 (32)</span>
            </div>
            <div className="freelance-tags">
              <Link to="#">
                <span className="badge badge-pill badge-design">
                  Web Design
                </span>
              </Link>
              <Link to="#">
                <span className="badge badge-pill badge-design">UI Design</span>
              </Link>
              <Link to="#">
                <span className="badge badge-pill badge-design">Node Js</span>
              </Link>
            </div>
            <div className="freelance-blk-location">
              <div className="freelancers-price">$25 Hourly</div>
              <div className="freelance-location">
                <i className="fas fa-map-marker-alt me-1" />
                Alabama, USA
              </div>
            </div>
          </div>
        </div>
        <div className="cart-hover">
          <Link to="developer-details" className="btn-cart" tabIndex={-1}>
            View Profile
          </Link>
        </div>
      </div>
      <div className="freelance-widget">
        <div className="freelance-content">
          <Link
            data-toggle="modal"
            to="#rating"
            className="favourite favourited"
          >
            <i className="fas fa-star" />
          </Link>
          <div className="freelance-img">
            <Link to="developer-details">
              <img src={Avatar_3}alt="User Image" />
              <span className="verified">
                <i className="fas fa-check-circle" />
              </span>
            </Link>
          </div>
          <div className="freelance-info">
            <h3>
              <Link to="developer-details">Richard Wilson</Link>
            </h3>
            <div className="freelance-specific">UI/UX Designer</div>
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star" />
              <span className="average-rating">4.8 (55)</span>
            </div>
            <div className="freelance-tags">
              <Link to="#">
                <span className="badge badge-pill badge-design">
                  Web Design
                </span>
              </Link>
              <Link to="#">
                <span className="badge badge-pill badge-design">UI Design</span>
              </Link>
              <Link to="#">
                <span className="badge badge-pill badge-design">Node Js</span>
              </Link>
            </div>
            <div className="freelance-blk-location">
              <div className="freelancers-price">$25 Hourly</div>
              <div className="freelance-location">
                <i className="fas fa-map-marker-alt me-1" />
                Alabama, USA
              </div>
            </div>
          </div>
        </div>
        <div className="cart-hover">
          <Link to="developer-details" className="btn-cart" tabIndex={-1}>
            View Profile
          </Link>
        </div>
        </div>
      <div className="freelance-widget">
        <div className="freelance-content">
          <Link data-toggle="modal" to="#rating" className="favourite">
            <i className="fas fa-star" />
          </Link>
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
              <Link to="developer-details">Richard Wilson</Link>
            </h3>
            <div className="freelance-specific">UI/UX Designer</div>
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star" />
              <span className="average-rating">5.0 (4)</span>
            </div>
            <div className="freelance-tags">
              <Link to="#">
                <span className="badge badge-pill badge-design">
                  Web Design
                </span>
              </Link>
              <Link to="#">
                <span className="badge badge-pill badge-design">UI Design</span>
              </Link>
              <Link to="#">
                <span className="badge badge-pill badge-design">Node Js</span>
              </Link>
            </div>
            <div className="freelance-blk-location">
              <div className="freelancers-price">$25 Hourly</div>
              <div className="freelance-location">
                <i className="fas fa-map-marker-alt me-1" />
                Alabama, USA
              </div>
            </div>
          </div>
        </div>

        <div className="cart-hover">
          <Link to="developer-details" className="btn-cart" tabIndex={-1}>
            View Profile
          </Link>
        </div>
      </div>
      </OwlCarousel>
  </div>
  </div>
</section>
</>
  )
}
export { TopDevelopers };
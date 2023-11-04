import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Images
import { Img_02, Img_03, Img_05, quote } from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const TopReviews1 = (props) => {

    //Aos
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true
        });

    }, []);


    var settings = {
        items: 5,
        startposition:0,
        margin: 30,
        dots: true,
        nav: true,
        smartSpeed: 2000,
        // navText: [
        //     '<i className="fas fa-arrow-left"></i>',
        //     '<i className="fas fa-arrow-right"></i>'
        // ],
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1170: {
                items: 1
            }

        }
    };
    return (
        <section className="section review-people">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div
                            className="section-header section-header-three text-center aos"
                            data-aos="fade-up"
                        >
                            <h2 className="header-title">Top Reviews</h2>
                            <p>People love to come again for Spedify</p>
                        </div>
                    </div>
                </div>
                <div
                    id="review-three-slider"
                    className="owl-theme trend-slider aos"
                    data-aos="fade-up"
                >
                    <OwlCarousel {...settings} id="testimonial-slider-three" className="owl-carousel owl-theme testimonial-slider-three aos" data-aos="fade-up">
                        <div className="review-love-group">
                            <div className="quote-love-img">
                                <img className="img-fluid" src={quote} alt="" />
                            </div>
                            <p className="review-passage">
                                “ Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla mi
                                laoreet quis amet phasellus. Enim orci lacus quam mauris nunc
                                ultrices duis. Ornare leo mi aenean egestas montes cras. Egestas
                                erat viverra scelerisque bibendum. “
                            </p>
                            <div className="review-love-list">
                                <div className="review-profile-blk">
                                    <div className="reviw-profile-img">
                                        <Link to="review">
                                            <img
                                                src={Img_02}
                                                className="me-2"
                                                alt="Post Author"
                                            />
                                        </Link>
                                    </div>
                                    <div className="review-name-blk">
                                        <h6>
                                            <Link to="review">Alonso Mann</Link>
                                        </h6>
                                        <p>Wordpress developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="review-love-group">
                            <div className="quote-love-img">
                                <img className="img-fluid" src={quote} alt="" />
                            </div>
                            <p className="review-passage">
                                “ Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla mi
                                laoreet quis amet phasellus. Enim orci lacus quam mauris nunc
                                ultrices duis. Ornare leo mi aenean egestas montes cras. Egestas
                                erat viverra scelerisque bibendum. “
                            </p>
                            <div className="review-love-list">
                                <div className="review-profile-blk">
                                    <div className="reviw-profile-img">
                                        <Link to="review">
                                            <img
                                                src={Img_03}
                                                className="me-2"
                                                alt="Post Author"
                                            />
                                        </Link>
                                    </div>
                                    <div className="review-name-blk">
                                        <h6>
                                            <Link to="review">Karen More</Link>
                                        </h6>
                                        <p>SEO Specialist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="review-love-group">
                            <div className="quote-love-img">
                                <img className="img-fluid" src={quote} alt="" />
                            </div>
                            <p className="review-passage">
                                “ Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla mi
                                laoreet quis amet phasellus. Enim orci lacus quam mauris nunc
                                ultrices duis. Ornare leo mi aenean egestas montes cras. Egestas
                                erat viverra scelerisque bibendum. “
                            </p>
                            <div className="review-love-list">
                                <div className="review-profile-blk">
                                    <div className="reviw-profile-img">
                                        <Link to="review">
                                            <img
                                                src={Img_05}
                                                className="me-2"
                                                alt="Post Author"
                                            />
                                        </Link>
                                    </div>
                                    <div className="review-name-blk">
                                        <h6>
                                            <Link to="review">Ramen Daren</Link>
                                        </h6>
                                        <p>Wordpress developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}
export default TopReviews1;
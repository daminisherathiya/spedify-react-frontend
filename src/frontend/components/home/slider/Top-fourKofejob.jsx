import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
import Slider from "react-slick";
// Import Images
import { Avatar_1, Avatar_2, Avatar_3, Avatar_4, Avatar_5, quote, quote_01 } from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
const TopReviewFour = (props) => {

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true
        });

    }, []);

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    //i dont seem to need this
    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);
    return (
        <>
            <section className="section review-four">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-12 mx-auto">
                            <div
                                className="section-header section-header-four text-center aos"
                                data-aos="fade-up"
                            >
                                <div>
                                    <h2 className="header-title">Top Reviews</h2>
                                    <p>People love to come again for Spedify</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Slider className=" slider say-about slider-for aos " data-aos="fade-up" asNavFor={nav2} ref={slider1}>
                        <div>
                            <div className="review-love-group">
                                <div className="quote-love-img">
                                    <img className="img-fluid" src={quote} alt="" />
                                </div>
                                <p className="review-passage">
                                    “ Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla
                                    mi laoreet quis amet phasellus. Enim orci lacus quam mauris nunc
                                    ultrices duis. Ornare leo mi aenean egestas montes cras. Egestas
                                    erat viverra scelerisque bibendum. “
                                </p>
                                <div className="say-name-blk text-center">
                                    <h6>Ramen Daren</h6>
                                    <p>Wordpress developer</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="review-love-group">
                                <div className="quote-love-img">
                                    <img className="img-fluid" src={quote} alt="" />
                                </div>
                                <p className="review-passage">
                                    “ Vitae amet cras nulla mi laoreet quis amet phasellus. Enim
                                    orci lacus quam mauris nunc ultrices duis. Ornare leo mi aenean
                                    egestas montes cras.Vitae amet cras nulla mi laoreet quis amet
                                    phasellus. Enim orci lacus quam mauris nunc ultrices duis.
                                    Ornare leo mi aenean egestas montes cras. Egestas erat viverra
                                    scelerisque bibendum. “
                                </p>
                                <div className="say-name-blk text-center">
                                    <h6>Ramen Daren</h6>
                                    <p>Wordpress developer</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="review-love-group">
                                <div className="quote-love-img">
                                    <img className="img-fluid" src={quote} alt="" />
                                </div>
                                <p className="review-passage">
                                    “ Egestas erat viverra scelerisque bibendum.Lorem ipsum dolor
                                    sit amet consectetur. Vitae amet cras nulla mi laoreet quis amet
                                    phasellus. Enim orci lacus quam mauris nunc ultrices duis.
                                    Ornare leo mi aenean egestas montes cras. Egestas erat viverra
                                    scelerisque bibendum. “
                                </p>
                                <div className="say-name-blk text-center">
                                    <h6>Ramen Daren</h6>
                                    <p>Wordpress developer</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="review-love-group">
                                <div className="quote-love-img">
                                    <img className="img-fluid" src={quote} alt="" />
                                </div>
                                <p className="review-passage">
                                    “ Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla
                                    mi laoreet quis amet phasellus. Enim orci lacus quam mauris nunc
                                    ultrices duis. Ornare leo mi aenean egestas montes cras. Egestas
                                    erat viverra scelerisque bibendum. “
                                </p>
                                <div className="say-name-blk text-center">
                                    <h6>Ramen Daren</h6>
                                    <p>Wordpress developer</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="review-love-group">
                                <div className="quote-love-img">
                                    <img className="img-fluid" src={quote} alt="" />
                                </div>
                                <p className="review-passage">
                                    “ Egestas erat viverra scelerisque bibendum. Vitae amet cras
                                    nulla mi laoreet quis amet phasellus. Enim orci lacus quam
                                    mauris nunc ultrices duis. Ornare leo mi aenean egestas montes
                                    cras. Egestas erat viverra scelerisque bibendum. “
                                </p>
                                <div className="say-name-blk text-center">
                                    <h6>Ramen Daren</h6>
                                    <p>Wordpress developer</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <Slider
                    asNavFor={nav1}
                    ref={slider2}
                    slidesToShow={3}
                    slidesToScroll={1}
                    arrows={false}
                    swipeToSlide={true}
                    centerMode = {true}
                    centerPadding = '10px'
                    focusOnSelect={true} className=" slider client-img slider-nav aos " data-aos="fade-up">
                    <div className="testimonial-thumb">
                        <img src={Avatar_1} alt="" />
                    </div>
                    <div className="testimonial-thumb">
                        <img src={Avatar_2} alt="" />
                    </div>
                    <div className="testimonial-thumb">
                        <img src={Avatar_3} alt="" />
                    </div>
                    <div className="testimonial-thumb">
                        <img src={Avatar_4} alt="" />
                    </div>
                    <div className="testimonial-thumb">
                        <img src={Avatar_5} alt="" />
                    </div>
               </Slider>
        </section >
    </>
      )
}
export default TopReviewFour;
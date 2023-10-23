import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Images
import { Blog_15, Blog_16, Blog_17, Cal_icon, Production_icon } from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FiArrowRight } from "react-icons/fi";

const OurBlogFour = (props) => {

    //Aos
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true
        });

    }, []);


    const options = {
        items: 6,
        startposition:0,
        margin: 30,
        dots: false,
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
                items: 2
            },
            1170: {
                items: 3
            }
        }
    };
    return (
    <>
        {/* Blog */ }
        <section className="section blog-article">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12 mx-auto">
                        <div
                            className="section-header section-header-four section-locate aos"
                            data-aos="fade-up"
                        >
                            <div>
                                <h2 className="header-title">Our Blog</h2>
                                <p>Read Our Article To Get Tricks </p>
                            </div>
                            <div className="view-locations">
                                <Link to="blog-details" className="btn btn-primary ">
                                    View all Articles{" "}
                                    <span className="location-right">
                                        <FiArrowRight className="feather-arrow-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="blog-article"
                    className="owl-theme popular-slider developers-slider aos"
                    data-aos="fade-up"
                >
                    <OwlCarousel className="owl-theme owl-theme popular-slider developers-slider aos"
                    data-aos="fade-up" {...options}>
                        <div className="blog-article-group">
                            <div className="blog-image">
                                <Link to="blog-details">
                                    <img
                                        className="img-fluid"
                                        src={Blog_15}
                                        alt="Post Image"
                                    />
                                </Link>
                                <div className="article-Production">
                                    <span>
                                        <img
                                            className="img-fluid me-1"
                                            src={Production_icon}
                                            alt=""
                                        />
                                        Production
                                    </span>
                                </div>
                                <div className="article-blog-content">
                                    <span>
                                        <img
                                            className="img-fluid me-1"
                                            src={Cal_icon}
                                            alt=""
                                        />
                                        13, Dec2022
                                    </span>
                                    <h4>
                                        <Link to="blog-details">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Amet.
                                        </Link>
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla
                                        mi laoreet quis amet phasellus....
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="blog-article-group">
                            <div className="blog-image">
                                <Link to="blog-details">
                                    <img
                                        className="img-fluid"
                                        src={Blog_16}
                                        alt="Post Image"
                                    />
                                </Link>
                                <div className="article-Production">
                                    <span>
                                        <img
                                            className="img-fluid me-1"
                                            src={Production_icon}
                                            alt=""
                                        />
                                        Jobs
                                    </span>
                                </div>
                                <div className="article-blog-content">
                                    <span>
                                        <img
                                            className="img-fluid me-1"
                                            src={Cal_icon}
                                            alt=""
                                        />
                                        12, Dec2022
                                    </span>
                                    <h4>
                                        <Link to="blog-details">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Amet.
                                        </Link>
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla
                                        mi laoreet quis amet phasellus....
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="blog-article-group">
                            <div className="blog-image">
                                <Link to="blog-details">
                                    <img
                                        className="img-fluid"
                                        src={Blog_17}
                                        alt="Post Image"
                                    />
                                </Link>
                                <div className="article-Production">
                                    <span>
                                        <img
                                            className="img-fluid me-1"
                                            src={Production_icon}
                                            alt=""
                                        />
                                        Production
                                    </span>
                                </div>
                                <div className="article-blog-content">
                                    <span>
                                        <img
                                            className="img-fluid me-1"
                                            src={Cal_icon}
                                            alt=""
                                        />
                                        10, Dec2022
                                    </span>
                                    <h4>
                                        <Link to="blog-details">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Amet.
                                        </Link>
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla
                                        mi laoreet quis amet phasellus....
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="blog-article-group">
                            <div className="blog-image">
                                <Link to="blog-details">
                                    <img
                                        className="img-fluid"
                                        src={Blog_16}
                                        alt="Post Image"
                                    />
                                </Link>
                                <div className="article-Production">
                                    <span>
                                        <img
                                            className="img-fluid me-1"
                                            src={Production_icon}
                                            alt=""
                                        />
                                        Jobs
                                    </span>
                                </div>
                                <div className="article-blog-content">
                                    <span>
                                        <img
                                            className="img-fluid me-1"
                                            src={Cal_icon}
                                            alt=""
                                        />
                                        12, Dec2022
                                    </span>
                                    <h4>
                                        <Link to="blog-details">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Amet.
                                        </Link>
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla
                                        mi laoreet quis amet phasellus....
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="blog-article-group">
                            <div className="blog-image">
                                <Link to="blog-details">
                                    <img
                                        className="img-fluid"
                                        src={Blog_17}
                                        alt="Post Image"
                                    />
                                </Link>
                                <div className="article-Production">
                                    <span>
                                        <img
                                            className="img-fluid me-1"
                                            src={Production_icon}
                                            alt=""
                                        />
                                        Production
                                    </span>
                                </div>
                                <div className="article-blog-content">
                                    <span>
                                        <img
                                            className="img-fluid me-1"
                                            src={Cal_icon}
                                            alt=""
                                        />
                                        10, Dec2022
                                    </span>
                                    <h4>
                                        <Link to="blog-details">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Amet.
                                        </Link>
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla
                                        mi laoreet quis amet phasellus....
                                    </p>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    {/* Blog */ }
    </>
    )
}
export default OurBlogFour;
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Blog_12, Blog_13, Blog_14 } from '../../imagepath';
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedBlog = () => {
    //Aos

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true
        });

    }, []);

    const options = {
        items: 5,
        startPosition: 0,
        margin: 25,
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
                items: 1
            },
            1170: {
                items: 3
            }
        }
    };


    return (
        <>
            {/* News */}
            <section className="section blog-tricks">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div
                                className="section-header section-header-two text-center aos"
                                data-aos="fade-up"
                            >
                                <h2 className="header-title">
                                    Featured <span>Blogs</span>
                                </h2>
                                <p>Read Our Article To Get Tricks </p>
                            </div>
                        </div>
                    </div>
                    <div
                        id="blog-slider"
                        className="owl-theme blog-slider aos"
                        data-aos="fade-up"
                    >
                        <OwlCarousel className="owl-theme active" {...options}>
                            <div className="grid-blog blog-two aos" data-aos="fade-up">
                                <div className="blog-image">
                                    <Link to="blog-details">
                                        <img
                                            className="img-fluid"
                                            src={Blog_12}
                                            alt="Post Image"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <h3 className="blog-title mt-0">
                                        <Link to="blog-details">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet.
                                        </Link>
                                    </h3>
                                    <div className="blog-read">
                                        <p>
                                            <i className="fas fa-calendar-alt" /> 4 Oct 2021
                                        </p>
                                        <Link to="blog-details">
                                            Read More <i className="fas fa-arrow-right ms-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-blog blog-two aos" data-aos="fade-up">
                                <div className="blog-image">
                                    <Link to="blog-details">
                                        <img
                                            className="img-fluid"
                                            src={Blog_13}
                                            alt="Post Image"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <h3 className="blog-title mt-0">
                                        <Link to="blog-details">Your next job starts right here</Link>
                                    </h3>
                                    <div className="blog-read">
                                        <p>
                                            <i className="fas fa-calendar-alt" /> 10 Oct 2021
                                        </p>
                                        <Link to="blog-details">
                                            Read More <i className="fas fa-arrow-right ms-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-blog blog-two aos" data-aos="fade-up">
                                <div className="blog-image">
                                    <Link to="blog-details">
                                        <img
                                            className="img-fluid"
                                            src={Blog_14}
                                            alt="Post Image"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <h3 className="blog-title mt-0">
                                        <Link to="blog-details">
                                            consectetur adipiscing elit. Amet.Lorem ipsum dolor sit amet
                                        </Link>
                                    </h3>
                                    <div className="blog-read">
                                        <p>
                                            <i className="fas fa-calendar-alt" /> 3 Jan 2021
                                        </p>
                                        <Link to="blog-details">
                                            Read More <i className="fas fa-arrow-right ms-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-blog blog-two aos" data-aos="fade-up">
                                <div className="blog-image">
                                    <Link to="blog-details">
                                        <img
                                            className="img-fluid"
                                            src={Blog_13}
                                            alt="Post Image"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <h3 className="blog-title mt-0">
                                        <Link to="blog-details">Your next job starts right here</Link>
                                    </h3>
                                    <div className="blog-read">
                                        <p>
                                            <i className="fas fa-calendar-alt" /> 7 Oct 2023
                                        </p>
                                        <Link to="blog-details">
                                            Read More <i className="fas fa-arrow-right ms-1" />
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </OwlCarousel>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="more-project text-center aos" data-aos="fade-up">
                                <Link
                                    to="blog-details"
                                    className="btn btn-primary all-article"
                                >
                                    View all articles
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* / News */}
        </>
    )
}
export default FeaturedBlog;
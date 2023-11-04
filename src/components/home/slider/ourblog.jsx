import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Images
import { Blog_18, Blog_19, Blog_20 } from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FiGrid } from "react-icons/fi";

const OurBlog = (props) => {

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
	        dots : false,
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
        <section className="section blog-tricks-five">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12 mx-auto">
                        <div className="section-header section-header-five text-center aos" data-aos="fade-up">
                            <h2 className="header-title">Our Blog</h2>
                            <p>Read Our Article To Get Tricks </p>
                        </div>
                    </div>
                    <div 
                    id="blog-slider" className="owl-theme blog-trick-five blog-slider aos" data-aos="fade-up"
                    >
                    <OwlCarousel className="owl-theme blog-trick-five blog-slider aos" data-aos="fade-up" {...options}>
                        <div className="grid-blog blog-five aos" data-aos="fade-up">
                            <div className="blog-image">
                                <Link to="blog-details">
                                    <img
                                        className="img-fluid"
                                        src={Blog_20}
                                        alt="Post Image"
                                    />
                                </Link>
                            </div>
                            <div className="blog-content">
                                <div className="blog-trick-read">
                                    <p>15, December 2022</p>
                                    <Link to="blog-details">
                                        <FiGrid className="feather-grid me-1" />
                                        Resume Building
                                    </Link>
                                </div>
                                <h3 className="blog-title mt-0">
                                    <Link to="blog-details">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet.
                                    </Link>
                                </h3>
                                <p className="blog-reead mb-0">
                                    Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla mi
                                    laoreet quis amet phasellus....
                                </p>
                            </div>
                        </div>
                        <div className="grid-blog blog-five aos" data-aos="fade-up">
                            <div className="blog-image">
                                <Link to="blog-details">
                                    <img
                                        className="img-fluid"
                                        src={Blog_18}
                                        alt="Post Image"
                                    />
                                </Link>
                            </div>
                            <div className="blog-content">
                                <div className="blog-trick-read">
                                    <p>02, December 2020</p>
                                    <Link to="blog-details">
                                        <FiGrid className="feather-grid me-1" />
                                        Resume Building
                                    </Link>
                                </div>
                                <h3 className="blog-title mt-0">
                                    <Link to="blog-details">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet.
                                    </Link>
                                </h3>
                                <p className="blog-reead mb-0">
                                    Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla mi
                                    laoreet quis amet phasellus....
                                </p>
                            </div>
                        </div>
                        <div className="grid-blog blog-five aos" data-aos="fade-up">
                            <div className="blog-image">
                                <Link to="blog-details">
                                    <img
                                        className="img-fluid"
                                        src={Blog_19}
                                        alt="Post Image"
                                    />
                                </Link>
                            </div>
                            <div className="blog-content">
                                <div className="blog-trick-read">
                                    <p>20, October 2023</p>
                                    <Link to="blog-details">
                                        <FiGrid className="feather-grid me-1" />
                                        Resume Building
                                    </Link>
                                </div>
                                <h3 className="blog-title mt-0">
                                    <Link to="blog-details">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet.
                                    </Link>
                                </h3>
                                <p className="blog-reead mb-0">
                                    Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla mi
                                    laoreet quis amet phasellus....
                                </p>
                            </div>
                        </div>
                        <div className="grid-blog blog-five aos" data-aos="fade-up">
                            <div className="blog-image">
                                <Link to="blog-details">
                                    <img
                                        className="img-fluid"
                                        src={Blog_18}
                                        alt="Post Image"
                                    />
                                </Link>
                            </div>
                            <div className="blog-content">
                                <div className="blog-trick-read">
                                    <p>10, December 2022</p>
                                    <Link to="blog-details">
                                        <i className="feather-grid me-1" />
                                        Resume Building
                                    </Link>
                                </div>
                                <h3 className="blog-title mt-0">
                                    <Link to="blog-details">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet.
                                    </Link>
                                </h3>
                                <p className="blog-reead mb-0">
                                    Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla mi
                                    laoreet quis amet phasellus....
                                </p>
                            </div>
                        </div>
                    </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OurBlog;
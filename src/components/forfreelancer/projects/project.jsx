import React from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider";
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
// Import Images
import {
    company_img1, company_img2, company_img3, company_img4, company_img5, company_img6,
    company_img7, company_img8, company_img9, company_img10, home_icon
} from "../../imagepath";

const Projects = (props) => {
    const options = [
        { id: 1, text: 'Select Category', },
        { id: 2, text: 'Developer', },
        { id: 3, text: 'UI Developer', },
        { id: 4, text: 'React Developer', },
        { id: 5, text: '.Net Developer', },
    ]
    const options1 = [
        { id: 1, text: 'Country, City, Zipcode', },
        { id: 2, text: 'UK', },
        { id: 3, text: 'London', },
    ];
    const options2 = [
        { id: 1, text: 'Select Projects', },
        { id: 2, text: 'Node projects', },
        { id: 3, text: 'UI projects', },
      ];
      const options3 = [
        { id: 1, text: 'Hourly Rate', },
        { id: 2, text: 'Full Day Rate', },
        { id: 3, text: 'Half Day Rate', },
      ];
      const options4 = [
        { id: 1, text: 'USD', },
        { id: 2, text: 'Euro', },
      ];

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
                                        <li className="breadcrumb-item"><Link to="#"><img src={home_icon} alt="Post Author" /> Home</Link></li>
                                        <li className="breadcrumb-item" aria-current="page">Projects</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadcrumb */}
            {/* Page Content */}
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
                            {/* Search Filter */}
                            <StickyBox offsetTop={20} offsetBottom={20}>
                                <div className="card search-filter">
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 className="card-title mb-0">FILTERS</h4>
                                        <Link to="">Clear All</Link>
                                    </div>
                                    <div className="card-body">
                                        <div className="filter-widget">
                                            <h4>Category</h4>
                                            <div className="form-group">
                                                <Select2
                                                    className="select form-control "
                                                    data={options}
                                                    options={{
                                                        placeholder: 'Select Category',
                                                    }} />
                                            </div>
                                        </div>
                                        <div className="filter-widget">
                                            <h4>Location</h4>
                                            <div className="form-group">
                                            <Select2
                                                    className="select form-control "
                                                    data={options1}
                                                    options={{
                                                        placeholder: 'Country, City, Zipcode',
                                                    }} />
                                            </div>
                                        </div>
                                        <div className="filter-widget">
                                            <h4>Completed Projects</h4>
                                            <div className="form-group">
                                            <Select2
                                                    className="select form-control "
                                                    data={options2}
                                                    options={{
                                                        placeholder: 'Select Projects',
                                                    }} />
                                            </div>
                                        </div>
                                        <div className="filter-widget">
                                            <h4>Pricing Type</h4>
                                            <div className="form-group">
                                            <Select2
                                                    className="select form-control "
                                                    data={options3}
                                                    options={{
                                                        placeholder: 'Hourly Rate',
                                                    }} />
                                            </div>
                                        </div>
                                        <div className="filter-widget">
                                            <h4>Add Skills</h4>
                                            <div className="form-group">
                                                <span className="badge badge-pill badge-skill">
                                                    + Web Design
                                                </span>
                                                <span className="badge badge-pill badge-skill">
                                                    + UI Design
                                                </span>
                                                <span className="badge badge-pill badge-skill">
                                                    + Node Js
                                                </span>
                                                <span className="badge badge-pill badge-skill">
                                                    + Angular
                                                </span>
                                                <span className="badge badge-pill badge-skill">
                                                    + Wordpress
                                                </span>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="filter-widget">
                                            <h4>Avalability</h4>
                                            <div>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="select_time" defaultChecked />
                                                    <span className="checkmark" /> Hourly
                                                </label>
                                            </div>
                                            <div>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="select_time" />
                                                    <span className="checkmark" /> Part Time
                                                </label>
                                            </div>
                                            <div>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="select_time" />
                                                    <span className="checkmark" /> Full Time
                                                </label>
                                            </div>
                                        </div>
                                        <div className="filter-widget">
                                            <h4>Experience</h4>
                                            <div>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="select_specialist" />
                                                    <span className="checkmark" /> 0-1 years
                                                </label>
                                            </div>
                                            <div>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="select_exp" defaultChecked />
                                                    <span className="checkmark" /> 2-5 years
                                                </label>
                                            </div>
                                            <div>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="select_exp" />
                                                    <span className="checkmark" /> 5-8 years
                                                </label>
                                            </div>
                                            <div>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="select_exp" />
                                                    <span className="checkmark" /> 9-12 years
                                                </label>
                                            </div>
                                            <div>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="select_exp" />
                                                    <span className="checkmark" /> Mastered
                                                </label>
                                            </div>
                                            <div>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="select_exp" />
                                                    <span className="checkmark" /> Professional
                                                </label>
                                            </div>
                                        </div>
                                        <div className="filter-widget">
                                            <h4>Hourly Rate</h4>
                                            <Nouislider range={{ min: 0, max: 50 }} start={[20, 80]} connect />
                                            <div id="slider-range" />
                                            <div className="row slider-labels">
                                                <div className="col-xs-12 caption">
                                                    <span id="slider-range-value1" />0 -{" "}<span id="slider-range-value2" />50
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <form>
                                                        <input type="hidden" name="min-value" defaultValue="" />
                                                        <input type="hidden" name="max-value" defaultValue="" />
                                                    </form>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="filter-widget">
                                            <h4>Keywords</h4>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Keywords"
                                                />
                                            </div>
                                        </div>
                                        <div className="filter-widget">
                                            <h4>Currency</h4>
                                            <div className="form-group">
                                            <Select2
                                                    className="select form-control "
                                                    data={options4}
                                                    options={{
                                                        placeholder: 'USD',
                                                    }} />
                                            </div>
                                        </div>
                                        <div className="btn-search">
                                            <button type="button" className="btn btn-block">
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </StickyBox>
                            {/* /Search Filter */}
                        </div>
                        <div className="col-md-12 col-lg-8 col-xl-9">
                            <div className="sort-tab">
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="d-flex align-items-center">
                                            <div className="freelance-view">
                                                <h4>Showing 1 - 12 of 455</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="d-flex justify-content-sm-end">
                                            <div className="sort-by">
                                                <select className="custom-select">
                                                    <option>Relevance</option>
                                                    <option>Rating</option>
                                                    <option>Popular</option>
                                                    <option>Latest</option>
                                                    <option>Free</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bootstrap-tags text-start pl-0">
                                <span className="badge badge-pill badge-skills">
                                    UI/UX Developer{" "}
                                    <span className="tag-close" data-role="remove">
                                        <i className="fas fa-times" />
                                    </span>
                                </span>
                                <span className="badge badge-pill badge-skills">
                                    USA{" "}
                                    <span className="tag-close" data-role="remove">
                                        <i className="fas fa-times" />
                                    </span>
                                </span>
                                <span className="badge badge-pill badge-skills">
                                    Hourly{" "}
                                    <span className="tag-close" data-role="remove">
                                        <i className="fas fa-times" />
                                    </span>
                                </span>
                                <span className="badge badge-pill badge-skills">
                                    0-1 years{" "}
                                    <span className="tag-close" data-role="remove">
                                        <i className="fas fa-times" />
                                    </span>
                                </span>
                                <span className="badge badge-pill badge-skills">
                                    USD{" "}
                                    <span className="tag-close" data-role="remove">
                                        <i className="fas fa-times" />
                                    </span>
                                </span>
                            </div>
                            <div className="row">
                                {/* Project Content */}
                                <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                        <div className="freelance-content">
                                            <Link
                                                data-bs-toggle="modal"
                                                to="#rating"
                                                className="favourite"
                                            >
                                                <i className="fas fa-star" />
                                            </Link>
                                            <div className="author-heading">
                                                <div className="profile-img">
                                                    <Link to="#">
                                                        <img src={company_img1} alt="author" />
                                                    </Link>
                                                </div>
                                                <div className="profile-name">
                                                    <div className="author-location">
                                                        Amaze Tech{" "}
                                                        <i className="fas fa-check-circle text-success verified" />
                                                    </div>
                                                </div>
                                                <div className="freelance-info">
                                                    <h3>
                                                        <Link to="#">UI/UX Developer</Link>
                                                    </h3>
                                                    <div className="freelance-location mb-1">
                                                        <i className="fas fa-clock" /> Posted Just Now
                                                    </div>
                                                    <div className="freelance-location">
                                                        <i className="fas fa-map-marker-alt me-1" />
                                                        Georgia, USA
                                                    </div>
                                                </div>
                                                <div className="freelance-tags">
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            After Effects
                                                        </span>
                                                    </Link>
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            Illustrator
                                                        </span>
                                                    </Link>
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            HTML
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="freelancers-price">$40-$500</div>
                                            </div>
                                            <div className="counter-stats">
                                                <ul>
                                                    <li>
                                                        <h3 className="counter-value">4 Days Left</h3>
                                                        <h5>Expiry</h5>
                                                    </li>
                                                    <li>
                                                        <h3 className="counter-value">15</h3>
                                                        <h5>Proposals</h5>
                                                    </li>
                                                    <li>
                                                        <h3 className="counter-value">
                                                            <span className="jobtype">Full Time</span>
                                                        </h3>
                                                        <h5>Job Type</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="cart-hover">
                                            <Link
                                                to="/project-details"
                                                className="btn-cart"
                                                tabIndex={-1}
                                            >
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                        <div className="freelance-content">
                                            <Link
                                                data-bs-toggle="modal"
                                                to="#rating"
                                                className="favourite"
                                            >
                                                <i className="fas fa-star" />
                                            </Link>
                                            <div className="author-heading">
                                                <div className="profile-img">
                                                    <Link to="#">
                                                        <img src={company_img2} alt="author" />
                                                    </Link>
                                                </div>
                                                <div className="profile-name">
                                                    <div className="author-location">
                                                        Park INC{" "}
                                                        <i className="fas fa-check-circle text-success verified" />
                                                    </div>
                                                </div>
                                                <div className="freelance-info">
                                                    <h3>
                                                        <Link to="#">PHP Developer</Link>
                                                    </h3>
                                                    <div className="freelance-location mb-1">
                                                        <i className="fas fa-clock" /> Posted 1 min ago
                                                    </div>
                                                    <div className="freelance-location">
                                                        <i className="fas fa-map-marker-alt me-1" />
                                                        California, USA
                                                    </div>
                                                </div>
                                                <div className="freelance-tags">
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            After Effects
                                                        </span>
                                                    </Link>
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            Illustrator
                                                        </span>
                                                    </Link>
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            HTML
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="freelancers-price">$30-$300</div>
                                            </div>
                                            <div className="counter-stats">
                                                <ul>
                                                    <li>
                                                        <h3 className="counter-value">5 Days Left</h3>
                                                        <h5>Expiry</h5>
                                                    </li>
                                                    <li>
                                                        <h3 className="counter-value">22</h3>
                                                        <h5>Proposals</h5>
                                                    </li>
                                                    <li>
                                                        <h3 className="counter-value">
                                                            <span className="jobtype">Full Time</span>
                                                        </h3>
                                                        <h5>Job Type</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="cart-hover">
                                            <Link
                                                to="/project-details"
                                                className="btn-cart"
                                                tabIndex={-1}
                                            >
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                        <div className="freelance-content">
                                            <Link
                                                data-bs-toggle="modal"
                                                to="#rating"
                                                className="favourite"
                                            >
                                                <i className="fas fa-star" />
                                            </Link>
                                            <div className="author-heading">
                                                <div className="profile-img">
                                                    <Link to="#">
                                                        <img src={company_img3} alt="author" />
                                                    </Link>
                                                </div>
                                                <div className="profile-name">
                                                    <div className="author-location">
                                                        Tech Zone{" "}
                                                        <i className="fas fa-check-circle text-success verified" />
                                                    </div>
                                                </div>
                                                <div className="freelance-info">
                                                    <h3>
                                                        <Link to="#">Graphic Designer</Link>
                                                    </h3>
                                                    <div className="freelance-location mb-1">
                                                        <i className="fas fa-clock" /> Posted 30 mins ago
                                                    </div>
                                                    <div className="freelance-location">
                                                        <i className="fas fa-map-marker-alt me-1" />
                                                        New York, USA
                                                    </div>
                                                </div>
                                                <div className="freelance-tags">
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            After Effects
                                                        </span>
                                                    </Link>
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            Illustrator
                                                        </span>
                                                    </Link>
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            HTML
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="freelancers-price">$15-$500</div>
                                            </div>
                                            <div className="counter-stats">
                                                <ul>
                                                    <li>
                                                        <h3 className="counter-value">8 Days Left</h3>
                                                        <h5>Expiry</h5>
                                                    </li>
                                                    <li>
                                                        <h3 className="counter-value">30</h3>
                                                        <h5>Proposals</h5>
                                                    </li>
                                                    <li>
                                                        <h3 className="counter-value">
                                                            <span className="jobtype">Full Time</span>
                                                        </h3>
                                                        <h5>Job Type</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="cart-hover">
                                            <Link
                                                to="/project-details"
                                                className="btn-cart"
                                                tabIndex={-1}
                                            >
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                        <div className="freelance-content">
                                            <Link
                                                data-bs-toggle="modal"
                                                to="#rating"
                                                className="favourite"
                                            >
                                                <i className="fas fa-star" />
                                            </Link>
                                            <div className="author-heading">
                                                <div className="profile-img">
                                                    <Link to="#">
                                                        <img src={company_img4} alt="author" />
                                                    </Link>
                                                </div>
                                                <div className="profile-name">
                                                    <div className="author-location">
                                                        ABC Software{" "}
                                                        <i className="fas fa-check-circle text-success verified" />
                                                    </div>
                                                </div>
                                                <div className="freelance-info">
                                                    <h3>
                                                        <Link to="#">iOS Developer</Link>
                                                    </h3>
                                                    <div className="freelance-location mb-1">
                                                        <i className="fas fa-clock" /> Posted 1 day ago
                                                    </div>
                                                    <div className="freelance-location">
                                                        <i className="fas fa-map-marker-alt me-1" />
                                                        Florida, USA
                                                    </div>
                                                </div>
                                                <div className="freelance-tags">
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            After Effects
                                                        </span>
                                                    </Link>
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            Illustrator
                                                        </span>
                                                    </Link>
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            HTML
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="freelancers-price">$25-$250</div>
                                            </div>
                                            <div className="counter-stats">
                                                <ul>
                                                    <li>
                                                        <h3 className="counter-value">1 Days Left</h3>
                                                        <h5>Expiry</h5>
                                                    </li>
                                                    <li>
                                                        <h3 className="counter-value">16</h3>
                                                        <h5>Proposals</h5>
                                                    </li>
                                                    <li>
                                                        <h3 className="counter-value">
                                                            <span className="jobtype">Full Time</span>
                                                        </h3>
                                                        <h5>Job Type</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="cart-hover">
                                            <Link
                                                to="/project-details"
                                                className="btn-cart"
                                                tabIndex={-1}
                                            >
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                        <div className="freelance-content">
                                            <Link
                                                data-bs-toggle="modal"
                                                to="#rating"
                                                className="favourite"
                                            >
                                                <i className="fas fa-star" />
                                            </Link>
                                            <div className="author-heading">
                                                <div className="profile-img">
                                                    <Link to="#">
                                                        <img src={company_img5} alt="author" />
                                                    </Link>
                                                </div>
                                                <div className="profile-name">
                                                    <div className="author-location">
                                                        Host Technologies{" "}
                                                        <i className="fas fa-check-circle text-success verified" />
                                                    </div>
                                                </div>
                                                <div className="freelance-info">
                                                    <h3>
                                                        <Link to="#">SEO Developer</Link>
                                                    </h3>
                                                    <div className="freelance-location mb-1">
                                                        <i className="fas fa-clock" /> Posted 3 days ago
                                                    </div>
                                                    <div className="freelance-location">
                                                        <i className="fas fa-map-marker-alt me-1" />
                                                        Texas, USA
                                                    </div>
                                                </div>
                                                <div className="freelance-tags">
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            After Effects
                                                        </span>
                                                    </Link>
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            Illustrator
                                                        </span>
                                                    </Link>
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            HTML
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="freelancers-price">$50-$700</div>
                                            </div>
                                            <div className="counter-stats">
                                                <ul>
                                                    <li>
                                                        <h3 className="counter-value">10 Days Left</h3>
                                                        <h5>Expiry</h5>
                                                    </li>
                                                    <li>
                                                        <h3 className="counter-value">25</h3>
                                                        <h5>Proposals</h5>
                                                    </li>
                                                    <li>
                                                        <h3 className="counter-value">
                                                            <span className="jobtype">Full Time</span>
                                                        </h3>
                                                        <h5>Job Type</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="cart-hover">
                                            <Link
                                                to="/project-details"
                                                className="btn-cart"
                                                tabIndex={-1}
                                            >
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                        <div className="freelance-content">
                                            <Link
                                                data-bs-toggle="modal"
                                                to="#rating"
                                                className="favourite"
                                            >
                                                <i className="fas fa-star" />
                                            </Link>
                                            <div className="author-heading">
                                                <div className="profile-img">
                                                    <Link to="#">
                                                        <img src={company_img6} alt="author" />
                                                    </Link>
                                                </div>
                                                <div className="profile-name">
                                                    <div className="author-location">
                                                        Alfred Tech{" "}
                                                        <i className="fas fa-check-circle text-success verified" />
                                                    </div>
                                                </div>
                                                <div className="freelance-info">
                                                    <h3>
                                                        <Link to="#">SM Developer</Link>
                                                    </h3>
                                                    <div className="freelance-location mb-1">
                                                        <i className="fas fa-clock" /> Posted 1 week ago
                                                    </div>
                                                    <div className="freelance-location">
                                                        <i className="fas fa-map-marker-alt me-1" />
                                                        Virginia, USA
                                                    </div>
                                                </div>
                                                <div className="freelance-tags">
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            After Effects
                                                        </span>
                                                    </Link>
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            Illustrator
                                                        </span>
                                                    </Link>
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            HTML
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="freelancers-price">$42-$100</div>
                                            </div>
                                            <div className="counter-stats">
                                                <ul>
                                                    <li>
                                                        <h3 className="counter-value">1 Days Left</h3>
                                                        <h5>Expiry</h5>
                                                    </li>
                                                    <li>
                                                        <h3 className="counter-value">5</h3>
                                                        <h5>Proposals</h5>
                                                    </li>
                                                    <li>
                                                        <h3 className="counter-value">
                                                            <span className="jobtype">Full Time</span>
                                                        </h3>
                                                        <h5>Job Type</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="cart-hover">
                                            <Link
                                                to="/project-details"
                                                className="btn-cart"
                                                tabIndex={-1}
                                            >
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                        <div className="freelance-content">
                                            <Link
                                                data-bs-toggle="modal"
                                                to="#rating"
                                                className="favourite"
                                            >
                                                <i className="fas fa-star" />
                                            </Link>
                                            <div className="author-heading">
                                                <div className="profile-img">
                                                    <Link to="#">
                                                        <img src={company_img7} alt="author" />
                                                    </Link>
                                                </div>
                                                <div className="profile-name">
                                                    <div className="author-location">
                                                        Kind Softwares{" "}
                                                        <i className="fas fa-check-circle text-success verified" />
                                                    </div>
                                                </div>
                                                <div className="freelance-info">
                                                    <h3>
                                                        <Link to="#">Network Engineer</Link>
                                                    </h3>
                                                    <div className="freelance-location mb-1">
                                                        <i className="fas fa-clock" /> Posted 3 weeks ago
                                                    </div>
                                                    <div className="freelance-location">
                                                        <i className="fas fa-map-marker-alt me-1" />
                                                        Delaware, USA
                                                    </div>
                                                </div>
                                                <div className="freelance-tags">
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            After Effects
                                                        </span>
                                                    </Link>
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            Illustrator
                                                        </span>
                                                    </Link>
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            HTML
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="freelancers-price">$12-$320</div>
                                            </div>
                                            <div className="counter-stats">
                                                <ul>
                                                    <li>
                                                        <h3 className="counter-value">2 Days Left</h3>
                                                        <h5>Expiry</h5>
                                                    </li>
                                                    <li>
                                                        <h3 className="counter-value">17</h3>
                                                        <h5>Proposals</h5>
                                                    </li>
                                                    <li>
                                                        <h3 className="counter-value">
                                                            <span className="jobtype">Full Time</span>
                                                        </h3>
                                                        <h5>Job Type</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="cart-hover">
                                            <Link
                                                to="/project-details"
                                                className="btn-cart"
                                                tabIndex={-1}
                                            >
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                        <div className="freelance-content">
                                            <Link
                                                data-bs-toggle="modal"
                                                to="#rating"
                                                className="favourite"
                                            >
                                                <i className="fas fa-star" />
                                            </Link>
                                            <div className="author-heading">
                                                <div className="profile-img">
                                                    <Link to="#">
                                                        <img src={company_img8} alt="author" />
                                                    </Link>
                                                </div>
                                                <div className="profile-name">
                                                    <div className="author-location">
                                                        Particles INC{" "}
                                                        <i className="fas fa-check-circle text-success verified" />
                                                    </div>
                                                </div>
                                                <div className="freelance-info">
                                                    <h3>
                                                        <Link to="#">Business Analyst</Link>
                                                    </h3>
                                                    <div className="freelance-location mb-1">
                                                        <i className="fas fa-clock" /> Posted 1 month ago
                                                    </div>
                                                    <div className="freelance-location">
                                                        <i className="fas fa-map-marker-alt me-1" />
                                                        Kentucky, USA
                                                    </div>
                                                </div>
                                                <div className="freelance-tags">
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            After Effects
                                                        </span>
                                                    </Link>
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            Illustrator
                                                        </span>
                                                    </Link>
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            HTML
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="freelancers-price">$35-$520</div>
                                            </div>
                                            <div className="counter-stats">
                                                <ul>
                                                    <li>
                                                        <h3 className="counter-value">15 Days Left</h3>
                                                        <h5>Expiry</h5>
                                                    </li>
                                                    <li>
                                                        <h3 className="counter-value">32</h3>
                                                        <h5>Proposals</h5>
                                                    </li>
                                                    <li>
                                                        <h3 className="counter-value">
                                                            <span className="jobtype">Full Time</span>
                                                        </h3>
                                                        <h5>Job Type</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="cart-hover">
                                            <Link
                                                to="/project-details"
                                                className="btn-cart"
                                                tabIndex={-1}
                                            >
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                        <div className="freelance-content">
                                            <Link
                                                data-bs-toggle="modal"
                                                to="#rating"
                                                className="favourite"
                                            >
                                                <i className="fas fa-star" />
                                            </Link>
                                            <div className="author-heading">
                                                <div className="profile-img">
                                                    <Link to="#">
                                                        <img src={company_img9} alt="author" />
                                                    </Link>
                                                </div>
                                                <div className="profile-name">
                                                    <div className="author-location">
                                                        Soft Technologies{" "}
                                                        <i className="fas fa-check-circle text-success verified" />
                                                    </div>
                                                </div>
                                                <div className="freelance-info">
                                                    <h3>
                                                        <Link to="#">IT Project Manager</Link>
                                                    </h3>
                                                    <div className="freelance-location mb-1">
                                                        <i className="fas fa-clock" /> Posted 2 months ago
                                                    </div>
                                                    <div className="freelance-location">
                                                        <i className="fas fa-map-marker-alt me-1" />
                                                        Kansas, USA
                                                    </div>
                                                </div>
                                                <div className="freelance-tags">
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            After Effects
                                                        </span>
                                                    </Link>
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            Illustrator
                                                        </span>
                                                    </Link>
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            HTML
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="freelancers-price">$10-$300</div>
                                            </div>
                                            <div className="counter-stats">
                                                <ul>
                                                    <li>
                                                        <h3 className="counter-value">8 Days Left</h3>
                                                        <h5>Expiry</h5>
                                                    </li>
                                                    <li>
                                                        <h3 className="counter-value">12</h3>
                                                        <h5>Proposals</h5>
                                                    </li>
                                                    <li>
                                                        <h3 className="counter-value">
                                                            <span className="jobtype">Full Time</span>
                                                        </h3>
                                                        <h5>Job Type</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="cart-hover">
                                            <Link
                                                to="/project-details"
                                                className="btn-cart"
                                                tabIndex={-1}
                                            >
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                        <div className="freelance-content">
                                            <Link
                                                data-bs-toggle="modal"
                                                to="#rating"
                                                className="favourite"
                                            >
                                                <i className="fas fa-star" />
                                            </Link>
                                            <div className="author-heading">
                                                <div className="profile-img">
                                                    <Link to="#">
                                                        <img src={company_img10} alt="author" />
                                                    </Link>
                                                </div>
                                                <div className="profile-name">
                                                    <div className="author-location">
                                                        System Info{" "}
                                                        <i className="fas fa-check-circle text-success verified" />
                                                    </div>
                                                </div>
                                                <div className="freelance-info">
                                                    <h3>
                                                        <Link to="#">Software Architect</Link>
                                                    </h3>
                                                    <div className="freelance-location mb-1">
                                                        <i className="fas fa-clock" /> Posted 1 year ago
                                                    </div>
                                                    <div className="freelance-location">
                                                        <i className="fas fa-map-marker-alt me-1" />
                                                        Minnesota, USA
                                                    </div>
                                                </div>
                                                <div className="freelance-tags">
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            After Effects
                                                        </span>
                                                    </Link>
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            Illustrator
                                                        </span>
                                                    </Link>
                                                    <Link to="">
                                                        <span className="badge badge-pill badge-design">
                                                            HTML
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="freelancers-price">$22-$600</div>
                                            </div>
                                            <div className="counter-stats">
                                                <ul>
                                                    <li>
                                                        <h3 className="counter-value">9 Days Left</h3>
                                                        <h5>Expiry</h5>
                                                    </li>
                                                    <li>
                                                        <h3 className="counter-value">16</h3>
                                                        <h5>Proposals</h5>
                                                    </li>
                                                    <li>
                                                        <h3 className="counter-value">
                                                            <span className="jobtype">Full Time</span>
                                                        </h3>
                                                        <h5>Job Type</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="cart-hover">
                                            <Link
                                                to="/project-details"
                                                className="btn-cart"
                                                tabIndex={-1}
                                            >
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* The Modal */}
                <div className="modal fade" id="rating">
                    <div className="modal-dialog modal-dialog-centered modal-md">
                        <div className="modal-content">
                            <div className="modal-header d-block b-0 pb-0">
                                <span className="modal-close float-end">
                                    <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                                        <i className="far fa-times-circle orange-text" />
                                    </Link>
                                </span>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="modal-info">
                                        <div className="text-center pt-0 mb-5">
                                            <h3>Please login to Favourite Project</h3>
                                        </div>
                                        <div className="submit-section text-center">
                                            <Link
                                                data-bs-dismiss="modal"
                                                to="#"
                                                className="btn btn-primary black-btn click-btn"
                                            >
                                                Cancel
                                            </Link>
                                            <button type="submit" className="btn btn-primary click-btn">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /The Modal */}
            </div>
            {/* /Page Content */}
        </>
    )

}
export default Projects;
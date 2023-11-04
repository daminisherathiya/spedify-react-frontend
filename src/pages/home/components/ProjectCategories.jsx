import React from "react";
import { Link } from "react-router-dom";
import "react-select2-wrapper/css/select2.css";
// Import Images
import {
    Category_01,
    Category_02,
    Category_03,
    Category_04,
    Category_05,
    Category_06,
    Category_07,
    Category_08,
} from "../../../components/imagepath";
import "aos/dist/aos.css";
import { FiArrowRight } from "react-icons/fi";
const Category = ({ title, description, total, projectCategory }) => {
    return <div className="col-xl-3 col-md-6 d-flex">
        <div
            className="different-categories-blk aos"
            data-aos="fade-up"
        >
            <div className="differ-img">
                <img src={Category_01} alt="" />
            </div>
            <div className="differ-content">
                <h6>Angular Development</h6>
                <p>
                    Web development, UI/UX development, Module development
                    &amp; more
                </p>
                <div className="category-foot">
                    <span>840 Projects</span>
                    <Link to="/search/work?projectCategory=1">
                        <i className="fas fa-caret-right" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
}
const ProjectCategories = () => {
    return <section className="section different-categories">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-12 mx-auto">
                    <div
                        className="section-header section-header-three section-locate aos"
                        data-aos="fade-up"
                    >
                        <div>
                            <h2 className="header-title">
                                Browse Projects By Category
                            </h2>
                            <p>Get work done in over 60 different categories</p>
                        </div>
                        <div className="view-locations">
                            <Link to="/search/work" className="btn btn-primary ">
                                View all Categories{" "}
                                <span className="location-right">
                                    <FiArrowRight className="feather-arrow-right" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ">
                <Category
                    title={'Browse Projects By Category'}
                    description={'Get work done in over 60 different categories'}
                    total={'640'}
                    projectCategory={'1'}
                />
                    <Category
                    title={'Browse Projects By Category'}
                    description={'Get work done in over 60 different categories'}
                    total={'640'}
                    projectCategory={'1'}
                />
                    <Category
                    title={'Browse Projects By Category'}
                    description={'Get work done in over 60 different categories'}
                    total={'640'}
                    projectCategory={'1'}
                />
                    <Category
                    title={'Browse Projects By Category'}
                    description={'Get work done in over 60 different categories'}
                    total={'640'}
                    projectCategory={'1'}
                />
                    <Category
                    title={'Browse Projects By Category'}
                    description={'Get work done in over 60 different categories'}
                    total={'640'}
                    projectCategory={'1'}
                />
                    <Category
                    title={'Browse Projects By Category'}
                    description={'Get work done in over 60 different categories'}
                    total={'640'}
                    projectCategory={'1'}
                />
                    <Category
                    title={'Browse Projects By Category'}
                    description={'Get work done in over 60 different categories'}
                    total={'640'}
                    projectCategory={'1'}
                />
                    <Category
                    title={'Browse Projects By Category'}
                    description={'Get work done in over 60 different categories'}
                    total={'640'}
                    projectCategory={'1'}
                />
            </div>
        </div>
    </section>
}

export default ProjectCategories;

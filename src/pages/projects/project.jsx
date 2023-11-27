import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
import Axios from "../../Axios";
import { Alert } from "../../components/common/Alert";
import { InlineLoader } from "../../components/common/InlineLoader";
import { useEnumsContext } from "../../context/EnumsContext";
import { useAOS } from "../../hooks/useAOS";
import { Breadcrumb } from "./components/Breadcrumb";
import { ProjectsList } from "./components/ProjectsList";
import "./project.css";

const Projects = (props) => {
    useAOS();

    const { enumsState } = useEnumsContext();
    const [isFetchingProjects, setIsFetchingProjects] = useState(true);
    const [projects, setProjects] = useState([]);
    const [projectsFetchingError, setProjectsFetchingError] = useState();
    const [minHourlyRate, setMinHourlyRate] = useState(15);
    const [maxHourlyRate, setMaxHourlyRate] = useState(35);

    useEffect(() => {
        const fetchProjects = async () => {
            setIsFetchingProjects(true);

            try {
                const response = await Axios.get('/api/v1/project/getAll');
                setProjectsFetchingError('testing error');  // For testing, uncomment this
                if (response.status < 200 || response.status >= 300) {
                    throw new Error('Failed to fetch projects');
                }
                console.log(response.data.doc.projects);
                setProjects(response.data.doc.projects);
            } catch (error) {
                setProjectsFetchingError(error.message);
            }

            setIsFetchingProjects(false);
        };
        fetchProjects();
    }, []);

    const handleHourlyRateChange = (values) => {
        setMinHourlyRate(Math.round(values[0]));
        setMaxHourlyRate(Math.round(values[1]));
    }

    return (
        <>
            <Breadcrumb />
            {/* Page Content */}
            <div className="content pt-0 pb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-4 col-xl-3 card pb-3 mb-0 overflow-auto projects-filter-and-list">
                            {/* Search Filter */}
                            <StickyBox>
                                <div className="search-filter">
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 className="card-title mb-0">FILTERS</h4>
                                        <Link to="">Clear All</Link>
                                    </div>
                                    <div className="card-body">
                                        <div className="filter-widget">
                                            <h4>Support Type</h4>
                                            <div className="form-group">
                                                <Select2
                                                    className="select form-control "
                                                    data={(enumsState.SupportTypes || []).map(item => ({ id: item.value, text: item.text }))}
                                                    options={{
                                                        placeholder: 'Select Support Type',
                                                    }} />
                                            </div>
                                        </div>
                                        <div className="filter-widget">
                                            <h4>Location</h4>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control select2-like-placeholder"
                                                    placeholder="Enter Location"
                                                />
                                            </div>
                                        </div>
                                        <div className="filter-widget">
                                            <h4>Pricing Type</h4>
                                            <div className="form-group">
                                            <Select2
                                                    className="select form-control "
                                                    data={(enumsState.PricingTypes || []).map(item => ({ id: item.value, text: item.text }))}
                                                    options={{
                                                        placeholder: 'Select Pricing Type',
                                                    }} />
                                            </div>
                                        </div>
                                        <div className="filter-widget">
                                            <h4>Add Skills</h4>
                                            <div className="form-group">
                                                {/* <span className="badge badge-pill badge-skill">
                                                    + Web Design
                                                </span> */}
                                                <input
                                                    type="text"
                                                    className="form-control select2-like-placeholder"
                                                    placeholder="Enter Skill"
                                                />
                                            </div>
                                        </div>
                                        <div className="filter-widget">
                                            <h4>Experience</h4>
                                            {(enumsState.ExperienceLevels || []).map((experienceLevel) => (
                                                <div key={experienceLevel.value}>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="select_exp" defaultChecked={experienceLevel.value===2} />
                                                        <span className="checkmark" /> {experienceLevel.text}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="filter-widget">
                                            <h4>Hourly Rate</h4>
                                            <Nouislider range={{ min: 0, max: 50 }} start={[minHourlyRate, maxHourlyRate]} step={1} connect onUpdate={handleHourlyRateChange} />
                                            <div id="slider-range" />
                                            <div className="row slider-labels">
                                                <div className="col-xs-12 caption">
                                                    <span id="slider-range-value1" />{minHourlyRate} -{" "}<span id="slider-range-value2" />{maxHourlyRate}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="filter-widget">
                                            <h4>Keywords</h4>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control select2-like-placeholder"
                                                    placeholder="Enter Keywords"
                                                />
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
                        <div className="col-md-12 col-lg-8 col-xl-9 card py-0 mb-0 overflow-auto projects-filter-and-list">
                            <div className="pt-3 pb-1 bg-white sticky-xl-top">
                                <div className="sort-tab mb-1">
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
                                <div className="bootstrap-tags text-start pl-0 pb-0">
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
                            </div>                            
                            {isFetchingProjects && <InlineLoader />}
                            {projectsFetchingError && <Alert message={projectsFetchingError} />}
                            <ProjectsList projects={projects} />
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
import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import Select from 'react-select';
import AsyncCreatableSelect from 'react-select/async-creatable';
import Select2 from 'react-select2-wrapper';
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
    const [projectsFetchingError, setProjectsFetchingError] = useState("");

    const [selectedSupportType, setSelectedSupportType] = useState(null);
    const [typedLocation, setTypedLocation] = useState("");
    const [selectedPricingType, setSelectedPricingType] = useState(null);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedExperienceLevels, setSelectedExperienceLevels] = useState([]);
    const [minHourlyRate, setMinHourlyRate] = useState(15);
    const [maxHourlyRate, setMaxHourlyRate] = useState(35);
    const [typedKeywords, setTypedKeywords] = useState("");
    const [appliedKeywords, setAppliedKeywords] = useState("");
    const [selectedSortingType, setSelectedSortingType] = useState({
        value: enumsState.RelevanceTypes[0].value,
        label: enumsState.RelevanceTypes[0].text,
    });

    const [activePage, setActivePage] = useState(1);
    const [pageSize, setPageSize] = useState(20);

    console.log("selectedSupportType", selectedSupportType);
    console.log("typedLocation", typedLocation);
    console.log("selectedPricingType", selectedPricingType);
    console.log("selectedSkills", selectedSkills);
    console.log("selectedExperienceLevels", selectedExperienceLevels);
    console.log("minHourlyRate", minHourlyRate);
    console.log("maxHourlyRate", maxHourlyRate);
    console.log("typedKeywords", typedKeywords);
    console.log("appliedKeywords", appliedKeywords);
    console.log("selectedSortingType", selectedSortingType);

    const startIndex = (activePage - 1) * pageSize;  // Inclusive
    const endIndex = Math.min(activePage * pageSize, projects.length) - 1;  // Inclusive

    useEffect(() => {
        const fetchProjects = async (queryParamsString) => {
            setIsFetchingProjects(true);

            try {
                const response = await Axios.get(`/api/v1/project/getAll`);
                // const response = await Axios.get(`/api/v1/project/getAll?${queryParamsString}`);
                // setProjectsFetchingError('testing error');  // For testing, uncomment this
                if (response.status < 200 || response.status >= 300) {
                    throw new Error('Failed to fetch projects');
                }
                console.log(response.data.doc.projects);
                setProjects(response.data.doc.projects);
                setActivePage(1);
            } catch (error) {
                setProjectsFetchingError(error.message);
            }

            setIsFetchingProjects(false);
        };
        const getProjectsFilterQueryParamsString = () => {
            let params = '';
            if (selectedSupportType) {
                params += `&supportType=${selectedSupportType.value}`;
            }
            if (typedLocation) {
                params += `&location=${typedLocation}`;
            }
            if (selectedPricingType) {
                params += `&pricingType=${selectedPricingType.value}`;
            }
            for (let i = 0; i < selectedSkills.length; i++) {
                params += `&skills=${selectedSkills[i].value}`;
            }
            for (let i = 0; i < selectedExperienceLevels.length; i++) {
                params += `&experience=${selectedExperienceLevels[i].value}`;
            }
            params += `&hourlyMin=${minHourlyRate}`;
            params += `&hourlyMax=${maxHourlyRate}`;
            if (appliedKeywords) {
                params += `&keywords=${appliedKeywords}`;
            }
            params += `&sorting=${selectedSortingType.value}`;
            params = params.replace(/^&/, '');  // Remove leading '&'
            console.log("params", params);
            return params;
        };
        fetchProjects(getProjectsFilterQueryParamsString());
    }, [
        selectedSupportType, typedLocation, selectedPricingType, selectedSkills,
        selectedExperienceLevels, minHourlyRate, maxHourlyRate, appliedKeywords,
        selectedSortingType,
    ]);

    const skillsNoOptionsMessage = ({ inputValue }) => {
        if (!inputValue) {
          return "Start typing skill to search ...";
        }
        return "No skills found";
    };

    const loadSkillsOptions = (inputValue) => {
        console.log("loadOptions", inputValue);
        return Axios.post('/api/v1/skill/search', {
            searchQuery: inputValue
        })
        .then(response => {
            return response.data.doc.skills.map(item => ({ label: item.name, value: item._id }));
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            return [];
        });
    };

    const formatSkillCreateLabel = (inputValue) => {
        return <span>{inputValue} <button className="btn btn-link text-left p-0 button-disable-hover">(create a new skill)</button></span>;
    };

    const handleSkillSelection = (selectedOption) => {
        console.log("selectedOption", selectedOption);
        console.log("selectedSkills", selectedSkills);
    
        const optionalPostParams = {};
        if (!selectedOption.__isNew__) {
            optionalPostParams._id = selectedOption.value;
        }

        Axios.post('/api/v1/skill/createUpdate', {
            name: selectedOption.label,
            ...optionalPostParams
        })
        .then(response => {
            if (!selectedSkills.some(skill => skill.value === selectedOption.value)) {
                setSelectedSkills(prevSkills => [...prevSkills, {label: selectedOption.label, value: response.data.doc.skillId}]);
                console.log('Skill created/updated:', response.data);
            }
        })
        .catch(error => {
            console.error('Error in creating/updating skill:', error);
        });
    };

    const handleExperienceLevelChange = event => {
        console.log("event", event);
        const experienceLevel = event.target.value;
        setSelectedExperienceLevels(prevExperienceLevels => {
            if (prevExperienceLevels.some(el => el.value === experienceLevel)) {
                return prevExperienceLevels.filter(item => item.value !== experienceLevel);
            }
            return [...prevExperienceLevels, {value: experienceLevel, label: event.target.dataset.label} ];
        });

    };

    const handleHourlyRateChange = values => {
        setMinHourlyRate(Math.round(values[0]));
        setMaxHourlyRate(Math.round(values[1]));
    }

    const handlePaginationPageChange = pageNumber => {
        setActivePage(pageNumber);
    }

    const handlePaginationPageSizeChange = event => {
        setPageSize(event.target.value);
    };

    const clearAllSelectedFilters = event => {
        event.preventDefault();

        setSelectedSupportType(null);
        setTypedLocation("");
        setSelectedPricingType(null);
        setSelectedSkills([]);
        setSelectedExperienceLevels([]);
        setMinHourlyRate(15);
        setMaxHourlyRate(35);
        setTypedKeywords("");
        setAppliedKeywords("");
    };

    const searchProjects = () => {
        setAppliedKeywords(typedKeywords);
    };

    const removeAppliedFilter = event => {
        console.log("event", event);
        const filterType = event.currentTarget.dataset.type;
        const filterValue = event.currentTarget.dataset.value;
        console.log("filterType", filterType);
        console.log("filterValue", filterValue);
        switch (filterType) {
            case 'selectedSupportType':
                setSelectedSupportType(null);
                break;
            case 'typedLocation':
                setTypedLocation("");
                break;
            case 'selectedPricingType':
                setSelectedPricingType(null);
                break;
            case 'selectedSkills':
                setSelectedSkills(prevSelectedSkills => prevSelectedSkills.filter(skill => skill.value !== filterValue));
                break;
            case 'selectedExperienceLevels':
                setSelectedExperienceLevels(prevSelectedExperienceLevels => prevSelectedExperienceLevels.filter(experienceLevel => experienceLevel.value !== filterValue));
                break;
            case 'minHourlyRate':
                setMinHourlyRate(15);
                break;
            case 'maxHourlyRate':
                setMaxHourlyRate(35);
                break;
            case 'appliedKeywords':
                setAppliedKeywords("");
                break;
            default:
                break;
        }
    };

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
                                        <Link to="" onClick={clearAllSelectedFilters}>Clear All</Link>
                                    </div>
                                    <div className="card-body">
                                        <div className="filter-widget">
                                            <h4>Support Type</h4>
                                            <div className="form-group">
                                                <Select
                                                    value={selectedSupportType}
                                                    options={(enumsState.SupportTypes || []).map(item => ({ value: item.value, label: item.text }))}
                                                    className="react-select"
                                                    classNamePrefix="react-select"
                                                    placeholder="Select Support Type"
                                                    onChange={setSelectedSupportType}
                                                    />
                                            </div>
                                        </div>
                                        <div className="filter-widget">
                                            <h4>Location</h4>
                                            <div className="form-group">
                                                <input
                                                    value={typedLocation}
                                                    type="text"
                                                    className="form-control react-select-like-placeholder"
                                                    placeholder="Enter Location"
                                                    onChange={event => setTypedLocation(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="filter-widget">
                                            <h4>Pricing Type</h4>
                                            <div className="form-group">
                                                <Select
                                                    value={selectedPricingType}
                                                    options={(enumsState.PricingTypes || []).map(item => ({ value: item.value, label: item.text }))}
                                                    className="react-select"
                                                    classNamePrefix="react-select"
                                                    placeholder="Select Pricing Type"
                                                    onChange={setSelectedPricingType}
                                                    />
                                            </div>
                                        </div>
                                        <div className="filter-widget">
                                            <h4>Add Skills</h4>
                                            <div className="form-group">
                                                {selectedSkills.map(skill => (
                                                    <span key={skill.value} className="badge badge-pill badge-skill">
                                                        + {skill.label}
                                                    </span>
                                                ))}
                                                
                                                <AsyncCreatableSelect
                                                    value=""
                                                    loadOptions={loadSkillsOptions}
                                                    placeholder="Enter Skill"
                                                    noOptionsMessage={skillsNoOptionsMessage}
                                                    formatCreateLabel={formatSkillCreateLabel}
                                                    createOptionPosition="first"
                                                    className="react-select"
                                                    classNamePrefix="react-select"
                                                    // menuIsOpen={true}
                                                    onChange={handleSkillSelection}
                                                    />
                                            </div>
                                        </div>
                                        <div className="filter-widget">
                                            <h4>Experience</h4>
                                            {(enumsState.ExperienceLevels || []).map((experienceLevel) => (
                                                <div key={experienceLevel.value}>
                                                    <label className="custom_check">
                                                        <input
                                                            type="checkbox"
                                                            name="select_exp"
                                                            value={experienceLevel.value}
                                                            data-label={experienceLevel.text}
                                                            onChange={handleExperienceLevelChange}
                                                            checked={selectedExperienceLevels.some(item => item.value == experienceLevel.value)}
                                                            />
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
                                                    value={typedKeywords}
                                                    type="text"
                                                    className="form-control react-select-like-placeholder"
                                                    placeholder="Enter Keywords"
                                                    onChange={event => setTypedKeywords(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="btn-search">
                                            <button type="button" className="btn btn-block" onClick={searchProjects}>
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
                                                    <h4>Showing {Math.min(startIndex + 1, projects.length)} - {endIndex + 1} of {projects.length}</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <div className="d-flex justify-content-sm-end">
                                                <Select
                                                    value={selectedSortingType}
                                                    options={(enumsState.RelevanceTypes || []).map(item => ({ value: item.value, label: item.text }))}
                                                    className="react-select"
                                                    classNamePrefix="react-select"
                                                    placeholder="Sort by"
                                                    onChange={setSelectedSortingType}
                                                    // menuIsOpen={true}
                                                    />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bootstrap-tags text-start pl-0 pb-0">
                                    {selectedSupportType && (
                                        <span className="badge badge-pill badge-skills d-inline-flex mw-100">
                                            <span className="text-truncate d-inline-block">Support: {selectedSupportType.label}{" "}</span>
                                            <span className="tag-close flex-shrink-0" data-role="remove" data-type="selectedSupportType" data-value={selectedSupportType.value} onClick={removeAppliedFilter}>
                                                <i className="fas fa-times" />
                                            </span>
                                        </span>
                                    )}
                                    {typedLocation && (
                                        <span className="badge badge-pill badge-skills d-inline-flex mw-100">
                                            <span className="text-truncate d-inline-block">Location: {typedLocation}{" "}</span>
                                            <span className="tag-close flex-shrink-0" data-role="remove" data-type="typedLocation" data-value={typedLocation} onClick={removeAppliedFilter}>
                                                <i className="fas fa-times" />
                                            </span>
                                        </span>
                                    )}
                                    {selectedPricingType && (
                                        <span className="badge badge-pill badge-skills d-inline-flex mw-100">
                                            <span className="text-truncate d-inline-block">Pricing: {selectedPricingType.label}{" "}</span>
                                            <span className="tag-close flex-shrink-0" data-role="remove" data-type="selectedPricingType" data-value={selectedPricingType.value} onClick={removeAppliedFilter}>
                                                <i className="fas fa-times" />
                                            </span>
                                        </span>
                                    )}
                                    {selectedSkills.map(skill => (
                                        <span key={skill.value} className="badge badge-pill badge-skills d-inline-flex mw-100">
                                            <span className="text-truncate d-inline-block">Skill: {skill.label}{" "}</span>
                                            <span className="tag-close flex-shrink-0" data-role="remove" data-type="selectedSkills" data-value={skill.value} onClick={removeAppliedFilter}>
                                                <i className="fas fa-times" />
                                            </span>
                                        </span>
                                    ))}
                                    {selectedExperienceLevels.map(experienceLevel => (
                                        <span key={experienceLevel.value} className="badge badge-pill badge-skills d-inline-flex mw-100">
                                            <span className="text-truncate d-inline-block">Experience: {experienceLevel.label}{" "}</span>
                                            <span className="tag-close flex-shrink-0" data-role="remove" data-type="selectedExperienceLevels" data-value={experienceLevel.value} onClick={removeAppliedFilter}>
                                                <i className="fas fa-times" />
                                            </span>
                                        </span>
                                    ))}
                                    <span className="badge badge-pill badge-skills d-inline-flex mw-100">
                                        <span className="text-truncate d-inline-block">Min rate: {minHourlyRate}{" "}</span>
                                        <span className="tag-close flex-shrink-0" data-role="remove" data-type="minHourlyRate" data-value={minHourlyRate} onClick={removeAppliedFilter}>
                                            <i className="fas fa-times" />
                                        </span>
                                    </span>
                                    <span className="badge badge-pill badge-skills d-inline-flex mw-100">
                                        <span className="text-truncate d-inline-block">Max rate: {maxHourlyRate}{" "}</span>
                                        <span className="tag-close flex-shrink-0" data-role="remove" data-type="maxHourlyRate" data-value={maxHourlyRate} onClick={removeAppliedFilter}>
                                            <i className="fas fa-times" />
                                        </span>
                                    </span>
                                    
                                    {appliedKeywords && (
                                        <span className="badge badge-pill badge-skills d-inline-flex mw-100">
                                            <span className="text-truncate d-inline-block">Keywords: {appliedKeywords}{" "}</span>
                                            <span className="tag-close flex-shrink-0" data-role="remove" data-type="appliedKeywords" data-value={appliedKeywords} onClick={removeAppliedFilter}>
                                                <i className="fas fa-times" />
                                            </span>
                                        </span>
                                    )}
                                </div>
                            </div>                            
                            {isFetchingProjects && <InlineLoader />}
                            {projectsFetchingError && <Alert message={projectsFetchingError} />}
                            <ProjectsList projects={projects.slice(startIndex, endIndex + 1)} />
                            <div className="pagination-sticky-bottom py-3">
                                <div className="d-flex py-3 justify-content-center">
                                    <div className="form-group mb-0 me-3 pagination-page-size">
                                        <Select2
                                            className="select form-control"
                                            data={([10, 20, 50, 100]).map(item => ({ id: item, text: item.toString() }))}
                                            value={pageSize}
                                            onChange={handlePaginationPageSizeChange}
                                            options={{
                                                placeholder: 'Select Page Size',
                                                minimumResultsForSearch: Infinity,
                                            }}
                                            />
                                    </div>
                                    <Pagination
                                        activePage={activePage}
                                        itemsCountPerPage={pageSize}
                                        totalItemsCount={projects.length}
                                        pageRangeDisplayed={5}
                                        itemClass="page-item"
                                        linkClass="page-link h-100 d-flex align-items-center"
                                        onChange={handlePaginationPageChange}
                                        innerClass="pagination mb-0"
                                    />
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
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Developer_01, Flags_en, home_icon } from "../../components/imagepath";
import { Sidebar } from '../sidebar';

const Manageprojects = (props) => {
    useEffect(() => {
        document.body.className = 'dashboard-page';
        return () => { document.body.className = ''; }
    });

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
                                        <li className="breadcrumb-item" aria-current="page">Employee</li>
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
            <div className="content content-page">
                <div className="container-fluid">
                    <div className="row">
                        {/* sidebar */}
                        <div className="col-xl-3 col-md-4 theiaStickySidebar">
                            <StickyBox offsetTop={20} offsetBottom={20}>
                                <Sidebar userProfile={{ displayName: '' }} />
                            </StickyBox>
                        </div>
                        {/* /sidebar */}
                        <div className="col-xl-9 col-md-8">
                            <div className="page-title">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3>Manage Projects</h3>
                                    </div>
                                    <div className="col-md-6 text-end">
                                        <Link
                                            to="/post-project"
                                            className="btn btn-primary back-btn mb-4"
                                        >
                                            Post a Project
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <nav className="user-tabs project-tabs">
                                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/manage-projects">
                                            All Projects
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/pending-projects">
                                            Pending Projects
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/ongoing-projects">
                                            Ongoing Projects
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/completed-projects">
                                            Completed Projects
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/cancelled-projects">
                                            Cancelled Projects
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            {/* project list */}
                            <div className="my-projects-list">
                                <div className="row">
                                    <div className="col-lg-10 flex-wrap">
                                        <div className="projects-card flex-fill">
                                            <div className="card-body">
                                                <div className="projects-details align-items-center">
                                                    <div className="project-info">
                                                        <span>Dreamguystech</span>
                                                        <h2>Website Designer Required For Directory Theme</h2>
                                                        <div className="customer-info">
                                                            <ul className="list-details">
                                                                <li>
                                                                    <div className="slot">
                                                                        <p>Price type</p>
                                                                        <h5>Fixed</h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="slot">
                                                                        <p>Location</p>
                                                                        <h5>
                                                                            <img
                                                                                src={Flags_en}
                                                                                height={13}
                                                                                alt="Lang"
                                                                            />{" "}
                                                                            UK
                                                                        </h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="slot">
                                                                        <p>Expiry</p>
                                                                        <h5>4 Days Left</h5>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="project-hire-info">
                                                        <div className="content-divider" />
                                                        <div className="projects-amount">
                                                            <h3>$500.00</h3>
                                                            <h5>in 12 Days</h5>
                                                        </div>
                                                        <div className="content-divider" />
                                                        <div className="projects-action text-center">
                                                            <Link
                                                                to="/view-project-detail"
                                                                className="projects-btn"
                                                            >
                                                                View Details{" "}
                                                            </Link>
                                                            <Link to="#" className="hired-detail">
                                                                Hired on 19 JUN 2021
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 d-flex flex-wrap">
                                        <div className="projects-card flex-fill">
                                            <div className="card-body p-2">
                                                <div className="prj-proposal-count text-center hired">
                                                    <h3>Hired</h3>
                                                    <img
                                                        src={Developer_01}
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                    <p className="mb-0">Hannah Finn</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /project list */}
                            {/* project list */}
                            <div className="my-projects-list">
                                <div className="row">
                                    <div className="col-lg-10 flex-wrap">
                                        <div className="projects-card flex-fill">
                                            <div className="card-body">
                                                <div className="projects-details align-items-center">
                                                    <div className="project-info">
                                                        <span>Dreamguystech</span>
                                                        <h2>
                                                            Landing Page Redesign / Sales Page Redesign (Not
                                                            Entire Web){" "}
                                                        </h2>
                                                        <div className="customer-info">
                                                            <ul className="list-details">
                                                                <li>
                                                                    <div className="slot">
                                                                        <p>Price type</p>
                                                                        <h5>Fixed</h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="slot">
                                                                        <p>Location</p>
                                                                        <h5>
                                                                            <img
                                                                                src={Flags_en}
                                                                                height={13}
                                                                                alt="Lang"
                                                                            />{" "}
                                                                            UK
                                                                        </h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="slot">
                                                                        <p>Expiry</p>
                                                                        <h5>4 Days Left</h5>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="project-hire-info">
                                                        <div className="content-divider" />
                                                        <div className="projects-amount">
                                                            <h3>$500.00</h3>
                                                            <h5>in 12 Days</h5>
                                                        </div>
                                                        <div className="content-divider" />
                                                        <div className="projects-action">
                                                            <Link
                                                                to="/project-proposals"
                                                                className="projects-btn"
                                                            >
                                                                View Proposals{" "}
                                                            </Link>
                                                            <Link to="/edit-project" className="projects-btn">
                                                                Edit Jobs
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 d-flex flex-wrap">
                                        <div className="projects-card flex-fill">
                                            <div className="card-body p-2">
                                                <div className="prj-proposal-count text-center">
                                                    <span>5</span>
                                                    <h3>Proposals</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /project list */}
                            {/* project list */}
                            <div className="my-projects-list">
                                <div className="row">
                                    <div className="col-lg-10 flex-wrap">
                                        <div className="projects-card flex-fill">
                                            <div className="card-body">
                                                <div className="projects-details align-items-center">
                                                    <div className="project-info">
                                                        <span>Dreamguystech</span>
                                                        <h2>WooCommerce Product Page Back Up Restoration</h2>
                                                        <div className="customer-info">
                                                            <ul className="list-details">
                                                                <li>
                                                                    <div className="slot">
                                                                        <p>Price type</p>
                                                                        <h5>Fixed</h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="slot">
                                                                        <p>Location</p>
                                                                        <h5>
                                                                            <img
                                                                                src={Flags_en}
                                                                                height={13}
                                                                                alt="Lang"
                                                                            />{" "}
                                                                            UK
                                                                        </h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="slot">
                                                                        <p>Expiry</p>
                                                                        <h5>4 Days Left</h5>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="project-hire-info">
                                                        <div className="content-divider" />
                                                        <div className="projects-amount">
                                                            <h3>$500.00</h3>
                                                            <h5>in 12 Days</h5>
                                                        </div>
                                                        <div className="content-divider" />
                                                        <div className="projects-action text-center">
                                                            <Link
                                                                to="/view-project-detail"
                                                                className="projects-btn"
                                                            >
                                                                View Details{" "}
                                                            </Link>
                                                            <Link to="#" className="hired-detail">
                                                                Hired on 19 JUN 2021
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 d-flex flex-wrap">
                                        <div className="projects-card flex-fill">
                                            <div className="card-body p-2">
                                                <div className="prj-proposal-count text-center hired">
                                                    <h3>Hired</h3>
                                                    <img
                                                        src={Developer_01}
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                    <p className="mb-0">Hannah Finn</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /project list */}
                            {/* project list */}
                            <div className="my-projects-list">
                                <div className="row">
                                    <div className="col-lg-10 flex-wrap">
                                        <div className="projects-card flex-fill">
                                            <div className="card-body">
                                                <div className="projects-details align-items-center">
                                                    <div className="project-info">
                                                        <span>Dreamguystech</span>
                                                        <h2>
                                                            {" "}
                                                            PHP Laravel Developer Required (Contractual
                                                            Employement)
                                                        </h2>
                                                        <div className="customer-info">
                                                            <ul className="list-details">
                                                                <li>
                                                                    <div className="slot">
                                                                        <p>Price type</p>
                                                                        <h5>Fixed</h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="slot">
                                                                        <p>Location</p>
                                                                        <h5>
                                                                            <img
                                                                                src={Flags_en}
                                                                                height={13}
                                                                                alt="Lang"
                                                                            />{" "}
                                                                            UK
                                                                        </h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="slot">
                                                                        <p>Expiry</p>
                                                                        <h5>4 Days Left</h5>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="project-hire-info">
                                                        <div className="content-divider" />
                                                        <div className="projects-amount">
                                                            <h3>$500.00</h3>
                                                            <h5>in 12 Days</h5>
                                                        </div>
                                                        <div className="content-divider" />
                                                        <div className="projects-action">
                                                            <Link
                                                                to="/project-proposals"
                                                                className="projects-btn"
                                                            >
                                                                View Proposals{" "}
                                                            </Link>
                                                            <Link to="/edit-project" className="projects-btn">
                                                                Edit Jobs
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 d-flex flex-wrap">
                                        <div className="projects-card flex-fill">
                                            <div className="card-body p-2">
                                                <div className="prj-proposal-count text-center">
                                                    <span>5</span>
                                                    <h3>Proposals</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /project list */}
                            {/* project list */}
                            <div className="my-projects-list">
                                <div className="row">
                                    <div className="col-lg-10 flex-wrap">
                                        <div className="projects-card flex-fill">
                                            <div className="card-body">
                                                <div className="projects-details align-items-center">
                                                    <div className="project-info">
                                                        <span>Dreamguystech</span>
                                                        <h2>
                                                            Laravel Backend Developer to finish ongoing project{" "}
                                                        </h2>
                                                        <div className="customer-info">
                                                            <ul className="list-details">
                                                                <li>
                                                                    <div className="slot">
                                                                        <p>Price type</p>
                                                                        <h5>Fixed</h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="slot">
                                                                        <p>Location</p>
                                                                        <h5>
                                                                            <img
                                                                                src={Flags_en}
                                                                                height={13}
                                                                                alt="Lang"
                                                                            />{" "}
                                                                            UK
                                                                        </h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="slot">
                                                                        <p>Expiry</p>
                                                                        <h5>4 Days Left</h5>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="project-hire-info">
                                                        <div className="content-divider" />
                                                        <div className="projects-amount">
                                                            <h3>$500.00</h3>
                                                            <h5>in 12 Days</h5>
                                                        </div>
                                                        <div className="content-divider" />
                                                        <div className="projects-action text-center">
                                                            <Link
                                                                to="/view-project-detail"
                                                                className="projects-btn"
                                                            >
                                                                View Details{" "}
                                                            </Link>
                                                            <Link to="#" className="hired-detail">
                                                                Hired on 19 JUN 2021
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 d-flex flex-wrap">
                                        <div className="projects-card flex-fill">
                                            <div className="card-body p-2">
                                                <div className="prj-proposal-count text-center hired">
                                                    <h3>Hired</h3>
                                                    <img
                                                        src={Developer_01}
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                    <p className="mb-0">Hannah Finn</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /project list */}
                            {/* pagination */}
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="paginations list-pagination">
                                        <li className="page-item">
                                            <Link to="#">Previous</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="#" className="active">
                                                1
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="#">Next</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* /pagination */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Manageprojects;
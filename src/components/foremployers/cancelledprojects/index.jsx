import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Flags_en, home_icon } from "../../imagepath";
import { Sidebar } from '../sidebar';

const CancelledProjects = (props) => {
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
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            {/* sidebar */}
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            {/* /sidebar */}
            <div className="col-xl-9 col-md-8">
              <div className="page-title">
                <h3>Manage Projects</h3>
              </div>
              <nav className="user-tabs project-tabs">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link className="nav-link" to="/manage-projects">
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
                    <Link className="nav-link active" to="/cancelled-projects">
                      Cancelled Projects
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* project list */}
              <div className="my-projects-list">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="projects-delete-details align-items-center">
                      <div className="project-info">
                        <span>Dreamguystech</span>
                        <h2>Create website wordpress for a Brand </h2>
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
                          <Link to="#" className="projects-btn">
                            Repost{" "}
                          </Link>
                          <h4 className="mb-0">
                            <Link to="#" className="cancelled-badge">
                              Delete Project
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* project list */}
              {/* project list */}
              <div className="my-projects-list">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="projects-delete-details align-items-center">
                      <div className="project-info">
                        <span>Dreamguystech</span>
                        <h2>Email automation set up and segmentation </h2>
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
                          <Link to="#" className="projects-btn">
                            Repost{" "}
                          </Link>
                          <h4 className="mb-0">
                            <Link to="#" className="cancelled-badge">
                              Delete Project
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* project list */}
              {/* project list */}
              <div className="my-projects-list">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="projects-delete-details align-items-center">
                      <div className="project-info">
                        <span>Dreamguystech</span>
                        <h2>Build me a website by CMS-Wordpress </h2>
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
                          <Link to="#" className="projects-btn">
                            Repost{" "}
                          </Link>
                          <h4 className="mb-0">
                            <Link to="#" className="cancelled-badge">
                              Delete Project
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* project list */}
              {/* project list */}
              <div className="my-projects-list">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="projects-delete-details align-items-center">
                      <div className="project-info">
                        <span>Dreamguystech</span>
                        <h2>
                          Make responsive emails theme for new ecommerce website
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
                          <Link to="#" className="projects-btn">
                            Repost{" "}
                          </Link>
                          <h4 className="mb-0">
                            <Link to="#" className="cancelled-badge">
                              Delete Project
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* project list */}
              {/* project list */}
              <div className="my-projects-list">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="projects-delete-details align-items-center">
                      <div className="project-info">
                        <span>Dreamguystech</span>
                        <h2>Woocomerce pdf view error on wordpress website </h2>
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
                          <Link to="#" className="projects-btn">
                            Repost{" "}
                          </Link>
                          <h4 className="mb-0">
                            <Link to="#" className="cancelled-badge">
                              Delete Project
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* project list */}
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
      {/* /Page Content */}
    </>
  )

}
export default CancelledProjects;
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Review_01, Review_02, Review_03, Review_1, home_icon, loader_icon } from "../../components/imagepath";
import { Sidebar } from '../sidebar';

const Review = (props) => {
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
                    <li className="breadcrumb-item" aria-current="page">REVIEWS</li>
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
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar userProfile={{ displayName: '' }} />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-md-8">
              <div className="card ">
                <div className="card-header review-heading">
                  <h3 className="pro-title without-border">Reviews</h3>
                </div>
                <div className="card-body">
                  <div className="reviews company-review">
                    <div className="review-content no-padding">
                      <h4>Fast and clear. </h4>
                      <p className="mb-0">
                        Fast and clear. European visual concepts. Easy to communicate TOP
                      </p>
                      <div className="review-top tab-reviews d-flex align-items-center">
                        <div className="review-img">
                          <Link to="userDetails.html">
                            <img
                              className="img-fluid"
                              src={Review_01}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="review-info">
                          <h3>
                            <Link to="userDetails.html">javiervalino</Link>
                          </h3>
                          <h5>Today • 09:35 PM</h5>
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">4.7</span>
                        </div>
                      </div>
                    </div>
                    <div className="review-content no-padding">
                      <h4>This seller was great overall. </h4>
                      <p className="mb-0">
                        This seller was great overall. One thing I noticed was that there
                        was one logo out of the 4 I got that stood out amongst the others.
                        Now I loved that one logo but the other ones did not look like
                        much thought were put into them and they were a little
                        disappointing. It is understandable for the price for them to only
                        put effort into one logo, which like I said I loved. I think it
                        would be better to tell this seller to make one good logo and to
                        provide 3 other logos that work off the one good logo. Maybe make
                        that one good logo and then change colors and fonts for the other
                        3. But overall this seller was great!
                      </p>
                      <div className="review-top tab-reviews d-flex align-items-center">
                        <div className="review-img">
                          <Link to="userDetails.html">
                            <img
                              className="img-fluid"
                              src={Review_02}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="review-info">
                          <h3>
                            <Link to="userDetails.html">trentburns</Link>
                          </h3>
                          <h5>Yesterday • 09:35 PM</h5>
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">4.7</span>
                        </div>
                      </div>
                    </div>
                    <div className="review-content no-padding">
                      <h4>Great help given and work</h4>
                      <p className="mb-0">
                        Great help given and work was done as asked on time! :)
                      </p>
                      <div className="review-top tab-reviews d-flex align-items-center">
                        <div className="review-img">
                          <Link to="userDetails.html">
                            <img
                              className="img-fluid"
                              src={Review_03}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="review-info">
                          <h3>
                            <Link to="userDetails.html">mabdz</Link>
                          </h3>
                          <h5>Sep 3 • 6:57 AM</h5>
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">4.7</span>
                        </div>
                      </div>
                    </div>
                    <div className="review-content no-padding">
                      <h4>very quick &amp; smart.</h4>
                      <p className="mb-0">
                        very quick &amp; smart. Recommend him for any web related work
                      </p>
                      <div className="review-top tab-reviews d-flex align-items-center">
                        <div className="review-img">
                          <Link to="userDetails.html">
                            <img
                              className="img-fluid"
                              src={Review_02}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="review-info">
                          <h3>
                            <Link to="userDetails.html">creativerr</Link>
                          </h3>
                          <h5>Aug 12 • 9:37 AM</h5>
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">4.7</span>
                        </div>
                      </div>
                    </div>
                    <div className="review-content no-padding">
                      <h4>always amaze me with his skills</h4>
                      <p className="mb-0">
                        always amaze me with his skills. Recommend this top rated seller
                        for anyone. Absolute best of best
                      </p>
                      <div className="review-top tab-reviews d-flex align-items-center">
                        <div className="review-img">
                          <Link to="userDetails.html">
                            <img
                              className="img-fluid"
                              src={Review_1}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="review-info">
                          <h3>
                            <Link to="userDetails.html">adirajulk</Link>
                          </h3>
                          <h5>Aug 3 • 6:57 AM</h5>
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">4.7</span>
                        </div>
                      </div>
                    </div>
                    <div className="review-content no-padding">
                      <h4>
                        They delivered great work! The delivery was prompt and the
                        communication was excellent.{" "}
                      </h4>
                      <p className="mb-0">
                        They delivered great work! The delivery was prompt and the
                        communication was excellent. I will be using them in the future
                        and recommend them to anyone who needs their services!
                      </p>
                      <div className="review-top tab-reviews d-flex align-items-center">
                        <div className="review-img">
                          <Link to="userDetails.html">
                            <img
                              className="img-fluid"
                              src={Review_03}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="review-info">
                          <h3>
                            <Link to="userDetails.html">james</Link>
                          </h3>
                          <h5>Aug 2 • 7:57 AM</h5>
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">4.7</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <Link to="#" className="btn more-btn">
                        <img
                          src={loader_icon}
                          height={24}
                          alt="User Image"
                        />
                        Load More{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
        </div>
      </div>
    </>
  )

}
export default Review;
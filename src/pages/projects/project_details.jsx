import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Images
import {
  company_img1,
  Img_01,
  Img_02,
  Img_03,
  Flags_de,
  Flags_us,
  Flags_es,
  Exp_Icon_01,
  Exp_Icon_02,
  Exp_Icon_03,
  Exp_Icon_04,
  Exp_Icon_05,
  Exp_Icon_06,
  home_icon,
  Icon_15,
  Icon_14,
  Icon_13,
  Icon_12,
  Require_01,
  Logo,
  Logo_img,
} from "../../components/imagepath";
import Axios from "../../Axios";
import moment from "moment/moment";
import { useEnumsContext } from "../../context/EnumsContext";
import { useForm } from "react-hook-form";
import { Post } from "../../services/Api";
import { PreferencesKeys, getItem } from "../../preferences/Preferences";

const ProjectDetails = (props) => {
  const { enumsState } = useEnumsContext();
  const [details, setDetails] = useState({});
  const [authKey, setAuthKey] = useState(false);
  const { projectId } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const submitProposals = async (e) => {
    e.project = projectId;
    e.estimateType = 1;
    try {
      await Post(`api/v1/proposal/createUpdate`, e, {
        Authorization: `Bearer ${authKey.token}`,
      });
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  const getDetails = async () => {
    const response = await Axios.get(
      `/api/v1/project/projectDetails/${projectId}`
    );
    setAuthKey((await getItem(PreferencesKeys.authKey)) || false);
    setDetails(response?.data?.doc?.project);
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <>
        {/* Breadcrumb */}
        <div className="bread-crumb-bar">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <div className="breadcrumb-list">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">
                          <img src={home_icon} alt="" /> Home
                        </Link>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        PROJECT DETAILS
                      </li>
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
              <div className="col-lg-8 col-md-12">
                <div className="developer-box project-box-view">
                  <h2>{details?.title}</h2>
                  <h3>
                    <Link to="company-profile.html">
                      {details?.createdBy?.displayName}
                    </Link>{" "}
                    <i className="fas fa-check-circle" />
                  </h3>
                  <ul className="develope-list-rate project-rate align-items-center">
                    <li>
                      <i className="fas fa-clock" />
                      Poster {new Date(details?.createdAt).getHours()} hours ago
                    </li>
                    <li className="full-time">
                      {enumsState?.SupportTypes[details?.supportType]?.text}
                    </li>
                  </ul>
                  <div className="proposal-box">
                    <div className="proposal-value">
                      <h4>$ {details?.fixedPrice} </h4>
                      <span>( Per Hour )</span>
                    </div>
                    <Link
                      data-bs-toggle="modal"
                      to="#hire"
                      className="btn favourites-btn btn-primary favour-border"
                    >
                      Favourite <i className="fas fa-heart" />
                    </Link>
                    <Link
                      data-bs-toggle="modal"
                      to="#file"
                      className="btn proposal-btn btn-primary"
                      // onClick={showModal(true)}
                    >
                      Send Proposal{" "}
                      <i className="fas fa-long-arrow-alt-right" />{" "}
                    </Link>
                  </div>
                </div>
                <div className="pro-view project-details-view">
                  {/* Job Detail */}
                  <div className="post-widget">
                    <div className="pro-content">
                      <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex">
                          <div className="pro-post job-type d-flex align-items-center">
                            <div className="pro-post-head">
                              <p>Job Expiry </p>
                              <h6>
                                {moment(details?.expiresIn)?.format("D")} Days{" "}
                                {moment(details?.expiresIn)?.format("H")} Hours
                                Left
                              </h6>
                            </div>
                            <div className="post-job-icon blue-color">
                              <img className="img-fluid" alt="" src={Icon_15} />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex">
                          <div className="pro-post job-type d-flex align-items-center">
                            <div className="pro-post-head">
                              <p>Location</p>
                              <h6>
                                <img src={Flags_de} height={16} alt="Lang" />{" "}
                                {details?.location}
                              </h6>
                            </div>
                            <div className="post-job-icon orange-color">
                              <img className="img-fluid" alt="" src={Icon_14} />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex">
                          <div className="pro-post job-type d-flex align-items-center">
                            <div className="pro-post-head">
                              <p>Proposals</p>
                              <h6>{details?.proposals?.length} Received</h6>
                            </div>
                            <div className="post-job-icon pink-color">
                              <img className="img-fluid" alt="" src={Icon_13} />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex">
                          <div className="pro-post job-type d-flex align-items-center">
                            <div className="pro-post-head">
                              <p>Price type</p>
                              <h6>
                                {details?.pricingType === 2
                                  ? `${details?.hourlyMin} - ${details?.hourlyMax}/h`
                                  : details?.fixedPrice}
                              </h6>
                            </div>
                            <div className="post-job-icon green-color">
                              <img className="img-fluid" alt="" src={Icon_12} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-widget project-duration">
                    <div className="pro-content">
                      <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 d-flex">
                          <div className="pro-post job-type d-flex align-items-center">
                            <div className="pro-post-head">
                              <p>Provider Type</p>
                              <h6>
                                {" "}
                                {
                                  enumsState?.ProviderTypes[
                                    details?.providerType - 1
                                  ]?.text
                                }{" "}
                              </h6>
                            </div>
                            <div className="post-job-icon">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Exp_Icon_01}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 d-flex">
                          <div className="pro-post job-type d-flex align-items-center">
                            <div className="pro-post-head">
                              <p>Project Duration</p>
                              <h6>
                                {moment(details?.expiresIn)?.format("D")} Days{" "}
                                {moment(details?.expiresIn)?.format("H")} Hours
                              </h6>
                            </div>
                            <div className="post-job-icon">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Exp_Icon_02}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 d-flex">
                          <div className="pro-post job-type d-flex align-items-center">
                            <div className="pro-post-head">
                              <p>Level </p>
                              <h6>
                                {
                                  enumsState?.SupportLevels[
                                    details?.supportLevelType - 1
                                  ]?.text
                                }
                              </h6>
                            </div>
                            <div className="post-job-icon">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Exp_Icon_03}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 d-flex">
                          <div className="pro-post job-type d-flex align-items-center">
                            <div className="pro-post-head">
                              <p>Job Type</p>
                              <h6>
                                {
                                  enumsState?.ProviderTypes[
                                    details?.providerType - 1
                                  ]?.text
                                }
                              </h6>
                            </div>
                            <div className="post-job-icon">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Exp_Icon_04}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 d-flex">
                          <div className="pro-post job-type d-flex align-items-center">
                            <div className="pro-post-head">
                              <p>Experience</p>
                              <h6>
                                {" "}
                                {
                                  enumsState?.ExperienceLevels[
                                    details?.experienceLevelType - 1
                                  ]?.text
                                }{" "}
                              </h6>
                            </div>
                            <div className="post-job-icon">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Exp_Icon_05}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 d-flex">
                          <div className="pro-post job-type d-flex align-items-center">
                            <div className="pro-post-head">
                              <p>Qualifications</p>
                              <h6>
                                {
                                  enumsState?.QualificationTypes[
                                    details?.qualificationType - 1
                                  ]?.text
                                }
                              </h6>
                            </div>
                            <div className="post-job-icon">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Exp_Icon_06}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Job Detail */}
                  {/* Senior Animator  */}
                  <div className="pro-post widget-box">
                    <h3 className="pro-title">Senior Animator</h3>
                    <div className="pro-content">
                      <p>{details?.description}</p>
                      {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque tempor aliquam felis, nec condimentum ipsum
                        commodo id. Vivamus sit amet augue nec urna efficitur
                        tincidunt. Vivamus consectetur aliquam lectus commodo
                        viverra. Nunc eu augue nec arcu efficitur faucibus.{" "}
                      </p> */}
                    </div>
                  </div>
                  {/* /Senior Animator  */}
                  {/* Skills Required  */}
                  <div className="pro-post project-widget widget-box">
                    <h3 className="pro-title">Skills Required</h3>
                    <div className="pro-content">
                      <div className="tags">
                        {details?.skills?.map((skill) => (
                          <Link key={skill?._id} to="javascript:void(0);">
                            <span className="badge badge-pill badge-design">
                              {skill?.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* /Skills Required  */}
                  {/* Project Requirements  */}
                  <div className="pro-post project-widget widget-box">
                    <h3 className="pro-title">project requirements</h3>
                    <div className="pro-content">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="requirement-img">
                            <Link to="#">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Require_01}
                              />
                            </Link>
                            <div className="file-name">
                              <h4>Filename</h4>
                              <h5>PDF</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="requirement-img">
                            <Link to="#">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Require_01}
                              />
                            </Link>
                            <div className="file-name">
                              <h4>Filename</h4>
                              <h5>DOCX</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Project Requirements  */}
                </div>
              </div>
              {/* Blog Sidebar */}
              <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar project-client-view">
                <div className="freelance-widget widget-author mt-2 pro-post">
                  <div className="freelance-content">
                    <div className="author-heading">
                      <div className="profile-img">
                        <Link to="company-profile.html">
                          <img src={company_img1} alt="author" />
                          <span className="project-verified">
                            <i className="fas fa-check-circle" />
                          </span>
                        </Link>
                      </div>
                      <div className="profile-name">
                        <div className="author-location">
                          <Link to="company-profile.html">
                            {details?.createdBy?.displayName}
                          </Link>
                        </div>
                      </div>
                      <div className="freelance-info">
                        <h4>{details?.createdBy?.tagline}</h4>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star " />
                          <i className="fas fa-star" />
                          <span className="average-rating">4.7 (32)</span>
                        </div>
                        <div className="freelance-location">
                          <i className="fas fa-map-marker-alt me-1" />
                          {details?.location}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-lg btn-primary rounded-pill"
                      >
                        <i className="fab fa-whatsapp me-2" />
                        Follow
                      </button>
                      <div className="follow-details">
                        <div className="row">
                          <div className="col-6 py-4 text-center">
                            {/* Heading */}
                            <h6 className="text-uppercase text-muted">
                              Following
                            </h6>
                            {/* Value */}
                            <h4 className="mb-0">49</h4>
                          </div>
                          <div className="col-6 py-4 text-center border-start">
                            {/* Heading */}
                            <h6 className="text-uppercase text-muted">
                              Followers
                            </h6>
                            {/* Value */}
                            <h4 className="mb-0">422</h4>
                          </div>
                        </div>
                      </div>
                      <div className="pro-member">
                        <div className="row align-items-center">
                          <div className="col">
                            <h6 className="text-start mb-0">Member Since</h6>
                          </div>
                          <div className="col-auto">
                            <span>January 1, 2021</span>
                          </div>
                        </div>
                        <hr className="my-3" />
                        <div className="row align-items-center">
                          <div className="col">
                            <h6 className=" text-start mb-0">Total Jobs</h6>
                          </div>
                          <div className="col-auto">
                            <span>127</span>
                          </div>
                        </div>
                        <hr className="my-3" />
                        <div className="row align-items-center">
                          <div className="col">
                            <h6 className=" text-start mb-0">
                              <i className="fab fa-instagram me-2" />
                              Instagram
                            </h6>
                          </div>
                          <div className="col-auto">
                            <span>@{details?.createdBy?.username}</span>
                          </div>
                        </div>
                        <hr className="my-3" />
                        {details?.createdBy?.likedin && (
                          <div className="row align-items-center">
                            <div className="col">
                              <h6 className="text-start mb-0">
                                <i className="fab fa-linkedin me-2" />
                                LinkedIn
                              </h6>
                            </div>
                            <div className="col-auto">
                              <span>{details?.createdBy?.likedin}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Attachments Widget */}
                <div className="pro-post widget-box post-widget pb-0 client-about">
                  <h3 className="pro-title">About The CLIENT</h3>
                  <div className="pro-content">
                    <div className="row">
                      <div className="col-6 d-flex">
                        <div className="pro-post client-list">
                          <p>Jobs Posted</p>
                          <h6 className="bg-red">48</h6>
                        </div>
                      </div>
                      <div className="col-6 d-flex">
                        <div className="pro-post client-list">
                          <p>Hire rate</p>
                          <h6 className="bg-blue">22</h6>
                        </div>
                      </div>
                      <div className="col-6 d-flex">
                        <div className="pro-post client-list">
                          <p>open jobs</p>
                          <h6 className="bg-violet">48</h6>
                        </div>
                      </div>
                      <div className="col-6 d-flex">
                        <div className="pro-post client-list">
                          <p>Total spent</p>
                          <h6 className="bg-yellow">22</h6>
                        </div>
                      </div>
                      <div className="col-6 d-flex">
                        <div className="pro-post client-list">
                          <p>Hires</p>
                          <h6 className="bg-pink">48</h6>
                        </div>
                      </div>
                      <div className="col-6 d-flex">
                        <div className="pro-post client-list">
                          <p>Active</p>
                          <h6 className="bg-green">22</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Attachments Widget */}
                {/* Link Widget */}
                <div className="pro-post widget-box post-widget link-project">
                  <h3 className="pro-title">Profile Link</h3>
                  <div className="pro-content pt-0">
                    <div className="form-group profile-group mb-0">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="https://www.Spedify.com/developer/daren/12454687"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-success sub-btn"
                            type="submit"
                          >
                            <i className="fa fa-clone" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Link Widget */}
                {/* Share Widget */}
                <div className="pro-post widget-box post-widget develop-social-link">
                  <h3 className="pro-title">Share</h3>
                  <ul className="social-link-profile">
                    <li>
                      <Link to="#">
                        <i className="fas fa-share-alt" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-linkedin" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-telegram" />
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* /Share Widget */}
              </div>
              {/* /Blog Sidebar */}
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* /Main Wrapper */}
        {/* The Modal */}
        <div className="modal fade custom-modal" id="hire">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="text-center pt-0 mb-4">
                  <img src={Logo_img} alt="logo" className="img-fluid mb-1" />
                  <h5 className="modal-title">
                    Discuss your project with David
                  </h5>
                </div>
                <form action="dashboard.html">
                  <div className="modal-info">
                    <div className="row">
                      <div className="col-12 col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="First name & Lastname"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            name="name"
                            className="form-control"
                            placeholder="Email Address"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            name="message"
                            rows={5}
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group row">
                          <div className="col-12 col-md-4 pr-0">
                            <label className="file-upload">
                              Add Attachment <input type="file" />
                            </label>
                          </div>
                          <div className="col-12 col-md-8">
                            <p className="mb-1">
                              Allowed file types: zip, pdf, png, jpg
                            </p>
                            <p>Max file size: 50 MB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="submit-section text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block submit-btn"
                    >
                      Hire Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /The Modal */}
        {/* The Modal */}
        <div className="modal fade" id="file">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">SEND PROPOSALS</h4>
                <span className="modal-close">
                  <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                    <i className="far fa-times-circle orange-text" />
                  </Link>
                </span>
              </div>
              <div className="modal-body">
                <div className="modal-info">
                  <form onSubmit={handleSubmit(submitProposals)}>
                    <div className="feedback-form">
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Your Price"
                            name="bidAmount"
                            {...register("bidAmount", {
                              required: "Price is required",
                            })}
                          />{" "}
                          {errors?.bidAmount && (
                            <p className="text-danger">
                              {errors?.bidAmount?.message}
                            </p>
                          )}
                        </div>
                        <div className="col-md-6 form-group">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Estimated Hours"
                            name="estimate"
                            {...register("estimate", {
                              required: "Estimated hours is required",
                            })}
                          />
                          {errors?.estimate && (
                            <p className="text-danger">
                              {errors?.estimate?.message}
                            </p>
                          )}
                        </div>
                        <div className="col-md-12 form-group">
                          <textarea
                            rows={5}
                            className="form-control"
                            placeholder="Cover Letter"
                            defaultValue={""}
                            name="coverLetter"
                            {...register("coverLetter", {
                              required: "Cover letter is required",
                            })}
                          />{" "}
                          {errors.coverLetter && (
                            <p className="text-danger">
                              {errors.coverLetter.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="proposal-features">
                      <div className="proposal-widget proposal-success">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="isStick"
                            {...register("isStick")}
                          />
                          <span className="checkmark" />
                          <span className="proposal-text">
                            Stick this Proposal to the Top
                          </span>
                          <span className="proposal-text float-end">
                            $12.00
                          </span>
                        </label>
                        <p>
                          The sticky proposal will always be displayed on top of
                          all the proposals.
                        </p>
                      </div>
                      <div className="proposal-widget proposal-light">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="isSealed"
                            {...register("isSealed")}
                          />
                          <span className="checkmark" />
                          <span className="proposal-text">
                            $ Make Sealed Proposal
                          </span>
                          <span className="proposal-text float-end">$7.00</span>
                        </label>
                        <p>
                          The sealed proposal will be sent to the project author
                          only it will not be visible publically.
                        </p>
                      </div>
                      <div className="proposal-widget proposal-danger">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="isFeatured"
                            {...register("isFeatured")}
                          />
                          <span className="checkmark" />
                          <span className="proposal-text">
                            $ Make featured proposal
                          </span>
                          <span className="proposal-text float-end">
                            $15.00
                          </span>
                        </label>
                        <p>
                          The featured proposal will have a distinctive color
                          and popped up between other proposals to get the
                          author's attention.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 submit-section">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="terms"
                            {...register("terms", {
                              required: "Please check term box",
                            })}
                          />
                          <span className="checkmark" /> I agree to the Terms
                          And Conditions
                        </label>
                        {errors.terms && (
                          <p className="text-danger">{errors.terms.message}</p>
                        )}
                      </div>
                      <div className="col-md-12 submit-section text-end">
                        <button
                          className="btn btn-primary submit-btn"
                          type="submit"
                          // data-dismiss="modal"
                          // data-bs-toggle="modal"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          to="#file"
                        >
                          SUBMIT PROPOSAL
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /The Modal */}
      </>
    </>
  );
};
export default ProjectDetails;

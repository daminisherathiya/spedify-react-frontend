import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Sidebar from '../../../commoncomponent/sidebar';
import { Line } from "react-chartjs-2";
import EditUser from './edit-user';
import Delete from './delete';

function EarningFreelancer() {


    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [

            {
                label: "Maximum",
                data: [10, 5, 12, 7, 20, 13, 17, 21, 10, 7, 10],
                fill: false,
                borderWidth: 1,
                pointBorderWidth: 1,
                borderColor: "#FF5B37"
            }
        ]
    };



    return (
        <>
            <div className='main-wrapper'>
                <Sidebar />
                {/* Page Wrapper */}
                <div className="page-wrapper">
                    <div className="content report-box container-fluid">
                        {/* Page Header */}
                        <div className="page-header page-border">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <h3 className="page-title">Reports</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/index/admin">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Reports</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 report-btns">
                                    <ul className="project-report">
                                        <li>
                                            <Link to="/admin/reports">Projects</Link>
                                        </li>
                                        <li>
                                            <Link to="/admin/project-bidding">Bidding</Link>
                                        </li>
                                        <li>
                                            <Link to="/admin/project-invoice">Invoices</Link>
                                        </li>
                                        <li className="active-project">
                                            <Link to="/admin/project-earnings">Earnings</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        {/* Project Chart */}
                        <div className="project-chart">
                            <div className="row">
                                <div className="subscribe-employe">
                                    <ul>
                                        <li>
                                            <Link to="/admin/project-earnings">Administrator </Link>
                                        </li>
                                        <li>
                                            <Link to="/admin/earning-employer">Employer</Link>
                                        </li>
                                        <li className="active">
                                            <Link to="/admin/earning-freelancer">Freelancer</Link>
                                        </li>
                                    </ul>
                                </div>
                                <>
                                    <div className="col-xl-12 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-header">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5 className="card-title">Freelancer Report</h5>
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn btn-white btn-sm dropdown-toggle"
                                                            type="button"
                                                            id="dropdownMenuButton"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            2022
                                                        </button>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <li>
                                                                <Link to="#" className="dropdown-item">
                                                                    2021
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#" className="dropdown-item">
                                                                    2022
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#" className="dropdown-item">
                                                                    2020
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div id="chart-freelance" />
                                                <Line data={data}
                                                    height={80}
                                                    options={{
                                                        legend: {
                                                            display: false,

                                                        }
                                                    }} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Project Chart */}
                                    {/* Project Download */}
                                    <div className="project-download">
                                        <div className="title-group d-flex">
                                            <h2>Freelancer Income</h2>
                                            <div className="down-load">
                                                <Link to="#" className="btn-primary">
                                                    <i className="fas fa-cloud-download-alt" />
                                                    Download
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="select-group">
                                            <div className="row">
                                                <div className="col-lg-2 col-md-6">
                                                    <select className="form-select">
                                                        <option> Date</option>
                                                        <option>Option 1</option>
                                                        <option>Option 2</option>
                                                        <option>Option 3</option>
                                                        <option>Option 4</option>
                                                        <option>Option 5</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2 col-md-6">
                                                    <select className="form-select">
                                                        <option> Reference Number</option>
                                                        <option>Option 1</option>
                                                        <option>Option 2</option>
                                                        <option>Option 3</option>
                                                        <option>Option 4</option>
                                                        <option>Option 5</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2 col-md-6">
                                                    <select className="form-select">
                                                        <option> Project name</option>
                                                        <option>Option 1</option>
                                                        <option>Option 2</option>
                                                        <option>Option 3</option>
                                                        <option>Option 4</option>
                                                        <option>Option 5</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2 col-md-6">
                                                    <select className="form-select">
                                                        <option> Payment type</option>
                                                        <option>Option 1</option>
                                                        <option>Option 2</option>
                                                        <option>Option 3</option>
                                                        <option>Option 4</option>
                                                        <option>Option 5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Project Download */}
                                    {/* Employer Project */}
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-center table-hover mb-0 datatable">
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                <div className="form-check custom-checkbox">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        id="select-all"
                                                                    />
                                                                    <label className="form-check-label" htmlFor="customCheck1" />
                                                                </div>
                                                            </th>
                                                            <th>Transaction date</th>
                                                            <th>Reference Number</th>
                                                            <th>Project Name</th>
                                                            <th>Project Value</th>
                                                            <th>Income</th>
                                                            <th>Payment type</th>
                                                            <th className="text-end">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check custom-checkbox">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        id="customCheck1"
                                                                    />
                                                                    <label className="form-check-label" htmlFor="customCheck1" />
                                                                </div>
                                                            </td>
                                                            <td>25/03/20022</td>
                                                            <td>
                                                                <Link to="to">to55454</Link>
                                                            </td>
                                                            <td>UI/UX Design</td>
                                                            <td>$450.44</td>
                                                            <td>$40.44</td>
                                                            <td>Credit card</td>
                                                            <td className="text-end subscription-end">
                                                                <Link
                                                                    to="#"
                                                                    className="btn btn-sm btn-secondary me-2"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#edit-category"
                                                                >
                                                                    <i className="far fa-edit" />
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    className="btn btn-sm btn-danger"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#delete_category"
                                                                >
                                                                    <i className="far fa-trash-alt" />
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check custom-checkbox">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        id="customCheck1"
                                                                    />
                                                                    <label className="form-check-label" htmlFor="customCheck1" />
                                                                </div>
                                                            </td>
                                                            <td>25/03/20022</td>
                                                            <td>
                                                                <Link to="to">to55454</Link>
                                                            </td>
                                                            <td>UI/UX Design</td>
                                                            <td>$450.44</td>
                                                            <td>$40.44</td>
                                                            <td>Credit card</td>
                                                            <td className="text-end subscription-end">
                                                                <Link
                                                                    to="#"
                                                                    className="btn btn-sm btn-secondary me-2"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#edit-category"
                                                                >
                                                                    <i className="far fa-edit" />
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    className="btn btn-sm btn-danger"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#delete_category"
                                                                >
                                                                    <i className="far fa-trash-alt" />
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check custom-checkbox">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        id="customCheck1"
                                                                    />
                                                                    <label className="form-check-label" htmlFor="customCheck1" />
                                                                </div>
                                                            </td>
                                                            <td>25/03/20022</td>
                                                            <td>
                                                                <Link to="#">#55454</Link>
                                                            </td>
                                                            <td>UI/UX Design</td>
                                                            <td>$450.44</td>
                                                            <td>$40.44</td>
                                                            <td>Credit card</td>
                                                            <td className="text-end subscription-end">
                                                                <Link
                                                                    to="#"
                                                                    className="btn btn-sm btn-secondary me-2"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#edit-category"
                                                                >
                                                                    <i className="far fa-edit" />
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    className="btn btn-sm btn-danger"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#delete_category"
                                                                >
                                                                    <i className="far fa-trash-alt" />
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Employer Project */}
                                    {/* /Page Wrapper */}
                                    {/* /Main Wrapper */}
                                    <EditUser />
                                    <Delete />
                                </>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EarningFreelancer;
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { home_icon } from "../../imagepath";
import { Sidebar } from '../sidebar';
import { Table } from "antd";


import { itemRender, onShowSizeChange } from "../../paginationfunction"
import "../../antdstyle.css"
const FreelancerMembership = (props) => {
  useEffect(() => {
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });
  const data = [
    {
      id:1,
      purchasedate: "15 October 2021",
      details: "The Unlimita Invoice : IVIP12023598",
      expirydate: "	15th July 2022",
      type: "Yearly",
      status: "Inactive",
      bg: "text-danger",
      price: "$200.00",
    },
    {
      id:2,
      purchasedate: "15 October 2022",
      details: "The Unlimita Invoice : IVIP12023598",
      expirydate: "15th July 2023",
      type: "Yearly",
      status: "Active",
      bg: "text-success",
      price: "$200.00",
    },
  ];
  const columns = [
    {
      title: "Purchasedate",
      dataIndex: "purchasedate",
      render: (text, record) => (
        <>{text}</>
      ),
      sorter: (a, b) => a.purchasedate.length - b.purchasedate.length,
    },
    {
      title: "Details",
      dataIndex: "details",
      render: (text, record) => (
        <> <td>
          <p className="mb-0">{text}</p>
          <Link to="#" className="read-text">
            Invoice : IVIP12023598
          </Link>
        </td></>
      ),
      sorter: (a, b) => a.details.length - b.details.length,
    },
    {
      title: "Expiry Date",
      dataIndex: "expirydate",
      render: (text, record) => (
        <>{text}</>
      ),
      sorter: (a, b) => a.expirydate.length - b.expirydate.length,
    },
    {
      title: "Type",
      dataIndex: "type",
      render: (text, record) => (
        <>{text}</>
      ),
      sorter: (a, b) => a.type.length - b.type.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => (
        <> <td className={record.bg}>{text}</td></>

      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (text, record) => (
        <>{text}</>
      ),
      sorter: (a, b) => a.price.length - b.price.length,
    },
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
                    <li className="breadcrumb-item" aria-current="page">FREELANCER
                    </li>
                    <li className="breadcrumb-item" aria-current="page">MEMBERSHIP</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-md-8">
              <div className="freelance-title" id="plan">
                <h3>Freelancer Packages</h3>
                <p> Choose the best pricing that suites your requirements</p>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="package-detail">
                    <h4>Basic Plan</h4>
                    <p>Go Pro, Best for the individuals</p>
                    <h3 className="package-price">$19.00</h3>
                    <div className="package-feature">
                      <ul>
                        <li>12 Project Credits</li>
                        <li>10 Allowed Services</li>
                        <li>20 Days visibility</li>
                        <li>5 Featured Services</li>
                        <li>20 Days visibility</li>
                        <li>30 Days Package Expiry</li>
                        <li className="non-check">Profile Featured</li>
                      </ul>
                    </div>
                    <Link to="#" className="btn btn-primary price-btn btn-block">
                      Select Plan
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="package-detail">
                    <h4>Business </h4>
                    <p>Highest selling package features</p>
                    <h3 className="package-price">$29.00</h3>
                    <div className="package-feature">
                      <ul>
                        <li>15 Project Credits</li>
                        <li>12 Allowed Services</li>
                        <li>25 Days visibility</li>
                        <li>10 Featured Services</li>
                        <li>30 Days visibility</li>
                        <li>40 Days Package Expiry</li>
                        <li>Profile Featured</li>
                      </ul>
                    </div>
                    <Link to="#" className="btn btn-primary price-btn btn-block">
                      Select Plan
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="package-detail">
                    <h4>The Unlimita </h4>
                    <p>Drive crazy, unlimited on the go</p>
                    <h3 className="package-price">$79.00</h3>
                    <div className="package-feature">
                      <ul>
                        <li>Unlimited Project Credits</li>
                        <li>Unlimited Services</li>
                        <li>Services Never Expire</li>
                        <li>20 Featured Services</li>
                        <li>Services Never Expire</li>
                        <li>Package Never Expire</li>
                        <li>Profile Featured</li>
                      </ul>
                    </div>
                    <Link to="#" className="btn btn-primary price-btn btn-block">
                      Select Plan
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="member-plan pro-box">
                    <div className="pro-head">
                      <h2>
                        <i
                          className="fa fa-check-circle orange-text"
                          aria-hidden="true"
                        />{" "}
                        Plan Details
                      </h2>
                    </div>
                    <div className="pro-body member-detail">
                      <div className="row">
                        <div className="col-6">
                          <h4 className="mb-0">The Ultima</h4>
                          <div className="yr-amt">Anually Price</div>
                          <div className="expiry-on">Expiry On</div>
                          <div className="expiry">24 JAN 2022</div>
                        </div>
                        <div className="col-6 change-plan">
                          <h3>$1200</h3>
                          <div className="yr-duration">Duration: One Year</div>
                          <Link
                            to="#plan"
                            className="btn btn-primary btn-plan black-btn"
                          >
                            Change Plan
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="pro-post">
                    <div className="project-table">
                      <div className="card-body">
                        <h4>STATEMENT</h4>
                        <div className="table-responsive table-box">
                          <table className="table table-center table-hover datatable">
                            <thead className="thead-pink">
                              <tr>
                              <Table
                                pagination={{
                                  total: data.length,
                                  showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                                  showSizeChanger: true, onShowSizeChange: onShowSizeChange, itemRender: itemRender
                                }}
                                className="table role"
                                style={{ overflowX: "auto" }}
                                columns={columns}
                                dataSource={data}
                                rowKey={(record) => record.id} />
                                </tr>
                            </thead>
                          </table>
                        </div>
                        {/* pagination */}
                        
                        {/* pagination */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
export default FreelancerMembership;
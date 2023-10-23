import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { home_icon } from "../../imagepath";
import { Sidebar } from '../sidebar';
import { Table } from "antd";
import { itemRender, onShowSizeChange } from "../../paginationfunction"
import "../../antdstyle.css"
// import "../../../antdstyle.css"

const Milestone = (props) => {
  useEffect(() => {
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });
  const data = [
    {
      id:1,
      name: "Research",
      budget: "$60",
      progress: "25%",
      style: "25%",
      startdate: "02th October 2021",
      enddate: "31th October 2021",
      paid: "Paid",
      bg1: "badge badge-pill bg-success-dark",
      actions: "Pay now",
      bg: "badge badge-pill bg-grey-light",

    },
    {
      id:2,
      name: "Design",
      budget: "$50",
      progress: "50%",
      style: "50%",
      startdate: "15th October 2021",
      enddate: "18th October 2021",
      paid: "Paid",
      bg1: "badge badge-pill bg-success-dark",
      actions: "Pay now",
      bg: "badge badge-pill bg-pink-dark",

    },
    {
      id:3,
      name: "Research",
      budget: "$60",
      progress: "75%",
      style: "75%",
      startdate: "20th October 2021",
      enddate: "31th October 2021",
      paid:"UnPaid",
      bg1: "badge badge-pill bg-grey-dark",
      actions: "Pay now",
      bg: "badge badge-pill bg-pink-dark",
    },
    {
      id:4,
      name: "Development",
      budget: "$60",
      progress: "60%",
      style: "60%",
      startdate: "05th October 2021",
      enddate: "12th October 2021",
      paid:"Unpaid",
      bg1: "badge badge-pill bg-grey-dark",
      actions: "Pay now",
      bg: "badge badge-pill bg-pink-dark",
    },


  ];

  const columns = [

    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <>{text}</>
      ),
      sorter: (a, b) => a.name.length - name.length,
    },
    {
      title: "Budget",
      dataIndex: "budget",
      render: (text, record) => (
        <>{text}</>
      ),
      sorter: (a, b) => a.budget.length - b.budget.length,
    },
    {
      title: "Progress",
      dataIndex: "progress",
      render: (text, record) => (
        <><td>
          <p className="mb-0 orange-text text-center">{text}</p>
          <div className="progress progress-md mb-0">
            <div className="progress-bar bg-danger" role="progressbar" style={{ width: record.style }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </td></>
      ),
      sorter: (a, b) => a.progress.length - b.progress.length,
    },
    {
      title: "Start Date",
      dataIndex: "startdate",
      render: (text, record) => (
        <>{text}</>
      ),
      sorter: (a, b) => a.startdate.length - b.startdate.length,
    },
    {
      title: "End date",
      dataIndex: "enddate",
      render: (text, record) => (
        <>{text}</>
      ),
      sorter: (a, b) => a.enddate.length - b.enddate.length,
    },
    {
      title: "Paid",
      dataIndex: "paid",
      render: (text, record) => (
        // <span className="badge badge-pill bg-success-dark">{text}</span>
        <> <td className={record.bg1}>{text}</td></>

      ),
      sorter: (a, b) => a.paid.length - b.paid.length,
    },

    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        // <><td><Link to=""><span className="badge badge-pill bg-grey-light">{text}</span></Link></td></>
        <> <td className={record.bg}>{text}</td></>
      ),
      sorter: (a, b) => a.actions.length - b.actions.length,
    },
  ];

  return (
    <>
      {/* {/* Breadcrumb */}
      <div className="bread-crumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <div className="breadcrumb-list">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/"><img src={home_icon} alt="Post Author" /> Home</Link></li>
                    <li className="breadcrumb-item" aria-current="page">Employee</li>
                    <li className="breadcrumb-item" aria-current="page">Milestones</li>
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
                <Sidebar />
              </StickyBox>
            </div>
            {/* /sidebar */}
            <div className="col-xl-9 col-md-8">
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link className="nav-link" to="/view-project-detail">
                      Overview &amp; Discussions
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/milestones">
                      Milestones
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/tasks">
                      Tasks
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/files">
                      Files
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/project-payment">
                      Payments
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="my-projects-view">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="">
                      <div className="card ">
                        <div className="card-header">
                          <div className="row justify-content-between align-items-center">
                            <div className="col">
                              <h5 className="card-title">Milestone</h5>
                            </div>
                            <div className="col-auto">
                              <Link
                                data-bs-toggle="modal"
                                to="#file"
                                className="btn btn-primary btn-rounded"
                              >
                                <i className="fas fa-plus" /> Add Milestone
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
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
          {/* /Page Content */}
          {/* The Modal */}
          <div className="modal fade" id="file">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Add Files</h4>
                  <span className="modal-close">
                    <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                      <i className="far fa-times-circle orange-text" />
                    </Link>
                  </span>
                </div>
                <div className="modal-body">
                  <form >
                    <div className="modal-info">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Milestone Name</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Budget</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Start Date</label>
                            <input
                              type="text"
                              className="form-control datetimepicker"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>End Date</label>
                            <input
                              type="text"
                              className="form-control datetimepicker"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Progress</label>
                            <div className="slidecontainer">
                              <input
                                type="range"
                                min={1}
                                max={100}
                                defaultValue={50}
                                className="rangslider"
                                id="myRange"
                              />
                              <p className="text-muted">
                                Progress <span id="demo" /> %
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Description</label>
                            <textarea
                              className="form-control"
                              rows={5}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submit-section text-end">
                      <button type="submit" className="btn btn-primary submit-btn">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )

}
export default Milestone;
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Img_04, Flags_en, home_icon } from "../../imagepath";
import { Sidebar } from '../sidebar';
import { Table } from "antd";


import { itemRender, onShowSizeChange } from "../../paginationfunction"
import "../../antdstyle.css"

const Task = (props) => {
  useEffect(() => {
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });
  const data = [
    {
      id:1,
      taskname: "Research",
      milestone: "Research",
      duedate: "20th Oct 2021",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
      bg1 : "Readmore",
      status: "Completed",
      bg: "text-success",
      action: "",
    },
    {
      id:2,
      taskname: "Design",
      milestone: "Design",
      duedate: "21th Nov 2021",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
      bg1 : "Readmore",
      status: "Todo",
      bg: "text-danger",
      action: "",

    },
    {
      id:3,
      taskname: "Development",
      milestone: "Development",
      duedate: "23rd Nov 2021",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
      bg1 : "Readmore",
      status: "Completed",
      bg: "text-success",
      action: "",

    },
  ];

  const columns = [

    {
      title: "Task Name",
      dataIndex: "taskname",
      render: (text, record) => (
        <>{text}</>
      ),
      sorter: (a, b) => a.taskname.length - b.taskname.length,
    },
    {
      title: "Milestone",
      dataIndex: "milestone",
      render: (text, record) => (
        <>{text}</>
      ),
      sorter: (a, b) => a.milestone.length - b.milestone.length,
    },
    {
      title: "Due Date",
      dataIndex: "duedate",
      render: (text, record) => (
        <>{text}</>
      ),
      sorter: (a, b) => a.duedate.length - b.duedate.length,
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (text, record) => (
        <>
         <p className="mb-0">{record.description}</p><Link to="#" className="read-text">{record.bg1}</Link>
        </>
      ),
      sorter: (a, b) => a.description.length - b.description.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => (
        <><td className={record.bg}>{text}</td></>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <><td>
        <div className="action">
          <Link
            data-bs-toggle="modal"
            to="#edit-file"
            className="file-circle me-2"
          >
            <i className="fas fa-pen" />
          </Link>
          <Link
            to=""
            className="file-circle"
          >
            <i className="fas fa-trash-alt" />
          </Link>
        </div>
      </td></>
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
      <div className="content content-page ">
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
                    <Link className="nav-link" to="/milestones">
                      Milestones
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/tasks">
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
              {/* project list */}
              <div className="my-projects-view">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="">
                      <div className="card">
                        <div className="card-header">
                          <div className="row justify-content-between align-items-center">
                            <div className="col">
                              <h5 className="card-title">Tasks</h5>
                            </div>
                            <div className="col-auto">
                             <Link
                                data-bs-toggle="modal"
                                to="#file"
                                className="btn btn-primary btn-rounded"
                              >
                                <i className="fas fa-plus" /> Add tasks
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
                          {/* pagination*/}
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
              <form>
                <div className="modal-info">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Add Task</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Select Milestone</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Due Date</label>
                        <input type="text" className="form-control" />
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
                    <div className="col-md-6">
                      <select className="form-control select">
                        <option>To do </option>
                        <option>Completed</option>
                      </select>
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
      {/* /The Modal */}
      {/* The Modal */}
      <div className="modal fade" id="edit-file">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Files</h4>
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
                        <label>Add Task</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Research"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Select Milestone</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Research"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Due Date</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="20th October 2021"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Description</label>
                        <textarea
                          className="form-control"
                          rows={5}
                          defaultValue={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <select className="form-control select">
                        <option>To do </option>
                        <option>Completed</option>
                      </select>
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
      {/* /The Modal */}
    </>
  )

}
export default Task;
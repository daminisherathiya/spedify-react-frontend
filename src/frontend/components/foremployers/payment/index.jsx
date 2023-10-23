import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { company_img1, company_img2, company_img3, company_img4, company_img5, home_icon } from "../../imagepath";
import { Sidebar } from '../sidebar';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css"

const Payment = (props) => {
  useEffect(() => {
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });
  const data = [
    {
      id:1,
      image: company_img1,
      client: "Amaze Tech",
      name: "Research",
      typeofpayment: "Milestone",
      bg:"badge badge-pill bg-outline-red",
      payment: "$54",
      status: "Completed",
      bg1: "badge badge-pill bg-outline-green",
      datepaid: " 20th October 2018",
      invoice: "",
    },
    {
      id:2,
      image: company_img2,
      client: "Park Inc",
      name: "Design",
      typeofpayment: "Milestone",
      bg: "badge badge-pill bg-outline-red",
      payment: "$52",
      status: "Completed",
      bg1: "badge badge-pill bg-outline-green",
      datepaid: "25th October 2018",
      invoice: "",

    },
    {
      id:3,
      image: company_img3,
      client: "Tech Zone",
      name: "Development",
      typeofpayment: "Milestone",
      bg: "badge badge-pill bg-outline-red",
      payment: "$40",
      status: "Completed",
      bg1: "badge badge-pill bg-outline-green",
      datepaid: "28th October 2018",
      invoice: "",
    },
    {
      id:4,
      image: company_img4,
      client: "Abc Software",
      name: "Research",
      typeofpayment: "Milestone",
      bg: "badge badge-pill bg-outline-red",
      payment: "$25",
      status: "Completed",
      bg1: "badge badge-pill bg-outline-green",
      datepaid: "29th October 2018",
      invoice: "",
    },
    { 
      id:5,
      image: company_img5,
      client: "Host Technologies",
      name: "Development",
      typeofpayment: "Milestone",
      bg: "badge badge-pill bg-outline-red",
      payment: "$32",
      status: "Completed",
      bg1: "badge badge-pill bg-outline-green",
      datepaid: "24th October 2018",
      invoice: "",
    },
  ];

  const columns = [

    {
      title: "Client",
      dataIndex: "client",
      render: (text, record) => (
        <><td>
          <img
            src={record.image}
            className="img-fluid avatar-md rounded-circle me-2"
            alt="Logo"
          />{text} 
        </td>
        </>
      ),
      sorter: (a, b) => a.client.length - b.client.length,
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <>{text}</>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Type of Payment",
      dataIndex: "typeofpayment",
      render: (text, record) => (
        <><td className={record.bg}>{text}</td></>
      ),
      sorter: (a, b) => a.typeofpayment.length - b.typeofpayment.length,
    },
    {
      title: "Payment",
      dataIndex: "payment",
      render: (text, record) => (
        <>{text}</>
      ),
      sorter: (a, b) => a.payment.length - b.payment.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => (
        <><td className={record.bg1}>{text}</td></>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Date Paid",
      dataIndex: "datepaid",
      render: (text, record) => (
        <>{text}</>
      ),
      sorter: (a, b) => a.datepaid.length - b.datepaid.length,
    },
    {
      title: "Invoice",
      dataIndex: "invoice",
      render: (text, record) => (
        <><td>
          <Link to="#" className="file-circle">
            <i className="far fa-copy" />
          </Link>
        </td></>
      ),
      sorter: (a, b) => a.invoice.length - b.invoice.length,
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
                    <Link className="nav-link" to="/milestones">
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
                    <Link className="nav-link active" to="/project-payment">
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
                          <h5 className="card-title">Payments</h5>
                        </div>
                        <div className="card-body">
                          <div className="table-responsive table-box">
                            <table className="table table-center table-hover datatable">
                              <thead className="thead-pink">
                                
                                {/* </tbody> */}
                                <Table className="table-striped"
                                  pagination={{
                                    total: data.length,
                                    showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                                    showSizeChanger: true, onShowSizeChange: onShowSizeChange, itemRender: itemRender
                                  }}
                                  style={{ overflowX: 'auto' }}
                                  columns={columns}
                                  // bordered
                                  dataSource={data}
                                  rowKey={record => record.id}
                                // onChange={this.handleTableChange}
                                />
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
      </div>
      {/* /Page Content */}
    </>
  )

}
export default Payment;
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Card, Icon_19, Logo_01, Wallet_icon_1, Wallet_icon_2, Wallet_icon_3, home_icon } from "../../imagepath";
import { Sidebar } from '../sidebar';
import { Table } from 'antd';
// import 'antd/dist/antd.css';
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css"
const DepositFunds = (props) => {
  useEffect(() => {
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });
  const data = [
    {
      id:1,
      date: "",
      recipient: "Amaze Tech",
      transactionid: "",
      status: "Settled",
      amount: "+ $150",
      bg:"text-success",
      icon:"fas fa-check-circle"
    },
    {
      id:2,
      date: "",
      recipient: "Amaze Tech",
      transactionid: "",
      status: "Settled",
      amount: "+ $150",
      bg:"text-success",
      icon:"fas fa-check-circle"
    },
    {
      id:3,
      date: "",
      recipient: "Amaze Tech",
      transactionid: "",
      status: "Settled",
      amount: "+ $150",
      bg:"text-success",
      icon:"fas fa-check-circle"
    },
    { 
      id:4,
      date: "",
      recipient: "Amaze Tech",
      transactionid: "",
      status1: Icon_19,
      status:"process",
      amount: "+ $150",
      bg:"text-danger",
    },
    {
      id:5,
      date: "",
      recipient: "Amaze Tech",
      transactionid: "",
      status: "Success",
      amount: "+ $150",
      bg:"text-danger",
      icon:"fas fa-check-circle"
    },
    {
      id:6,
      date: "",
      recipient: "Amaze Tech",
      transactionid: "",
      status: "Settled",
      amount: "+ $150",
      bg:"text-success",
      icon:"fas fa-check-circle"
    },
    {
      id:7,
      date: "",
      recipient: "Amaze Tech",
      transactionid: "",
      status: "Settled",
      amount: "+ $150",
      bg:"text-success",
      icon:"fas fa-check-circle"
    },
  ];

  const columns = [

    {
      title: "Date",
      dataIndex: "date",
      render: (text, record) => (
        <><td>
          16 Sep 2021
          <br />
          <span>Today • 09:35 PM</span>{text}
        </td></>
      ),
      sorter: (a, b) => a.date.length - b.date.length,
    },
    {
      title: "Recipient",
      dataIndex: "recipient",
      render: (text, record) => (
        <>{text}</>
      ),
      sorter: (a, b) => a.recipient.length - b.recipient.length,
    },
    {
      title: "Transaction Id",
      dataIndex: "transactionid",
      render: (text, record) => (
        <><td>
          3CW 4925 C715314
          <br />
          <span>Yesterday • 10:24 PM</span>{text}
        </td></>
      ),
      sorter: (a, b) => a.transactionid.length - b.transactionid.length,
    },
    {
      title: "Status",
      dataIndex: " status",
      render: (text, record) => (
<td>
 
    <i className={record.icon} />
  
   <img src={record.status1}  />{record.status}
 
</td>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (text, record) => (
        <><td className={record.bg}>{text}</td>
        </>
      ),
      sorter: (a, b) => a.amount.length - b.amount.length,
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
                    <li className="breadcrumb-item" aria-current="page">Employee</li>
                    <li className="breadcrumb-item" aria-current="page">PAYMENTS</li>
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
            <div className="col-xl-9 col-md-8">
              <div className="transaction-table1 card">
                <div className="card-header">
                  <div className="row justify-content-between align-items-center">
                    <div className="col">
                      <h5 className="card-title">Wallet</h5>
                    </div>
                    <div className="col-auto d-flex align-items-center flex-wrap transaction-shortby wallet-btn">
                      <Link
                        data-bs-toggle="modal"
                        to="#wallet"
                        className="btn btn-primary"
                      >
                        <i className="fas fa-plus" /> ADD WALLET
                      </Link>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-4 col-md-12 d-flex">
                          <div className="wallet-group d-flex align-items-center">
                            <div className="wallet-img">
                              <img
                                className="img-fluid"
                                src={Wallet_icon_1}
                                alt=""
                              />
                            </div>
                            <div className="balance-total">
                              <h3>Available Balance</h3>
                              <h2>$250.60</h2>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12 d-flex">
                          <div className="wallet-group total-credit d-flex align-items-center">
                            <div className="wallet-img">
                              <img
                                className="img-fluid"
                                src={Wallet_icon_2}
                                alt=""
                              />
                            </div>
                            <div className="balance-total">
                              <h3>Total Credit</h3>
                              <h2>$250.60</h2>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12 d-flex">
                          <div className="wallet-group total-depit d-flex align-items-center">
                            <div className="wallet-img">
                              <img
                                className="img-fluid"
                                src={Wallet_icon_3}
                                alt=""
                              />
                            </div>
                            <div className="balance-total">
                              <h3>Total Debit</h3>
                              <h2>$250.60</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="transaction-table card">
                    <div className="card-header">
                      <div className="row justify-content-between align-items-center">
                        <div className="col">
                          <h5 className="card-title">Transaction History</h5>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive table-box wallet-history">
                        <table className="table datatable">
                          <thead>
                            <tr className="thead-pink">
                            
      
                            {/* </tbody> */}
                            <Table className="table-striped"
                                  pagination={{
                                    total: data.length,
                                    showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                                    showSizeChanger: true, onShowSizeChange: onShowSizeChange, itemRender: itemRender
                                  }}
                                  style={{ overflowX: 'auto' }}
                                  columns={columns}
                                  dataSource={data}
                                  rowKey={record => record.id}
                               
                                />
                                </tr>
                          </thead>
                        </table>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /sidebar */}
          </div>
        </div>
      </div>
      {/* pagecontent */}

      {/* /Page Content */}
      {/* The Modal */}
      <div className="modal fade wallet-rupee" id="wallet">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-close">
                <Link to ="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="far fa-times-circle orange-text" />
                </Link>
              </span>
            </div>
            <div className="modal-body">
              <div className="payment-list wallet card-body wallet-list">
                <div className="wallet-head text-center">
                  <img
                    className="img-fluid"
                    src={Logo_01}
                    alt="app-store"
                  />
                  <h2>Add wallet</h2>
                </div>
                <div className="form-group profile-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <button className="dol-btn" type="submit">
                        $
                      </button>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <label className="radio-inline custom_radio me-4">
                  <input type="radio" name="optradio" defaultChecked="" />
                  <span className="checkmark" /> Paypal
                </label>
                <label className="radio-inline custom_radio">
                  <input type="radio" name="optradio" />
                  <span className="checkmark" /> Card
                </label>
                <div className="bootstrap-tags text-start ps-0">
                  <span className="badge badge-pill badge-skills">$50</span>
                  <span className="badge badge-pill badge-skills">$100</span>
                  <span className="badge badge-pill badge-skills">$150</span>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="card_number">Card Number</label>
                      <input
                        className="form-control"
                        id="card_number"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="first_name">First Name</label>
                      <input className="form-control" id="first_name" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="last_name">Last Name</label>
                      <input className="form-control" id="last_name" type="text" />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group">
                      <label htmlFor="expiry_on">Expires on</label>
                      <input className="form-control" id="expiry_on" type="text" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="cvv">CVV (Security Code) </label>
                      <input className="form-control" id="cvv" type="text" />
                    </div>
                  </div>
                  <div className="col-md-8 btn-pad">
                    <Link to ="#" className="click-btn btn-primary">
                      Continue
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /The Modal */}
    </>
  )

}
export default DepositFunds;
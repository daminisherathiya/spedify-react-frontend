import React from 'react'
import { Link } from 'react-router-dom';


// {setShow3,toggleSetShowTwo,setShow2,toggleSetShowThree}
const ProfessionalInfoEmp = ({ nextTabEmp2, prevTabEmp2 }) => {
    

    return (
        <>
            {/* Professional Info */}
            <div className=" field-card select-account select-btn">
                <div className="text-center onboard-head">
                    <h2>Professional info</h2>
                    <p>This is your time to shine. Let potential buyers know what you do best and how you gained your skills, certifications and experience</p>
                </div>
                <div className="field-item personal-info space-info">
                    <div id="individual">
                        <div className="row">
                            <div className="col-md-12 col-lg-2">
                                <label className="focus-label">Company Name <span>*</span></label>
                            </div>
                            <div className="col-md-12 col-lg-10">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Ex : UI UX Design" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-2">
                                <label className="focus-label">Team Size <span>*</span></label>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <div className="form-group">
                                    <input type="text" className="form-control" defaultValue="1-10" />
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <div className="form-group">
                                    <input type="text" className="form-control" defaultValue="10-100" />
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-2">
                                <div className="form-group">
                                    <input type="text" className="form-control" defaultValue="100-500" />
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-2">
                                <div className="form-group">
                                    <input type="text" className="form-control" defaultValue="500-1000" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-2 col-xl-2">
                                <label className="focus-label">Company Logo <span>*</span></label>
                            </div>
                            <div className="col-md-6 col-lg-10 col-xl-10">
                                <div className="pro-form-img">
                                    <label className="file-upload image-upbtn ">
                                        Upload Logo <input type="file" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-2 col-xl-2">
                                <label className="focus-label">Company Established </label>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-5">
                                <div className="form-group">
                                    <div className="cal-icon employe-cal-icon">
                                        <input className="form-control datetimepicker"  type="date"  placeholder="Enter Date" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-2">
                                <label className="focus-label">Company Contact Details <span>*</span></label>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="text" className="form-control" placeholder="Enter Phone Number" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="form-group ">
                                    <label>Email Address</label>
                                    <input type="text" className="form-control" placeholder="Enter Email Address" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-2">
                                <label className="focus-label">Website </label>
                            </div>
                            <div className="col-md-12 col-lg-10">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Type you website address here" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-2">
                                <label className="focus-label">Address</label>
                            </div>
                            <div className="col-md-12 col-lg-10">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Enter Address Line 1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Enter Address Line 2" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <select name="price" className="form-control select-level">
                                                <option value={0}>Country</option>
                                                <option value={1}>2012</option>
                                                <option value={1}>2013</option>
                                                <option value={1}>2014</option>
                                                <option value={1}>2015</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <input className="btn btn-prev prev_btn btn-back" name="next" type="button" defaultValue="Back" onClick={prevTabEmp2} />
                    <input className="btn next_btn btn-primary btn-get btn-next" name="next" type="button" defaultValue="Next" onClick={nextTabEmp2} />
                </div>
            </div>
            {/* /Professional info */}
        </>
    )
}

export default ProfessionalInfoEmp;
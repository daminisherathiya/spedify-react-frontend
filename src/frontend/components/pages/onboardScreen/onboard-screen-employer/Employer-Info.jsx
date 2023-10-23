import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar_3 } from "../../../imagepath";


export const EmployerInfo = ({ nextTabEmp1, prevTabEmp }) => {
    const [addListEmp, setAddListEmp] = useState([""]);

    const handelAddEmp = () => {
        setAddListEmp([...addListEmp, " "]);
    };
    useEffect(() => {
        console.log("jagan");
    }, []);

    const handelRemoveEmp = (index) => {
        const listEmp = [...addListEmp];
        listEmp.splice(index, 1);
        setAddListEmp(listEmp);
    };

    return (
        <>
            <div className=" field-card select-account select-btn">
                <div className="text-center onboard-head">
                    <h2>Employer Info</h2>
                    <p>
                        Tell a bit about yourself. This information will appear on your
                        public profile, so that potential buyers can get to know you better.
                    </p>
                </div>
                <div className="field-item personal-info space-info">
                    <form>
                        <div className="row">
                            <div className="col-md-12 col-lg-2 col-xl-2">
                                <label className="focus-label">
                                    Name <span>*</span>
                                </label>
                            </div>
                            <div className="col-md-6 col-lg-5 col-xl-5">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Eugene"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5 col-xl-5">
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Forest"
                                    />
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-2 col-xl-2">
                                <label className="focus-label">
                                    Profile picture <span>*</span>
                                </label>
                            </div>
                            <div className="col-md-12 col-lg-10 col-xl-10">
                                <div className="pro-form-img">
                                    <label className="file-upload image-upbtn ">
                                        Upload Avator <input type="file" />
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-2 col-xl-2">
                                <label className="focus-label">
                                    Contact Details <span>*</span>
                                </label>
                            </div>
                            <div className="col-md-6 col-lg-5 col-xl-5">
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="+33 43685825"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5 col-xl-5">
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="eugeneforest@example.com"
                                    />
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-2 col-xl-2">
                                <label className="focus-label">
                                    Description <span>*</span>
                                </label>
                            </div>
                            <div className="col-md-12 col-lg-10 col-xl-10">
                                <div className="form-group min-characters">
                                    <textarea
                                        className="form-control"
                                        rows={5}
                                        defaultValue={""}
                                    />
                                    <p>Min 150 characters</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-2 col-xl-2">
                                <label className="focus-label">
                                    Description <span>*</span>
                                </label>
                            </div>
                            <div className="col-md-12 col-lg-10 col-xl-10">
                                <div className="row">
                                    <div className="col-md-4 col-lg-4 col-xl-4">
                                        <div className="form-group description-group">
                                            <label>Language</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="English"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-xl-4">
                                        <div className="form-group description-group">
                                            <label>Level</label>
                                            <select
                                                name="price"
                                                className="form-control select-level"
                                                id="business-type"
                                            >
                                                <option value="Individual">Choose Level</option>
                                                <option value="Basic">Basic</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-4 col-lg-4 col-xl-4">
                                        <div className="new-addd">
                                            <Link
                                                to="#"
                                                id="new_add"
                                                className="add-new"
                                                onClick={handelAddEmp}
                                            >
                                                <i className="fas fa-plus" /> Add New
                                            </Link>
                                        </div>
                                    </div>

                                    {addListEmp.map((add, index) => (
                                        <>
                                            <div key={index} className="row">
                                                <div className="col-md-4 col-lg-4 col-xl-4">
                                                    <div className="form-group description-group">
                                                        <label>Language</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="English"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-lg-4 col-xl-4">
                                                    <div className="form-group description-group">
                                                        <label>Level</label>
                                                        <select
                                                            name="price"
                                                            className="form-control select-level"
                                                            id="business-type"
                                                        >
                                                            <option value="Individual">Choose Level</option>
                                                            <option value="Basic">Basic</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-lg-4 col-xl-4">
                                                    <Link
                                                        to="#"
                                                        style={{
                                                            color: "red",
                                                            display: "flex",
                                                            justifyContent: "end",
                                                        }}
                                                        onClick={() => handelRemoveEmp(index)}
                                                    >
                                                        Remove
                                                    </Link>
                                                </div>
                                                <div id="add_row">{addListEmp.length - 1 === index}</div>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="text-center">
                    <input
                        className="btn btn-prev prev_btn btn-back"
                        name="next"
                        type="button"
                        defaultValue="Back"
                        onClick={prevTabEmp}
                    />
                    <input
                        className="btn next_btn btn-primary btn-get btn-next"
                        name="next"
                        type="submit"
                        defaultValue="Next"
                        onClick={nextTabEmp1}
                    />
                </div>
            </div>
        </>
    );
};

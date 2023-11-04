import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// {setShow3,toggleSetShowTwo,setShow2,toggleSetShowThree}
const ProfessionalInfo = ({ nextTab2, prevTab2 }) => {

    const [addList1, setAddList1] = useState([""])
    const [addList2, setAddList2] = useState([""])
    const [addList3, setAddList3] = useState([""])
    const [addList4, setAddList4] = useState([""])

    const handelAddOne = () => {
        setAddList1([...addList1, " "])
    }

    const handelRemoveOne = (index) => {
        const list1 = [...addList1];
        list1.splice(index, 1);
        setAddList1(list1);
    };

    const handelAddTwo = () => {
        setAddList2([...addList2, " "])
    }

    const handelRemoveTwo = (award) => {
        const list2 = [...addList2];
        list2.splice(award, 1);
        setAddList2(list2);
    };

    const handelAddThree = () => {
        setAddList3([...addList3, " "])
    }

    const handelRemoveThree = (edu) => {
        const list3 = [...addList3];
        list3.splice(edu, 1);
        setAddList3(list3);
    };

    const handelAddFour = () => {
        setAddList4([...addList4, " "])
    }

    const handelRemoveFour = (design) => {
        const list4 = [...addList4];
        list4.splice(design, 1);
        setAddList4(list4);
    };

    return (
        <>
            {/* Professional Info */}
            <div className=" field-card select-account select-btn "> {/* style={{ display: setShow3 ? "block" : "none" }} */}
                <div className="text-center onboard-head">
                    <h2>Professional info</h2>
                    <p>
                        This is your time to shine. Let potential buyers know what
                        you do best and how you gained your skills, certifications
                        and experience
                    </p>
                </div>
                <div className="field-item personal-info space-info">
                    <div id="individual">
                        <div className="row">
                            <div className="col-md-12 col-lg-2">
                                <label className="focus-label">
                                    Skill <span>*</span>
                                </label>
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ex : UI UX Design"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <div className="form-group">
                                    <select
                                        name="price"
                                        className="form-control select-level"
                                    >
                                        <option value="">Intermediate</option>
                                        <option value="">Medium</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="new-addd">
                                    <Link to="#" className="add-new" id="skill_add"
                                        onClick={handelAddFour}
                                    >
                                        <i className="fas fa-plus" /> Add New
                                    </Link>
                                </div>
                            </div>
                            <div id="skill_add_row" />
                        </div>

                        {addList4.map((value, design) => (
                            <div key={design} className="row">
                                <div className="col-md-12 col-lg-2">
                                    <label className="focus-label">

                                    </label>
                                </div>
                                <div className="col-md-4 col-lg-3">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Ex : UI UX Design"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-3">
                                    <div className="form-group">
                                        <select
                                            name="price"
                                            className="form-control select-level"
                                        >
                                            <option value="">Intermediate</option>
                                            <option value="">Medium</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4">
                                    <div className="new-addd">
                                        <Link to="#" style={{ color: "red" }}
                                            onClick={() => handelRemoveFour(design)} >
                                            Remove
                                        </Link>
                                    </div>
                                </div>
                                <div id="skill_add_row" />
                            </div>
                        ))}

                        {/* Second-Add */}
                        <div className="row">
                            <div className="col-md-12 col-lg-2">
                                <label className="focus-label">Education</label>
                            </div>
                            <div className="col-md-2 col-lg-1">
                                <div className="form-group">
                                    <select
                                        name="price"
                                        className="form-control select-level select-edu"
                                    >
                                        <option value={0}>India</option>
                                        <option value={1}>Chinna</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <select
                                        name="price"
                                        className="form-control select-level"
                                    >
                                        <option value={0}>College/University Name</option>
                                        <option value={1}>University Name</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <select
                                        name="price"
                                        className="form-control select-level"
                                    >
                                        <option value={0}>Intermediate</option>
                                        <option value={1}>Average</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2 col-lg-1">
                                <div className="form-group">
                                    <select
                                        name="price"
                                        className="form-control select-level select-edu"
                                    >
                                        <option value={0}>Year</option>
                                        <option value={1}>2012</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="new-addd">
                                    <Link to="#" className="add-new" id="edu_add"
                                        onClick={handelAddThree}
                                    >
                                        <i className="fas fa-plus" /> Add New
                                    </Link>
                                </div>
                            </div>
                            <div id="education_add_row" />
                        </div>

                        {addList3.map((value, edu) => (
                            <div key={edu} className="row">
                                <div className="col-md-12 col-lg-2">
                                    <label className="focus-label"></label>
                                </div>
                                <div className="col-md-2 col-lg-1">
                                    <div className="form-group">
                                        <select
                                            name="price"
                                            className="form-control select-level select-edu"
                                        >
                                            <option value={0}>India</option>
                                            <option value={1}>Chinna</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <select
                                            name="price"
                                            className="form-control select-level"
                                        >
                                            <option value={0}>College/University Name</option>
                                            <option value={1}>University Name</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <select
                                            name="price"
                                            className="form-control select-level"
                                        >
                                            <option value={0}>Intermediate</option>
                                            <option value={1}>Average</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-2 col-lg-1">
                                    <div className="form-group">
                                        <select
                                            name="price"
                                            className="form-control select-level select-edu"
                                        >
                                            <option value={0}>Year</option>
                                            <option value={1}>2012</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="new-addd">
                                        <Link to="#" style={{ color: "red" }}
                                            onClick={() => handelRemoveThree(edu)} >
                                            Remove
                                        </Link>
                                    </div>
                                </div>
                                <div id="education_add_row" />
                            </div>
                        ))}
                        {/* /Second-Add */}

                        {/* Third-Add */}
                        <div className="row">
                            <div className="col-md-12 col-lg-2">
                                <label className="focus-label">Certification </label>
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Certification or Award"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Certified from (e.g. Adobe)"
                                    />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <select
                                        name="price"
                                        className="form-control select-level"
                                    >
                                        <option value={0}>Year</option>
                                        <option value={1}>2012</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="new-addd">
                                    <Link to="#" className="add-new" id="certify_add"
                                        onClick={handelAddTwo}
                                    >
                                        <i className="fas fa-plus" /> Add New
                                    </Link>
                                </div>
                            </div>
                            <div id="certify_add_row" />
                        </div>

                        {addList2.map((value, award) => (
                            <div key={award} className="row">
                                <div className="col-md-12 col-lg-2">
                                    <label className="focus-label"> </label>
                                </div>
                                <div className="col-md-4 col-lg-3">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Certification or Award"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-3">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Certified from (e.g. Adobe)"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <select
                                            name="price"
                                            className="form-control select-level"
                                        >
                                            <option value={0}>Year</option>
                                            <option value={1}>2012</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="new-addd">
                                        <Link to="#" style={{ color: "red" }}
                                            onClick={() => handelRemoveTwo(award)} >
                                            Remove
                                        </Link>
                                    </div>
                                </div>
                                <div id="certify_add_row" />
                            </div>
                        ))}
                        {/* /Third-Add */}

                        {/* forth-add */}
                        <div className="row">
                            <div className="col-md-12 col-lg-2">
                                <label className="focus-label">Experiance </label>
                            </div>
                            <div className="col-md-10 col-lg-8">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your position or title"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter company name"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 d-flex align-items-end">
                                        <div className="form-group">
                                            <label>Start</label>
                                            <select
                                                name="price"
                                                className="form-control select-level"
                                            >
                                                <option value="">Select Month</option>
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                                <option value="">4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex align-items-end">
                                        <div className="form-group">
                                            <select
                                                name="price"
                                                className="form-control select-level"
                                            >
                                                <option value={0}>Select Year</option>
                                                <option value={1}>2012</option>
                                                <option value={1}>2013</option>
                                                <option value={1}>2014</option>
                                                <option value={1}>2015</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex align-items-end">
                                        <div className="form-group">
                                            <label>End</label>
                                            <select
                                                name="price"
                                                className="form-control select-level"
                                            >
                                                <option value="">Select Month</option>
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                                <option value="">4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex align-items-end">
                                        <div className="form-group">
                                            <select
                                                name="price"
                                                className="form-control select-level"
                                            >
                                                <option value={0}>Select Year</option>
                                                <option value={1}>2012</option>
                                                <option value={1}>2013</option>
                                                <option value={1}>2014</option>
                                                <option value={1}>2015</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="new-addd">
                                    <Link to="#" className="add-new" id="experience_add"
                                        onClick={handelAddOne}
                                    >
                                        <i className="fas fa-plus" /> Add New
                                    </Link>
                                </div>
                            </div>

                            <div id="experience_add_row" />
                        </div>


                        {addList1.map((add, index) => (

                            <div key={index} className="row">
                                <div className="col-md-12 col-lg-2">
                                    <label className="focus-label"> </label>
                                </div>
                                <div className="col-md-10 col-lg-8">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter your position or title"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter company name"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 d-flex align-items-end">
                                            <div className="form-group">
                                                <label>Start</label>
                                                <select
                                                    name="price"
                                                    className="form-control select-level"
                                                >
                                                    <option value="">Select Month</option>
                                                    <option value="">1</option>
                                                    <option value="">2</option>
                                                    <option value="">3</option>
                                                    <option value="">4</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3 d-flex align-items-end">
                                            <div className="form-group">
                                                <select
                                                    name="price"
                                                    className="form-control select-level"
                                                >
                                                    <option value={0}>Select Year</option>
                                                    <option value={1}>2012</option>
                                                    <option value={1}>2013</option>
                                                    <option value={1}>2014</option>
                                                    <option value={1}>2015</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3 d-flex align-items-end">
                                            <div className="form-group">
                                                <label>End</label>
                                                <select
                                                    name="price"
                                                    className="form-control select-level"
                                                >
                                                    <option value="">Select Month</option>
                                                    <option value="">1</option>
                                                    <option value="">2</option>
                                                    <option value="">3</option>
                                                    <option value="">4</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3 d-flex align-items-end">
                                            <div className="form-group">
                                                <select
                                                    name="price"
                                                    className="form-control select-level"
                                                >
                                                    <option value={0}>Select Year</option>
                                                    <option value={1}>2012</option>
                                                    <option value={1}>2013</option>
                                                    <option value={1}>2014</option>
                                                    <option value={1}>2015</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="new-addd">
                                        <Link to="#" style={{ color: "red" }}
                                            onClick={() => handelRemoveOne(index)} >
                                            Remove
                                        </Link>
                                    </div>
                                </div>


                                <div id="experience_add_row" />
                            </div>

                        ))}
                        {/* /forth-add */}
                        <div className="row">
                            <div className="col-md-12 col-lg-2" />
                            <div className="col-md-12 col-lg-10">
                                <div className="form-group workin-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="remember"
                                    />{" "}
                                    I'm currently working here
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-2" />
                            <div className="col-md-10 col-lg-8">
                                <div className="form-group min-characters">
                                    <textarea
                                        className="form-control"
                                        rows={5}
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-2">
                                <label className="focus-label">Personal website </label>
                            </div>
                            <div className="col-md-10 col-lg-8">
                                <div className="form-group">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <input
                        className="btn btn-prev prev_btn btn-back"
                        name="next"
                        type="button"
                        defaultValue="Back"
                        onClick={prevTab2}
                    />
                    <input
                        className="btn next_btn btn-primary btn-get btn-next"
                        name="next"
                        type="button"
                        defaultValue="Next"
                        onClick={nextTab2}
                    />
                </div>
            </div>
            {/* /Professional info */}
        </>
    )
}

export default ProfessionalInfo;
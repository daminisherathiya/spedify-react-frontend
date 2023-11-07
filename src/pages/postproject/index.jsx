import React from "react";
import { Link } from "react-router-dom";
import { useEnumsContext } from "../../context/EnumsContext";
import { debounce } from "@material-ui/core";
import Axios from "../../Axios";
import { Post } from "../../services/Api";
import { uniqueArray } from "../../helpers";
// import ReactSummernote from 'react-summernote';
// import 'react-summernote/dist/react-summernote.css'; 
const Skills = ({ skills = [], onSkillSelect = () => { }, hide = () => { } }) => {
  if (!skills.length) return null;
  else return (
    <div className="list-row">
      <div className="list-container">
        <div className="card">
          {skills.map((skill, j) => (
            <div key={`skill-key-${j}`} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <p
                className="list-text"
                onClick={() => onSkillSelect(skill)}
              >
                {skill.name}
              </p>
              {skill.selected ?
                <span style={{ marginLeft: 10 }}>{"✔"}</span>
                : null
              }
            </div>

          ))}
          <button type="button" className="btn" onClick={hide}>
            close
          </button>
        </div>
      </div>
    </div>
  )
}
const SelectedSkills = ({ selectedSkills = [], onSkillSelect = () => { } }) => {
  if (!selectedSkills.length) return null;
  return <div style={{ margin: 10, }}>
    {
      selectedSkills.map((s, i) => (
        <span key={`selected-skill-${i}`} className="mb-0" style={{ cursor: "pointer", textAlign: 'center', padding: 10, borderRadius: 5, backgroundColor: "#d3dded", margin: 5, }}
          onClick={() => onSkillSelect(s)}
        >
          {s.name}
        </span>
      ))
    }
  </div>
}
const PostProject = (props) => {
  const { enumsState } = useEnumsContext();
  const [payload, setPayload] = React.useState({
    "_id": "",
    "title": "Support 2 Title",
    "description": "Support 2 Description...",
    "supportType": 2,
    "pricingType": 2,
    "skills": [
      "654743f34ee95d85831c1d1b",
      "654743f94ee95d85831c1d1c"
    ],
    "deliveryStamp": 1701050895,
    "deliveryType": 2,
    "location": "California, USA",
    "fixedPrice": 0,
    "hourlyMin": 30,
    "hourlyMax": 80,
    "proposals": []
  });
  const [skills, setSkills] = React.useState([]);
  const [show, setShow] = React.useState(false)
  const onSkillSelect = (skill) => {
    setSkills([...skills].map((sk, j) => {
      if (sk._id === skill._id) return { ...sk, selected: !sk.selected }
      else return sk;
    }))
  }
  function getUniqueArray(arr) {
    const uniqueSet = new Set(arr.map(JSON.stringify));
    return Array.from(uniqueSet).map(JSON.parse);
  }
  const onChangeSkills = debounce(async (e) => {
    // console.log('[onChangeSkills]', e.target.value);
    const data = await Post('api/v1/skill/search', { searchQuery: `${e.target.value}` });
    // console.log('[onChangeSkills].data', data);
    if (data.statusCode === 200) {
      setShow(true);
      setSkills(uniqueArray([...skills].filter(s => s.selected).concat(data.doc.skills)))

    }
  }, 1500)
  const hide = () => setShow(false)
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Post a Support</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {" "}
                    Post a Request for Live Support
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="select-project mb-4">
                <form >
                  <div className="title-box widget-box">
                    {/* Support Title */}
                    <div className="title-content">
                      <div className="title-detail">
                        <h3>Title of Support Request</h3>
                        <div className="form-group mb-0">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Support title"
                            id="title"
                          />
                        </div>
                      </div>
                    </div>
                    {/* /Support Title */}
                    {/* Category Content */}
                    <div className="title-content">
                      <div className="title-detail">
                        <h3>Support Type</h3>
                        <div className="form-group mb-0">
                          <select className="form-control select">
                            <option value={0}>Select</option>
                            {(enumsState.SupportTypes || []).map((supportType, index) => {
                              return <option value={supportType.value} key={`support-key-${index}`}>{supportType.text}</option>
                            })}

                          </select>
                        </div>
                      </div>
                    </div>
                    {/* /Category Content */}
                    {/* Price Content */}
                    <div className="title-content">
                      <div className="title-detail">
                        <h3>Pricing Type</h3>
                        <div className="form-group price-cont mb-0" id="price_type">
                          <select name="price" className="form-control select">
                            <option value={0}>Select</option>
                            {(enumsState.PricingTypes || []).map((pricingType, index) => {
                              return <option value={pricingType.value} key={`support-key-${index}`}>{pricingType.text}</option>
                            })}
                          </select>
                        </div>
                        <div
                          className="form-group mt-3"
                          id="price_id"
                          style={{ display: "none" }}
                        >
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <button
                                type="button"
                                className="btn btn-white dropdown-toggle"
                                data-bs-toggle="dropdown"
                              >
                                $
                              </button>
                              <div className="dropdown-menu">
                                <Link className="dropdown-item" to="#">
                                  Dollars
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Euro
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Bitcoin
                                </Link>
                              </div>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder={20.0}
                            />
                          </div>
                        </div>
                        <div
                          className="form-group mt-3"
                          id="hour_id"
                          style={{ display: "none" }}
                        >
                          <div className="row">
                            <div className="col-md-6 mb-2">
                              <div className="input-group form-inline">
                                <div className="input-group-prepend">
                                  <button
                                    type="button"
                                    className="btn btn-white dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                  >
                                    $
                                  </button>
                                  <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="#">
                                      Dollars
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                      Euro
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                      Bitcoin
                                    </Link>
                                  </div>
                                </div>
                                <input
                                  type="text"
                                  className="form-control mr-2"
                                  placeholder={20.0}
                                />{" "}
                                <label> / hr</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-group form-inline">
                                <label>For </label>{" "}
                                <input
                                  type="text"
                                  className="form-control ml-2"
                                  placeholder=" ( eg: 2 Weeks)"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Price Content */}
                    {/* Skills Content */}
                    <div className="title-content">
                      <div className="title-detail">
                        <h3>Desired areas of expertise </h3>
                        <div className="form-group mb-0">
                          <input
                            type="text"
                            data-role="tagsinput"
                            className="input-tags form-control"
                            name="services"
                            defaultValue=""
                            id="services"
                            placeholder="UX, UI, App Design, Wireframing, Branding"
                            onChange={onChangeSkills}
                          />
                          {show && <Skills skills={skills} onSkillSelect={onSkillSelect} hide={hide} />}
                          <SelectedSkills selectedSkills={skills.filter(s => s.selected)} onSkillSelect={onSkillSelect} />
                        </div>
                      </div>
                    </div>
                    {/* /Skills Content */}
                    {/* Support Period Content */}
                    <div className="title-content">
                      <div className="title-detail">
                        <h3>Support Needed By</h3>
                        <div className="form-group mb-0" id="pro_period">
                          <div className="radio">
                            <label className="custom_radio">
                              <input
                                type="radio"
                                defaultValue="period"
                                name="period"
                              />
                              <span className="checkmark" /> ASAP
                            </label>
                          </div>
                          <span className="checkmark" /> I have a specific iEP meeting or other important date scheduled by which time I would need support

                          <div style={{ display: 'flex', flexDirection: 'row' }}>

                            <div className="radio">
                              <label className="custom_radio">
                                <input
                                  type="radio"
                                  defaultValue="period"
                                  name="period"
                                />
                                <span className="checkmark" /> Yes
                              </label>
                            </div>

                            <div className="radio">
                              <label className="custom_radio">
                                <input
                                  type="radio"
                                  defaultValue="period"
                                  name="period"
                                />
                                <span className="checkmark" /> No
                              </label>
                            </div>
                          </div>
                          <div className="radio">
                            <label className="custom_radio">
                              <input
                                type="radio"
                                defaultValue="job"
                                name="period"
                                defaultChecked
                              />
                              <span className="checkmark" /> Job will Start On
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="filter-widget mb-0" id="period_date">
                              <div className="cal-icon">
                                <input
                                  type="text"
                                  className="form-control datetimepicker"
                                  placeholder="Select Date"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Support Period Content */}
                    <div className="title-content pb-0">
                      <div className="title-detail">
                        <h3>Describe the concern(s) for which you are seeking support </h3>
                        <div className="form-group mb-0">
                          {/* <RichTextEditor
                          value="Default value"
                          options={{
                            lang: 'ru-RU',
                            height: 350,
                            dialogsInBody: true,
                            toolbar: [
                              ['style', ['style']],
                              ['font', ['bold', 'underline', 'clear']],
                              ['fontname', ['fontname']],
                              ['para', ['ul', 'ol', 'paragraph']],
                              ['table', ['table']],
                              ['insert', ['link', 'picture', 'video']],
                              ['view', ['fullscreen', 'codeview']]
                            ]
                          }}
                        /> */}
                          <textarea className="form-control summernote" rows={5} defaultValue={""} />
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: 20 }}>
                      <p>
                        <p>Disclaimer:</p>
                        Your support request will be posted and accessible by eligible provoiders on our site.  While the providers are verified, it is best to avoid sharing any personally identifying details at this juncture.  Once you connect with a provider, you will have the ability to securely transmit personally identifiable information
                      </p>
                    </div>
                    {/* /Support Title */}
                    <div className="row">
                      <div className="col-md-12 text-end">
                        <div className="btn-item">
                          <button type="submit" className="btn next-btn">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Support Title */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  )

}
export default PostProject;